import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useEffect, useState } from 'react';
import AddCategoryForm from 'src/pages/ProductsPage/tabs/Categories/_comp/AddCategoryForm';
import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import { getBrandsTable } from 'src/app/store/slices/productsPage/brands/brandsAsyncThunks';
import { BrandsInterface } from 'src/app/interface/BrandInterface';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import AddBrandForm from 'src/pages/ProductsPage/tabs/Brands/_comp/AddBrandForm';
import { getCategoriesTable } from 'src/app/store/slices/productsPage/categories/categoriesTable/categoriesTableAsyncThunks';
import { CategoryInterface } from 'src/app/interface/CategoriesInterface';
import { UseFormReturn } from 'react-hook-form';
import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';



interface Props {
	formStore: UseFormReturn<AddProductSchemaSchemaValues>;
	keys?: { name: string; label: string }[];
	label?: string;
	renderer?: (field: any) => JSX.Element;
	id: string;
}
export default function ProductFormBasicInfoSection(props: Props) {
	//  hooks
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [openDialog, setOpenDialog] = useState(false);
	const [openBrandDialog, setOpenBrandDialog] = useState(false);
	//  custom hook
	const { language } = useLanguage();
	//  selectors
	const { categoriesTable } = useAppSelector((state) => state.categoriesTable);
	// const { allProducts } = useAppSelector((state) => state.allProducts);
	const { brands } = useAppSelector((state) => state.brands);
	useEffect(() => {
		dispatch(getCategoriesTable());
		// dispatch(getAllProductsTable());
		dispatch(getBrandsTable());
	}, [dispatch]);

	return (
		<section id={props.id} className='global-cards'>
			<h3 className='title'>{t('Basic info')}</h3>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>

				<TabbedFormField
					formStore={props.formStore}
					keys={[
						{ name: 'en.name', label: 'En' },
						{ name: 'ar.name', label: 'عربي' },
					]}
					label={t('Product Name')}
					renderer={(field) => <Input {...field} />}
				/>
				<FormField
					formStore={props.formStore}
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
					setOpenDialog={setOpenDialog}
					add_button
					formStore={props.formStore}
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
					formStore={props.formStore}
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
				openDialog && (
					<AddCategoryForm
						openDialog={openDialog}
						handleClose={() => setOpenDialog(false)}
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
	);
}
