// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useAppDispatch } from 'src/app/store';
// import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';
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

// // export type InventoryItem = {
// //     id: number;
// //     quantity?: number | undefined;
// //     qty?: number | undefined;
// //     inventory_source_id?: number | undefined;
// //     code?: string;

// // };

// export type InventoryItem = {
//     id: string;
//     inventory_source_id: string;
//     product_id: string;
//     qty?: number;
//     quantity?: number;
//     inventory_sources?: any;
// };

// const AdvancedFields = ({ index, formStore, update, openDialog, handleClose, name, idVar, variation, id }: { index: number; formStore: UseFormReturn<AddProductSchemaSchemaValues>; update: (index: number, data: any) => void; openDialog: boolean; handleClose: () => void; name: string; idVar: string }) => {
//     const [totalQuantity, setTotalQuantity] = useState<number>(0);
//     const [idInventory, setIdInventory] = useState<number[]>([]);
//     const [quantityData, setQuantityData] = useState<InventoryItem[]>([]);
//     const { inventory } = useAppSelector((state) => state.inventory);
//     const { product } = useAppSelector((state) => state.allProducts);
//     const { t } = useTranslation();
//     const dispatch = useAppDispatch();
//     const skuValue = formStore.getValues('sku') || '';
//     const Sku = idVar + '_' + skuValue;
//     // const ids = variation.id.split('/').map((id: any) => id.trim());
//     const ids = typeof variation?.id === 'string'
//         ? variation.id.split('/').map((id: any) => id.trim())
//         : [variation?.id?.toString()];
//     const colorId = ids[0];
//     const sizeId = ids[1];
//     const [searchParams] = useSearchParams();
//     const idUrl = searchParams.get('id');

//     const handleQuantityChange = (i: number, value: string | number, idInv: number) => {
//         const quantity = Number(value) || 0;

//         setIdInventory((prev) => {
//             const updatedIds = [...prev];
//             updatedIds[i] = idInv;
//             return updatedIds;
//         });

//         setQuantityData((prev) => {
//             const updatedData = [...prev];
//             updatedData[i] = { ...updatedData[i], quantity };
//             return updatedData;
//         });
//     };
//     useEffect(() => {
//         if (!quantityData || quantityData.length === 0) return;

//         const total = quantityData.reduce((acc, curr) => acc + (curr?.quantity || 0), 0);
//         console.log('Total Quantity:', total);
//         setTotalQuantity(total);
//         formStore.setValue(`variants.${index}.quantity`, total);
//     }, [quantityData]);

//     useEffect(() => {
//         if (idUrl) {
//             dispatch(getProduct(idUrl)).then(() => {
//                 if (product && Array.isArray(product.variants)) {
//                     const allInventorySources: InventoryItem[] = product.variants.reduce((acc, variant) => {
//                         return acc.concat(variant.inventory_sources || []);
//                     }, []);

//                     // setQuantityData(allInventorySources);
//                     setQuantityData(allInventorySources.map(source => ({ ...source, quantity: source.quantity || 0 })));
//                 }
//             });
//         }
//     }, [idUrl, dispatch]);

//     console.log('producttttt:', product);
//     console.log('quantityData:', quantityData);
//     useEffect(() => {

//         if (idInventory.length > 0) {
//             idInventory.forEach((idInv, i) => {
//                 console.log(`Setting ID for variant ${index}, inventory ${i}:`, idInv);
//                 formStore.setValue(`variants.${index}.inventories.${i}.id`, idInv);
//             });
//         }

//         if (quantityData.length > 0) {
//             quantityData.forEach((inventory, i) => {
//                 console.log(`Setting Quantity for variant ${index}, inventory ${i}:`, inventory?.quantity);
//                 formStore.setValue(`variants.${index}.inventories.${i}.quantity`, inventory?.quantity);
//             });
//         }
//     }, [idInventory, quantityData, formStore, index]);

//     //////////////////////////////////////////////////////////////////////////////
//     useEffect(() => {
//         if (!quantityData || quantityData.length === 0) return;

