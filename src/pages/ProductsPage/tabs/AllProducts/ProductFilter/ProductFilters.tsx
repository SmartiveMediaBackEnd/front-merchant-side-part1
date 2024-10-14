import { useTranslation } from 'react-i18next';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { Button } from 'src/app/components/optimized';
import { FilterSideBar } from 'src/app/components/shared';
import { useForm } from 'src/app/utils/hooks/form';
import { useAppDispatch } from 'src/app/store';
import { Form } from 'src/app/components/ui/form';
import { getProductFilters } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import ProductFilterPrice from './_comp/ProductFilterPrice';
import ProductFilterQuantity from './_comp/ProductFilterQuantity';
import useProductsFilter, { IProductFilters } from './_hook/HookProductFilters';
import ProductFilterBrand from './_comp/ProductFilterBrand';
import ProductFilterCategories from './_comp/ProductFilterCategories';
import ProductFilterSwitch from './_comp/ProductFilterSwitch';
import ProductFilterTypes from './_comp/ProductFilterTypes';

const ProductFilters = ({
    HandelCloseDrawer,
    openDrawer,
}: {
    openDrawer: boolean;
    HandelCloseDrawer: () => void;
}) => {
    //  hooks
    const { t } = useTranslation();
    const divClass = 'flex-row-global justify-between';

    // custom hook
    const { handelDefaultValue, ProductsFilterSchema } = useProductsFilter();

    // redux
    const dispatch = useAppDispatch();

    const handleSubmit = (values: IProductFilters) => {
        console.log('Form Values:', values);

        const params = new URLSearchParams();

        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                params.append(key, value.toString());
            }
        });

        console.log('Generated Params:', params.toString());

        dispatch(getProductFilters(params.toString()));
    };

    const { formStore, onSubmit } = useForm({
        schema: ProductsFilterSchema,
        handleSubmit: handleSubmit,
        defaultValues: handelDefaultValue(),
    });
    
    const handleReset = () => {
        HandelCloseDrawer()
        formStore.reset();
    }

    return (
        <Form {...formStore}>
            <form onSubmit={onSubmit} >
                <FilterSideBar handelClose={HandelCloseDrawer} sideDrawerOpen={openDrawer}>
                    <div className='flex-col-global '>
                        {/*  top section */}
                        <div className={divClass}>
                            <h3 className='title text-[1.2rem]'>{t('Products Filters')}</h3>
                            <IoCloseCircleOutline
                                onClick={HandelCloseDrawer}
                                className='cursor-pointer text-[1.2rem]'
                            />
                        </div>

                        <div className='w-full'>
                            <ProductFilterCategories formStore={formStore} />
                            <ProductFilterBrand formStore={formStore} />
                            <ProductFilterPrice formStore={formStore} />
                            <ProductFilterQuantity formStore={formStore} />
                            <ProductFilterTypes formStore={formStore} />
                            <ProductFilterSwitch formStore={formStore} />
                        </div>

                        <div className='flex-row-global justify-between'>
                            <Button>{t('Show Results')}</Button>
                            <Button variant='tertiary' onClick={onSubmit} >{t('Saved Filters')}</Button>
                            <Button variant='tertiary' className='text-[red] bg-white' onClick={handleReset}>
                                {t('Reset')}
                            </Button>
                        </div>
                    </div>
                </FilterSideBar>
            </form>
        </Form>
    )
}

export default ProductFilters;
