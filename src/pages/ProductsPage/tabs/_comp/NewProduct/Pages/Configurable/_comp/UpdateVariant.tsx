// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useAppDispatch } from 'src/app/store';
// import FormField from 'src/app/components/ui/form/field';
// import { useAppSelector } from 'src/app/store';
// import { UseFormReturn } from 'react-hook-form';
// import { Input } from 'src/app/components/ui/input';
// import { GlobalDialog } from 'src/app/components/shared';
// import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
// import { getInventoryTable } from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';
// import { Button } from 'src/app/components/optimized';
// import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
// import { StarIcon } from 'src/app/utils/icons';
// import { getProduct } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
// import { useSearchParams } from 'react-router-dom';
// import { useFormStore } from 'src/app/context/ConfigurableContext ';
// import { AddProductSchemaSchemaValues } from '../utils';
// import ProductFormOptionsAndVariationsSection from '../../../Forms/OptionsAndVariations/Variations';

// const UpdateVariant = ({ openDialog, handleClose }) => {
//     const { t } = useTranslation();
// const context = useFormStore();

// if (!context) {
//     throw new Error("Error: FormStoreContext");
// }
// const { formStore, onSubmit } = context;

//     return (
//         <GlobalDialog
//             openDialog={openDialog}
//             handleClose={handleClose}
//             style={{
//                 width: {
//                     lg: '50%',
//                     md: '70%',
//                     xs: '90%',
//                 },
//                 height: { md: '600px', xs: '600px' },
//             }}
//         >

//             <ProductFormOptionsAndVariationsSection id='OptionsAndVariationsSection' />
//             {/* hgngbgbgbg

//             {/* <p>{color / size}</p> */}
//             {/* <TabbedFormField
//                 formStore={formStore}
//                 label='Name'
//                 keys={[
//                     { name: `en.name`, label: 'En' },
//                     { name: `ar.name`, label: 'عربي' },
//                 ]}
//                 renderer={(field) => <Input {...field} />}
//             />


//             <FormField
//                 formStore={formStore}
//                 label='Price'
//                 name={`price`}
//                 render={(field) => (
//                     <Input {...field} value={field.value ?? 0} type='number' />
//                 )}
//             />

//             <FormField
//                 formStore={formStore}
//                 label='Discount'
//                 name={`discount`}
//                 render={(field) => (
//                     <Input {...field} value={field.value ?? 0} type='number' />
//                 )}
//             />

//             <FormField
//                 formStore={formStore}
//                 label='SKU'
//                 name={`sku`}
//                 render={(field) => (
//                     <Input
//                         {...field}
//                         value={field.value}
//                         disabled
//                     />
//                 )}
//             />

//             <div className='hidden'>
//                 <FormField
//                     formStore={formStore}
//                     label='color'
//                     name={`color`}
//                     render={(field) => (
//                         <Input
//                             {...field}
//                             value={field.value}
//                             disabled
//                         />
//                     )}
//                 />

//                 <FormField
//                     formStore={formStore}
//                     label='size'
//                     name={`size`}
//                     render={(field) => (
//                         <Input
//                             {...field}
//                             value={field.value}
//                             disabled
//                         />
//                     )}
//                 />
//             </div>

//             <FormField
//                 formStore={formStore}
//                 label='Quantity'
//                 name={`quantity`}
//                 render={(field) => (
//                     <Input {...field} value={totalQuantity} disabled />
//                 )}
//             />

//             <div>
//                 {inventory?.map((inventor, i) => {
//                     if (!inventor.id) return null;
//                     const idInv: number = inventor.id;
//                     const matchingQuantity = quantityData.find((item) => item.inventory_source_id === inventor.id);

//                     return (
//                         <div className='flex items-center justify-between' key={i}>
//                             <p className='title'>{inventor.code}</p>
//                             <FormField
//                                 formStore={formStore}
//                                 name={`inventories.${i}.quantity`}
//                                 render={(field) => (
//                                     <Input
//                                         {...field}
//                                         type="number"
//                                         value={matchingQuantity?.qty || ''}
//                                         onChange={(e) => {
//                                             field.onChange(e);
//                                             handleQuantityChange(i, e.target.value, idInv);
//                                         }}
//                                     />
//                                 )}
//                             />

//                             <div className='hidden'>
//                                 <FormField
//                                     formStore={formStore}
//                                     name={`inventories.${i}.id`}
//                                     render={(field) => (
//                                         <Input
//                                             {...field} value={field.value || idInventory} disabled />
//                                     )}
//                                 />
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>


//             <div className='custom-grid-parent'>
//                 <div className='grid-left'>
//                     <div className='flex-row-global gap-4'>
//                         <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore}
//                             name={`new`}
//                             enable />
//                         <p>{t('New')}</p>
//                     </div>

//                     <div className='flex-row-global gap-4'>
//                         <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore}
//                             name={`visible_individually`}
//                             enable />
//                         <p>{t('visible individually')}</p>
//                     </div>
//                 </div>