//         const total = quantityData.reduce((acc, curr) => acc + (curr?.quantity || 0), 0);
//         setTotalQuantity(total);
//         formStore.setValue(`variants.${index}.quantity`, total);
//     }, [quantityData]);

//     useEffect(() => {
//         const newSkuValue = `${idVar}_${skuValue}`;
//         formStore.setValue(`variants.${index}.sku`, newSkuValue);
//     }, [idVar, index, formStore, skuValue]);

//     useEffect(() => {
//         formStore.setValue(`variants.${index}.color`, colorId);
//     }, [index, formStore, colorId]);

//     useEffect(() => {
//         formStore.setValue(`variants.${index}.size`, sizeId);
//     }, [index, formStore, sizeId]);

//     useEffect(() => {
//         dispatch(getInventoryTable());
//     }, [dispatch]);
//     useEffect(() => {
//         formStore.setValue(`variants.${index}.status`, formStore.watch(`variants.${index}.status`) ? 1 : 0);
//     }, [formStore.watch(`variants.${index}.status`)]);
//     useEffect(() => {
//         formStore.setValue(`variants.${index}.new`, formStore.watch(`variants.${index}.new`) ? 1 : 0);
//     }, [formStore.watch(`variants.${index}.new`)]);
//     useEffect(() => {
//         formStore.setValue(`variants.${index}.visible_individually`, formStore.watch(`variants.${index}.visible_individually`) ? 1 : 0);
//     }, [formStore.watch(`variants.${index}.visible_individually`)]);

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

//             <p>{skuValue}</p>
//             <p>{idVar}</p>
//             <p>{name}</p>
//             <TabbedFormField
//                 formStore={formStore}
//                 label='Name'
//                 keys={[
//                     { name: `variants.${index}.en.name`, label: 'En' },
//                     { name: `variants.${index}.ar.name`, label: 'عربي' },
//                 ]}
//                 renderer={(field) => <Input {...field} />}
//             />

//             <FormField
//                 formStore={formStore}
//                 label='Price'
//                 name={`variants.${index}.price`}
//                 render={(field) => (
//                     <Input {...field} value={field.value ?? 0} type='number' />
//                 )}
//             />

//             <FormField
//                 formStore={formStore}
//                 label='Discount'
//                 name={`variants.${index}.discount`}
//                 render={(field) => (
//                     <Input {...field} value={field.value ?? 0} type='number' />
//                 )}
//             />

//             <FormField
//                 formStore={formStore}
//                 label='SKU'
//                 name={`variants.${index}.sku`}
//                 render={(field) => (
//                     <Input
//                         {...field}
//                         value={field.value || Sku}
//                         disabled
//                     />
//                 )}
//             />

//             <div className='hidden'>
//                 <FormField
//                     formStore={formStore}
//                     label='color'
//                     name={`variants.${index}.color`}
//                     render={(field) => (
//                         <Input
//                             {...field}
//                             value={field.value || colorId}
//                             disabled
//                         />
//                     )}
//                 />

//                 <FormField
//                     formStore={formStore}
//                     label='size'
//                     name={`variants.${index}.size`}
//                     render={(field) => (
//                         <Input
//                             {...field}
//                             value={field.value || sizeId}
//                             disabled
//                         />
//                     )}
//                 />
//             </div>

//             <FormField
//                 formStore={formStore}
//                 label='Quantity'
//                 name={`variants.${index}.quantity`}
//                 render={(field) => (
//                     <Input {...field} value={totalQuantity} disabled />
//                 )}
//             />

//             <div>
//                 {inventory?.map((inventor, i) => {
//                     if (!inventor.id) return null;
//                     const idInv: number = inventor.id;
//                     const matchingQuantity = quantityData.find((item) => item?.inventory_source_id === inventor.id);

//                     return (
//                         <div className='flex items-center justify-between' key={i}>
//                             <p className='title'>{inventor.code}</p>
//                             <FormField
//                                 formStore={formStore}
//                                 name={`variants.${index}.inventories.${i}.quantity`}
//                                 render={(field) => (
//                                     <Input
//                                         {...field}
//                                         type="number"
//                                         value={matchingQuantity?.qty || ''}
//                                         onChange={(e) => {
//                                             field.onChange(e);
//                                             handleQuantityChange(i, e.target.value, idInv);
//                                         }}

