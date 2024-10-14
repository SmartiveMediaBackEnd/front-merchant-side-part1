import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'src/app/components/optimized';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { useTranslation } from 'react-i18next';
import {
    ProductFormBasicInfoSection
} from '../../..';
import { Form } from 'src/app/components/ui/form';
import { useDispatch } from 'react-redux';
import { GlobalDialog } from 'src/app/components/shared';

import { InferredZodSchema, useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';
import { getAllProductsTable, PostSimpleQuickProduct } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import FormField from 'src/app/components/ui/form/field';
import { useAppSelector } from 'src/app/store';
import { getCategoriesTable } from 'src/app/store/slices/productsPage/categories/categoriesTable/categoriesTableAsyncThunks';
import { BrandsInterface } from 'src/app/interface/BrandInterface';
import { getBrandsTable } from 'src/app/store/slices/productsPage/brands/brandsAsyncThunks';
import { Input } from 'src/app/components/ui/input';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { CategoryInterface } from 'src/app/interface/CategoriesInterface';
import AddBrandForm from 'src/pages/ProductsPage/tabs/Brands/_comp/AddBrandForm';
import AddCategoryForm from 'src/pages/ProductsPage/tabs/Categories/_comp/AddCategoryForm';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';


const ProductSchemaTest = {
    type: z.string().min(3),
    sku: z.string().min(3).max(30),
    en: z.object({
        name: z.string().min(3).max(50),
        // description: z.string().min(10).max(1000),
    }),
    ar: z.object({
        name: z.string().min(3).max(50),
        // description: z.string().min(10).max(1000),
    }),
    categories: z.string().min(1),
    brand_id: z.string().min(1),
};
const defaultProductValues = {
    type: "configurable",
    sku: '',
    en: {
        name: '',
    },
    ar: {
        name: '',
    },
    categories: '',
    brand_id: '',
};

type AddProductSchemaValues = InferredZodSchema<typeof ProductSchemaTest>;


const BasicInfo = ({
    openDialog,
    handleClose,
    // edit_product,
}: {
    openDialog: boolean;
    handleClose: () => void;
    // edit_product: Product;
}) => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { xs } = useResponsive();
    const { language } = useLanguage();
    const [openDialogCategory, setOpenDialogCategory] = useState(false);
    const [openBrandDialog, setOpenBrandDialog] = useState(false);

    const { categoriesTable } = useAppSelector((state) => state.categoriesTable);
    const { allProducts } = useAppSelector((state) => state.allProducts);
    const { brands } = useAppSelector((state) => state.brands);
    useEffect(() => {
        dispatch(getCategoriesTable());
        dispatch(getAllProductsTable());
        dispatch(getBrandsTable());
    }, [dispatch]);

    // const submitHandler = (values: AddProductSchemaValues) => {
    //     dispatch(PostSimpleQuickProduct(values)).then((response) => {
    //         console.log('API response:', response);
    //         if (response.payload && typeof response.payload === 'object' && 'code' in response.payload && response.payload.code === 200) {
    //             // navigate(+1);
    //         } else {
    //             console.error('Unexpected response format', response);
    //         }
    //     });
    // };

    const submitHandler = (values: AddProductSchemaValues) => {
        dispatch(PostSimpleQuickProduct(values)).then((response) => {
            console.log('API response:', response);

            // Check if the response is successful and contains the product ID
            if (
                response.payload &&
                typeof response.payload === 'object' &&
                'code' in response.payload &&
                response.payload.code === 200 &&
                'data' in response.payload &&
                response.payload.data.id
            ) {
                const productId = response.payload.data.id;

                // Navigate to the new URL with the product ID
                navigate(`/products/new/configurable?id=${productId}`);
            } else {
                console.error('Unexpected response format', response);
            }
        });
    };


    const { formStore, onSubmit } = useForm({
        schema: ProductSchemaTest,
        handleSubmit: submitHandler,
        defaultValues: defaultProductValues,
    });
    console.log('error test', formStore.formState.errors)
    useEffect(() => {
        console.log('gg', formStore.getValues());
    }, [formStore]);

    return (
        <GlobalDialog
            openDialog={openDialog}
            handleClose={handleClose}
            style={{
                width: {
                    lg: '50%',
                    md: '70%',
                    xs: '90%',
                },
                height: { md: '400px', xs: '400px' },
            }}
        >
            <Form {...formStore}>
                <form onSubmit={onSubmit}>
                    <section className='global-cards'>
                        <h3 className='title'>{t('Basic info')}</h3>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>

                            <TabbedFormField
                                formStore={formStore}
                                keys={[
                                    { name: 'en.name', label: 'En' },
                                    { name: 'ar.name', label: 'عربي' },
                                ]}
                                label={t('Product Name')}
                                renderer={(field) => <Input {...field} />}
                            />
                            <FormField
                                formStore={formStore}
                                name='sku'
                                label={t('SKU')}
                                render={(field) => <Input
                                    {...field}
                                    value={field.value}
                                    onChange={(e) => {
                                        field.onChange(e.target.value);
                                    }}
                                />}
                            />

                            <SelectFormField
                                name='categories'
                                setOpenDialog={setOpenDialogCategory}
                                add_button
                                formStore={formStore}
                                options={categoriesTable?.map((e: CategoryInterface) => {
                                    return {
                                        label: e?.name,
                                        value: e?.id?.toString(),
                                    };
                                })}
                                placeholder={t('Select Category')}
                            />

                            <SelectFormField
                                name='brand_id'
                                setOpenDialog={setOpenBrandDialog}
                                add_button
                                formStore={formStore}
                                options={brands?.map((e: BrandsInterface) => {
                                    return {
                                        label: language === 'ar' ? e?.name_ar : e?.name_en,
                                        value: e?.id?.toString(),
                                    };
                                })}
                                placeholder={t('Select brand')}
                            />
                        </div>



                        {
                            openDialogCategory && (
                                < AddCategoryForm
                                    openDialog={openDialogCategory}
                                    handleClose={() => setOpenDialogCategory(false)}
                                    allProducts={allProducts}
                                    Edit_id={''}
                                    setEdit_id={function (e: string): void {
                                        throw new Error('Function not implemented.');
                                    }}
                                />
                            )
                        }
                        {/* open add brand form */}
                        {
                            openBrandDialog && (
                                <AddBrandForm
                                    Edit_id={''}
                                    setEdit_id={function (e: string): void {
                                        throw new Error('Function not implemented.');
                                    }}
                                    allProducts={allProducts}
                                    openDialog={openBrandDialog}
                                    handleClose={() => setOpenBrandDialog(false)}
                                />
                            )
                        }
                    </section >

                    <div className='flex-btn-end'>
                        <Button variant='primary' onClick={onSubmit}>
                            {t('Next')}
                        </Button>
                    </div>
                </form >
            </Form >
        </GlobalDialog >
    )
}

export default BasicInfo;