//                 <div className='grid-right'>
//                     <div className='flex-row-global gap-4'>
//                         <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore}
//                             name={`status`}

//                             enable />
//                         <p>{t('status')}</p>
//                     </div>

//                     <div className='flex-row-global gap-4 md:px-4'>
//                         <StarIcon className='fill-hint' />
//                         <p>{t('Featured')}</p>
//                     </div>
//                 </div>
//             </div>

//             <div className='flex-btn-end'>
//                 <Button variant='primary' type="button" onClick={() => handleClose()} >
//                     {t('Save')}
//                 </Button>
//             </div> */}
//         </GlobalDialog >
//     )
// }

// export default UpdateVariant
// ///////////////////////////////////////////////////////////////////////////////////////


import { Form } from 'src/app/components/ui/form';
import { useFormStore } from 'src/app/context/ConfigurableContext ';
import ProductFormOptionsAndVariationsSection, { AttributeValue } from '../../../Forms/OptionsAndVariations/Variations';
import { useAppSelector } from 'src/app/store';
import { useSearchParams } from 'react-router-dom';
import { getProduct, PostUpdateQuickProduct } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddProductSchemaSchemaValues } from '../utils';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import { StarIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';



interface InventoryInterface {
    id: number;
    quantity: number;
}




// const UpdateVariant = () => {
//     const { product } = useAppSelector((state) => state.allProducts);
//     const [searchParams] = useSearchParams();
//     const dispatch = useDispatch();
//     const id = searchParams.get('id');
//     const context = useFormStore();

//     if (!context) {
//         throw new Error("Error: FormStoreContext");
//     }
//     const { formStore, onSubmit } = context;


//     useEffect(() => {
//         if (id) {
//             dispatch(getProduct(id))
//         }
//     }, [id, dispatch]);



//     return (
//         <Form {...formStore}>
//             <form onSubmit={onSubmit}>
//                 <section className='custom-grid-parent gap-5 py-4  custom_container'>
//                     <div className='flex-col-global grid-left gap-4'>
//                         <ProductFormOptionsAndVariationsSection />
//                     </div>
//                 </section>
//             </form>
//         </Form >
//     )
// }

interface Variant {
    code: string;
    sku: string;
    en: { name: string };
    ar: { name: string };
    price: number;
    quantity: number;
    discount: number;
    color: string;
    size: string;
    status: number;  // status like 'active', 'inactive', etc.
    new: boolean;
    featured: boolean;
    visible_individually: boolean;

    // inventories: InventoriesObject;

}




const zodBoolean = z.coerce.number().min(0).max(1);
const variantSchema = {
    variants: z.array(
        z.object({
            sku: z.string().min(1),
            en: z.object({
                name: z.string().min(1),
            }),
            ar: z.object({
                name: z.string().min(1),
            }),
            price: z.coerce.number().positive().min(1),
            discount: z.coerce.number().min(0).optional(),
            color: z.string().min(1),
            size: z.string().min(1),
            status: zodBoolean,
            new: zodBoolean,
            featured: zodBoolean,
            visible_individually: zodBoolean,
            quantity: z.coerce.number().positive().min(1),
            inventories: z.array(
                z.object({
                    id: z.coerce.number().optional(),
                    quantity: z.coerce.number().min(0).optional(),
                }),
            ).min(1),
            code: z.string().min(1),
            attributeValues: z.array(
                z.object({
                    id: z.coerce.number().min(1),
                    name: z.string().min(1),
                }),
            ).min(1),
        }),
    ).optional(),
}

const VariantValues = {
    code: '',
    sku: '',
    en: { name: '' },
    ar: { name: '' },
    price: 0,
    quantity: 0,
    discount: 0,
    color: '',
    size: '',
    status: 1,  // status like 'active', 'inactive', etc.
    new: 0,
    featured: 0,
    visible_individually: 0,

    // inventories: InventoriesObject;

}

const UpdateVariant = () => {
    const { product } = useAppSelector((state) => state.allProducts);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const id = searchParams.get('id');
    const { t } = useTranslation();


    // const context = useFormStore();

    // if (!context) {
    //     throw new Error("Error: FormStoreContext");
    // }
    const { formStore, onSubmit } = useFormStore();



    return (
        <Form {...formStore}>
            <form onSubmit={onSubmit}>

                <TabbedFormField
                    formStore={formStore}
                    label='Name'
                    keys={[
                        {
                            name: 'en.name', label: 'En'
                        },
                        { name: 'ar.name', label: 'عربي' },
                    ]}
                    renderer={(field) => <Input {...field} />}
                />

                <FormField
                    formStore={formStore}
                    label='Price'
                    name='price'
                    render={(field) => (
                        <Input {...field} value={field.value ?? 0} type='number' />
                    )}
                />

                <FormField
                    formStore={formStore}
                    label='Discount'
                    name='discount'
                    render={(field) => (
                        <Input {...field} value={field.value ?? 0} type='number' />
                    )}
                />

                <FormField
                    formStore={formStore}
                    label='SKU'
                    name='sku'
                    render={(field) => (
                        <Input
                            {...field}
                            value={field.value}
                            disabled
                        />
                    )}
                />

                <FormField
                    formStore={formStore}
                    label='Quantity'
                    name='quantity'
                    render={(field) => (
                        <Input {...field} value={field.value} disabled />
                    )}
                />



                <div className='custom-grid-parent'>
                    <div className='grid-left'>
                        <div className='flex-row-global gap-4'>
                            <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore}
                                name='new'
                                enable />
                            <p>{t('New')}</p>
                        </div>

                        <div className='flex-row-global gap-4'>
                            <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore}
                                name='visible_individually'
                                enable />
                            <p>{t('visible individually')}</p>
                        </div>
                    </div>


                    <div className='grid-right'>
                        <div className='flex-row-global gap-4'>
                            <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore}
                                name='status'

                                enable />
                            <p>{t('status')}</p>
                        </div>

                        <div className='flex-row-global gap-4 md:px-4'>
                            <StarIcon className='fill-hint' />
                            <p>{t('Featured')}</p>
                        </div>
                    </div>
                </div>



                <button className='bg-red-500' onClick={onSubmit}>Update Product</button>
            </form >
        </Form >
    )
}
export default UpdateVariant;