//                                     // onChange={(e) => {
//                                     //     field.onChange(e);
//                                     //     handleQuantityChange(i, e.target.value, idInv);
//                                     // }}
//                                     />
//                                 )}
//                             />

//                             <div className='hidden'>
//                                 <FormField
//                                     formStore={formStore}
//                                     name={`variants.${index}.inventories.${i}.id`}
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
//                             name={`variants.${index}.new`}
//                             enable />
//                         <p>{t('New')}</p>
//                     </div>

//                     <div className='flex-row-global gap-4'>
//                         <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore}
//                             name={`variants.${index}.visible_individually`}
//                             enable />
//                         <p>{t('visible individually')}</p>
//                     </div>
//                 </div>

//                 <div className='grid-right'>
//                     <div className='flex-row-global gap-4'>
//                         <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore}
//                             name={`variants.${index}.status`}

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
//             </div>
//         </GlobalDialog >
//     )
// }

// export default AdvancedFields;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useAppDispatch } from 'src/app/store';
// import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';
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

// export type InventoryItem = {
//     id: string;
//     inventory_source_id: string;
//     product_id: string;
//     qty?: number;
//     quantity?: number;
//     inventory_sources?: any;
// };

// const AdvancedFields = ({ index, formStore, openDialog, handleClose, name, idVar, variation, id, variantIdToDisplay }: { index: number; formStore: UseFormReturn<AddProductSchemaSchemaValues>; openDialog: boolean; handleClose: () => void; name: string; idVar: string }) => {
//     const [totalQuantity, setTotalQuantity] = useState<number>(0);
//     const [idInventory, setIdInventory] = useState<number[]>([]);
//     const [quantityData, setQuantityData] = useState<InventoryItem[]>([]);
//     const { inventory } = useAppSelector((state) => state.inventory);
//     const { product } = useAppSelector((state) => state.allProducts);
//     const { t } = useTranslation();
//     const dispatch = useAppDispatch();
//     const skuValue = formStore.getValues('sku') || '';
//     const Sku = idVar + '_' + skuValue;
//     const ids = typeof variation?.id === 'string'
//         ? variation.id.split('/').map((id: any) => id.trim())
//         : [variation?.id?.toString()];
//     const colorId = ids[0];
//     const sizeId = ids[1];
//     const [searchParams] = useSearchParams();
//     const idUrl = searchParams.get('id');

//     useEffect(() => {
//         if (!quantityData || quantityData.length === 0) return;

//         const total = quantityData.reduce((acc, curr) => acc + (curr?.quantity || 0), 0);
//         console.log('Total Quantity:', total);
//         setTotalQuantity(total);
//         formStore.setValue(`variants.${index}.quantity`, total);
//     }, [quantityData]);

//     useEffect(() => {
//         if (idUrl) {
//             dispatch(getProduct(idUrl)).then(() => {
//                 if (product && Array.isArray(product.variants)) {
//                     console.log('Product:', product);
//                     console.log('Product ID URL:', idUrl);

//                     if (variantIdToDisplay) {
//                         const allInventorySources = product.variants.flatMap(variant => {
//                             if (variant.id === variantIdToDisplay) {
//                                 console.log('Variant ID:', variant.id);
//                                 console.log('Variant Inventory Sources:', variant.inventory_sources);

//                                 return variant.inventory_sources.map(source => ({
//                                     product_id: source.product_id,
//                                     inventory_source_id: source.inventory_source_id,
//                                     id: source.id,
//                                     qty: source.qty || 0,
//                                     quantity: source.qty || 0
//                                 }));
//                             }
//                             return [];
//                         });

//                         console.log('Filtered Inventory Sources for Variant ID:', variantIdToDisplay, allInventorySources);
//                         setQuantityData(allInventorySources);
//                     }
//                 }
//             });
//         }
//     }, [idUrl, variantIdToDisplay, dispatch]);

//     const handleQuantityChange = (i: number, value: string | number, idInv: number) => {
//         const quantity = Number(value) || 0;

//         setQuantityData(prev => {
//             const updatedData = [...prev];

//             if (!updatedData[i]) {
//                 updatedData[i] = { inventory_source_id: idInv.toString(), qty: quantity, quantity };
//             } else {
//                 updatedData[i] = { ...updatedData[i], qty: quantity, quantity };
//             }

//             console.log("Updated quantity data:", updatedData);
//             return updatedData;
//         });
//     };

//     console.log('quantityData:', quantityData);
//     useEffect(() => {

//         if (idInventory.length > 0) {
//             idInventory.forEach((idInv, i) => {
//                 console.log(`Setting ID for variant ${index}, inventory ${i}:`, idInv);
//                 formStore.setValue(`variants.${index}.inventories.${i}.id`, idInv);
//             });
//         }

//         if (quantityData.length > 0) {
//             quantityData.forEach((inventory, i) => {
//                 console.log(`Setting Quantity for variant ${index}, inventory ${i}:`, inventory?.quantity);
//                 formStore.setValue(`variants.${index}.inventories.${i}.quantity`, inventory?.quantity);
//             });
//         }
//     }, [idInventory, quantityData, formStore, index]);

//     //////////////////////////////////////////////////////////////////////////////
//     useEffect(() => {
//         if (!quantityData || quantityData.length === 0) return;

//         const total = quantityData.reduce((acc, curr) => acc + (curr?.quantity || 0), 0);
//         setTotalQuantity(total);
//         formStore.setValue(`variants.${index}.quantity`, total);
//     }, [quantityData]);

//     useEffect(() => {
//         const newSkuValue = `${idVar}_${skuValue}`;
//         formStore.setValue(`variants.${index}.sku`, newSkuValue);
//     }, [idVar, index, formStore, skuValue, formStore.watch('sku')]);

//     useEffect(() => {
//         formStore.setValue(`variants.${index}.color`, colorId);
//     }, [index, formStore, colorId]);

//     useEffect(() => {
//         formStore.setValue(`variants.${index}.size`, sizeId);
//     }, [index, formStore, sizeId]);

//     useEffect(() => {
//         dispatch(getInventoryTable());
//     }, [dispatch]);
//     useEffect(() => {
//         formStore.setValue(`variants.${index}.status`, formStore.watch(`variants.${index}.status`) ? 1 : 0);
//     }, [formStore.watch(`variants.${index}.status`)]);
//     useEffect(() => {
//         formStore.setValue(`variants.${index}.new`, formStore.watch(`variants.${index}.new`) ? 1 : 0);
//     }, [formStore.watch(`variants.${index}.new`)]);
//     useEffect(() => {
//         formStore.setValue(`variants.${index}.visible_individually`, formStore.watch(`variants.${index}.visible_individually`) ? 1 : 0);
//     }, [formStore.watch(`variants.${index}.visible_individually`)]);

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

//             <p>{skuValue}</p>
//             <p>{idVar}</p>
//             <p>{name}</p>
//             <TabbedFormField
//                 formStore={formStore}
//                 label='Name'
//                 keys={[
//                     { name: `variants.${index}.en.name`, label: 'En' },
//                     { name: `variants.${index}.ar.name`, label: 'عربي' },
//                 ]}
//                 renderer={(field) => <Input {...field} />}
//             />

//             <FormField
//                 formStore={formStore}
//                 label='Price'
//                 name={`variants.${index}.price`}
//                 render={(field) => (
//                     <Input {...field} value={field.value ?? 0} type='number' />
//                 )}
//             />

//             <FormField
//                 formStore={formStore}
//                 label='Discount'
//                 name={`variants.${index}.discount`}
//                 render={(field) => (
//                     <Input {...field} value={field.value ?? 0} type='number' />
//                 )}
//             />

//             <FormField
//                 formStore={formStore}
//                 label='SKU'
//                 name={`variants.${index}.sku`}
//                 render={(field) => (
//                     <Input
//                         {...field}
//                         value={field.value || Sku}
//                         disabled
//                     />
//                 )}
//             />