{/* <div>
                    {inventory?.map((inventor, i) => {
                        if (!inventor.id) return null;
                        const idInv: number = inventor.id;
                        const matchingQuantity = quantityData.find((item) => item?.inventory_source_id === inventor.id);

                        return (
                            <div className='flex items-center justify-between' key={i}>
                                <p className='title'>{inventor.code}</p>
                                <FormField
                                    formStore={formStore}
                                    name={`variants.${index}.inventories.${i}.quantity`}
                                    render={(field) => (
                                        <Input
                                            {...field}
                                            type="number"
                                            value={field.value || matchingQuantity?.qty || ''}
                                            onChange={(e) => {
                                                const newValue = Number(e.target.value);
                                                field.onChange(newValue);
                                                handleQuantityChange(i, newValue, idInv);
                                            }}
                                        />
                                    )}
                                />

                                <div className='hidden'>
                                    <FormField
                                        formStore={formStore}
                                        name={`variants.${index}.inventories.${i}.id`}
                                        render={(field) => (
                                            <Input
                                                {...field} value={field.value || idInventory} disabled />
                                        )}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div> */}



// const submitHandler = (values: Variant) => {
//     id &&
//         dispatch(PostUpdateQuickProduct({ data: values, id })).then((promiseResponse) => {
//             if (promiseResponse.payload && typeof promiseResponse.payload === 'object' && 'code' in promiseResponse.payload && promiseResponse.payload.code === 200) {
//                 navigate(-1);
//             } else {
//                 console.error('Unexpected response format', promiseResponse);
//             }

//         })
// };

// const { formStore, onSubmit } = useForm({
//     schema: variantSchema,
//     handleSubmit: submitHandler,
//     defaultValues: VariantValues,
// });

// const updateVariantsInFormStore = (variants: any[]) => {
//     variants.forEach((variant, index) => {
//         if (variant.sku) {
//             formStore.setValue('sku', variant.sku);
//             formStore.setValue('en.name', variant.en.name);
//             formStore.setValue('ar.name', variant.ar.name);
//             formStore.setValue('price', variant.price);
//             formStore.setValue('discount', variant.discount);
//             formStore.setValue('color', variant.color);
//             formStore.setValue('size', variant.size);
//             formStore.setValue('status', variant.status);
//             formStore.setValue('new ', variant.new);
//             formStore.setValue('featured', variant.featured);
//             formStore.setValue('visible_individually', variant.visible_individually);
//             formStore.setValue('quantity', variant.quantity);

//             // if (variant.inventories) {
//             //     variant.inventories.forEach((inventory: InventoryInterface, inventoryIndex: number) => {
//             //         formStore.setValue('inventories.${ inventoryIndex }.id', inventory.id);
//             //         formStore.setValue('inventories.${inventoryIndex}.quantity', inventory.quantity);
//             //     });
//             // }

//             // if (variant.attributeValues) {
//             //     variant.attributeValues.forEach((attributeValue: AttributeValue, attributeIndex: number) => {
//             //         formStore.setValue('attributeValues.${ attributeIndex }.id', attributeValue.id);
//             //         formStore.setValue('attributeValues.${attributeIndex}.name', attributeValue.name);
//             //     });
//             // }
//         } else {
//             console.warn(`Missing SKU for variant at index ${index}`, variant);
//         }
//     });
// };


// useEffect(() => {
//     if (id && product) {
//         updateVariantsInFormStore(product.variants || []);
//     }
// }, [id, product]);