//             <div className='hidden'>
//                 <FormField
//                     formStore={formStore}
//                     label='color'
//                     name={`variants.${index}.color`}
//                     render={(field) => (
//                         <Input
//                             {...field}
//                             value={field.value || colorId}
//                             disabled
//                         />
//                     )}
//                 />

//                 <FormField
//                     formStore={formStore}
//                     label='size'
//                     name={`variants.${index}.size`}
//                     render={(field) => (
//                         <Input
//                             {...field}
//                             value={field.value || sizeId}
//                             disabled
//                         />
//                     )}
//                 />
//             </div>

//             <FormField
//                 formStore={formStore}
//                 label='Quantity'
//                 name={`variants.${index}.quantity`}
//                 render={(field) => (
//                     <Input {...field} value={totalQuantity} disabled />
//                 )}
//             />

//             <div>
//                 {inventory?.map((inventor, i) => {
//                     if (!inventor.id) return null;
//                     const idInv: number = inventor.id;
//                     const matchingQuantity = quantityData.find((item) => item?.inventory_source_id === inventor.id);

//                     return (
//                         <div className='flex items-center justify-between' key={i}>
//                             <p className='title'>{inventor.code}</p>
//                             <FormField
//                                 formStore={formStore}
//                                 name={`variants.${index}.inventories.${i}.quantity`}
//                                 render={(field) => (
//                                     <Input
//                                         {...field}
//                                         type="number"
//                                         value={matchingQuantity?.qty || ''}
//                                         onChange={(e) => {
//                                             field.onChange(e);
//                                             handleQuantityChange(i, e.target.value, idInv);
//                                         }}

//                                     // onChange={(e) => {
//                                     //     field.onChange(e);
//                                     //     handleQuantityChange(i, e.target.value, idInv);
//                                     // }}
//                                     />
//                                 )}
//                             />

//                             <div className='hidden'>
//                                 <FormField
//                                     formStore={formStore}
//                                     name={`variants.${index}.inventories.${i}.id`}
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
//                             name={`variants.${index}.new`}
//                             enable />
//                         <p>{t('New')}</p>
//                     </div>

//                     <div className='flex-row-global gap-4'>
//                         <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore}
//                             name={`variants.${index}.visible_individually`}
//                             enable />
//                         <p>{t('visible individually')}</p>
//                     </div>
//                 </div>

//                 <div className='grid-right'>
//                     <div className='flex-row-global gap-4'>
//                         <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore}
//                             name={`variants.${index}.status`}

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
//             </div>
//         </GlobalDialog >
//     )
// }

// export default AdvancedFields;

/////////////////////////////////////////////////////////////////////////////

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'src/app/store';
import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';
import FormField from 'src/app/components/ui/form/field';
import { useAppSelector } from 'src/app/store';
import { UseFormReturn } from 'react-hook-form';
import { Input } from 'src/app/components/ui/input';
import { GlobalDialog } from 'src/app/components/shared';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { getInventoryTable } from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';
import { Button } from 'src/app/components/optimized';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import { StarIcon } from 'src/app/utils/icons';
import { getProduct } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import { useSearchParams } from 'react-router-dom';

export type InventoryItem = {
	id: string;
	inventory_source_id: string;
	product_id: string;
	qty?: number;
	quantity?: number;
	inventory_sources?: any;
};

const AdvancedFields = ({
	index,
	formStore,
	openDialog,
	handleClose,
}: {
	index: number;
	openDialog: boolean;
	handleClose: () => void;
	formStore: any;
}) => {
	const [totalQuantity, setTotalQuantity] = useState<number>(0);
	const [idInventory, setIdInventory] = useState<number[]>([]);
	const [quantityData, setQuantityData] = useState<InventoryItem[]>([]);
	const { inventory } = useAppSelector((state) => state.inventory);
	// const { product } = useAppSelector((state) => state.allProducts);
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const skuValue = formStore.getValues('sku') || '';
	const Sku = idVar + '_' + skuValue;
	const ids =
		typeof variation?.id === 'string'
			? variation.id.split('/').map((id: any) => id.trim())
			: [variation?.id?.toString()];
	const colorId = ids[0];
	const sizeId = ids[1];

	//////////////////////////////////////////////

	// const formStore = useForm({ defaultValues });

	// useEffect(() => {
	//     if (variation) {
	//         formStore.setValue(`variants.${index}.sku`, variation.sku || '');
	//         formStore.setValue(`variants.${index}.price`, variation.price || 0);
	//         formStore.setValue(`variants.${index}.discount`, variation.discount || 0);
	//         formStore.setValue(`variants.${index}.color`, variation.color || '');
	//         formStore.setValue(`variants.${index}.size`, variation.size || '');
	//     }
	// }, [variation, formStore, index]);

	const handleSave = () => {
		onSave();
		handleClose();
	};

	const handleQuantityChange = (i: number, value: string | number, idInv: number) => {
		const quantity = Number(value) || 0;
		setQuantityData((prev) => {
			const updatedData = [...prev];
			updatedData[i] = { ...updatedData[i], inventory_source_id: idInv.toString(), quantity };
			return updatedData;
		});
	};

	// console.log('quantityData:', quantityData);
	useEffect(() => {
		if (idInventory.length > 0) {
			idInventory.forEach((idInv, i) => {
				console.log(`Setting ID for variant ${index}, inventory ${i}:`, idInv);
				formStore.setValue(`variants.${index}.inventories.${i}.id`, idInv);
			});
		}

		if (quantityData.length > 0) {
			quantityData.forEach((inventory, i) => {
				console.log(`Setting Quantity for variant ${index}, inventory ${i}:`, inventory?.quantity);
				formStore.setValue(`variants.${index}.inventories.${i}.quantity`, inventory?.quantity);
			});
		}
	}, [idInventory, quantityData, formStore, index]);

	//////////////////////////////////////////////////////////////////////////////
	useEffect(() => {
		if (!quantityData || quantityData.length === 0) return;

		const total = quantityData.reduce((acc, curr) => acc + (curr?.quantity || 0), 0);
		setTotalQuantity(total);
		formStore.setValue(`variants.${index}.quantity`, total);
	}, [quantityData, index, formStore]);

	useEffect(() => {
		const newSkuValue = `${idVar}_${skuValue}`;
		formStore.setValue(`variants.${index}.sku`, newSkuValue);
	}, [index, formStore]);

	useEffect(() => {
		formStore.setValue(`variants.${index}.color`, colorId);
		formStore.setValue(`variants.${index}.size`, sizeId);
	}, [colorId, sizeId, index, formStore]);

	useEffect(() => {
		dispatch(getInventoryTable());
	}, [dispatch]);

	useEffect(() => {
		formStore.setValue(
			`variants.${index}.status`,
			formStore.watch(`variants.${index}.status`) ? 1 : 0,
		);
	}, [formStore.watch(`variants.${index}.status`)]);

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
				height: { md: '600px', xs: '600px' },
			}}
		>
			<p>{skuValue}</p>
			{/* <p>{idVar}</p> */}
			{/* <p>{name}</p> */}
			<TabbedFormField
				formStore={formStore}
				label='Name'
				keys={[
					{ name: `variants.${index}.en.name`, label: 'En' },
					{ name: `variants.${index}.ar.name`, label: 'عربي' },
				]}
				renderer={(field) => <Input {...field} />}
			/>

			<FormField
				formStore={formStore}
				label='Price'
				name={`variants.${index}.price`}
				render={(field) => (
					// <Input {...field} value={updatePrice} type='number' />
					<Input {...field} value={field.value ?? 0} type='number' />
				)}
			/>

			<FormField
				formStore={formStore}
				label='Discount'
				name={`variants.${index}.discount`}
				render={(field) => (
					// <Input {...field} value={updateDiscount} type='number' />
					<Input {...field} value={field.value ?? 0} type='number' />
				)}
			/>

			<FormField
				formStore={formStore}
				label='SKU'
				name={`variants.${index}.sku`}
				render={(field) => <Input {...field} value={field.value || Sku} disabled />}
			/>

			<div className='hidden'>
				<FormField
					formStore={formStore}
					label='color'
					name={`variants.${index}.color`}
					render={(field) => (
						<Input
							{...field}
							// value={updateColor}
							value={field.value || colorId}
							disabled
						/>
					)}
				/>

				<FormField
					formStore={formStore}
					label='size'
					name={`variants.${index}.size`}
					render={(field) => (
						<Input
							{...field}
							// value={updateSize || sizeId}
							value={field.value || sizeId}
							disabled
						/>
					)}
				/>
			</div>

			<FormField
				formStore={formStore}
				label='Quantity'
				name={`variants.${index}.quantity`}
				render={(field) => (
					// <Input {...field} value={updateQuantity} disabled />
					<Input {...field} value={totalQuantity} disabled />
				)}
			/>

			<div>
				{inventory?.map((inventor, i) => {
					if (!inventor.id) return null;
					const idInv: number = inventor.id;
					const matchingQuantity = quantityData.find(
						(item) => item?.inventory_source_id === inventor.id,
					);

					return (
						<div className='flex items-center justify-between' key={i}>
							<p className='title'>{inventor.code}</p>
							<FormField
								formStore={formStore}
								name={`variants.${index}.inventories.${i}.quantity`}
								render={(field) => (
									<Input
										{...field}
										type='number'
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
										<Input {...field} value={field.value || idInventory} disabled />
									)}
								/>
							</div>
						</div>
					);
				})}
			</div>

			<div className='custom-grid-parent'>
				<div className='grid-right'>
					<div className='flex-row-global gap-4'>
						<FormSwitchField<AddProductSchemaSchemaValues>
							formStore={formStore}
							name={`variants.${index}.status`}
							enable
						/>
						<p>{t('status')}</p>
					</div>
				</div>
			</div>

			<div className='flex-btn-end'>
				<Button variant='primary' type='button' onClick={handleSave}>
					{t('Save')}
				</Button>
			</div>
		</GlobalDialog>
	);
};

export default AdvancedFields;

// useEffect(() => {
//     if (idUrl) {
//         dispatch(getProduct(idUrl)).then(() => {
//             if (product && Array.isArray(product.variants)) {
//                 console.log('Product:', product);
//                 console.log('Product ID URL:', idUrl);

//                 if (variantIdToDisplay) {
//                     const allInventorySources = product.variants.flatMap(variant => {
//                         if (variant.id === variantIdToDisplay) {
//                             console.log('Variant ID:', variant.id);
//                             console.log('Variant Inventory Sources:', variant.inventory_sources);

//                             return variant.inventory_sources.map(source => ({
//                                 product_id: source.product_id,
//                                 inventory_source_id: source.inventory_source_id,
//                                 id: source.id,
//                                 qty: source.qty || 0,
//                                 quantity: source.qty || 0
//                             }));
//                         }
//                         return [];
//                     });

//                     console.log('Filtered Inventory Sources for Variant ID:', variantIdToDisplay, allInventorySources);
//                     setQuantityData(allInventorySources);
//                 }
//             }
//         });
//     }
// }, [idUrl, variantIdToDisplay, dispatch]);

/////////////////////////////////////

//////////////////////////////////////////////

// useEffect(() => {
//     if (!quantityData || quantityData.length === 0) return;

//     const total = quantityData.reduce((acc, curr) => acc + (curr?.quantity || 0), 0);
//     console.log('Total Quantity:', total);
//     setTotalQuantity(total);
//     formStore.setValue(`variants.${index}.quantity`, total);
// }, [quantityData]);

// useEffect(() => {
//     const total = quantityData.reduce((acc, curr) => acc + (curr?.quantity || 0), 0);
//     setTotalQuantity(total);
//     formStore.setValue(`variants.${index}.quantity`, total);
// }, [quantityData, index, formStore]);

// const handleQuantityChange = (i: number, value: string | number, idInv: number) => {
//     const quantity = Number(value) || 0;

//     setQuantityData(prev => {
//         const updatedData = [...prev];

//         if (!updatedData[i]) {
//             updatedData[i] = { inventory_source_id: idInv.toString(), qty: quantity, quantity };
//         } else {
//             updatedData[i] = { ...updatedData[i], qty: quantity, quantity };
//         }

//         console.log("Updated quantity data:", updatedData);
//         return updatedData;
//     });
// };
