import { useTranslation } from 'react-i18next';
// import CustomersComponent from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';
import { CategoryTable } from './_comp/CategoryTable';
import TopSectionCategoriesTable from './_comp/TopSectionCategoriesTable';
import { useEffect, useState, useMemo } from 'react';
import { useAppDispatch } from 'src/app/store';
import {
	deleteAllCategoriesAction,
	deleteCategoryAction,
	getCategoriesTable,
	getCategoryInfo,
} from 'src/app/store/slices/productsPage/categories/categoriesTable/categoriesTableAsyncThunks';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import AddCategoryForm from './_comp/AddCategoryForm';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreeDotsButton';
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import toast from 'react-hot-toast';
import { Use_Hook_ForCategoriesPage } from './_hook/_hookforCategoriesPage';
import { CategoryInterface } from 'src/app/interface/CategoriesInterface';
export default function Categories() {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const [openDialog, setOpenDialog] = useState(false);
	const [Edit_id, setEdit_id] = useState('');
	const [category, setCategory] = useState<CategoryInterface[]>([]);

	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();
	// /  handel delete Item
	const {
		openDeleteDialog,
		custom_Id,
		handelDeleteItem,
		handelCloseDeleteDialog,
		handelId,
		handelOpenDialog,
	} = UseDeleteItem();
	const {
		sortMenus,
		allProducts,
		CategoriesArrangedData,
		categoriesIds,
		CategoryMenu,
		isLoading,
		language,
		ActionsMenus,
		copyLink
	} = Use_Hook_ForCategoriesPage(selectedOption, custom_Id);

	// redux
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCategoriesTable());
		dispatch(getAllProductsTable());
	}, [dispatch]);

	//  close add brand dialog
	const handleClose = () => {
		setOpenDialog(false);
		setEdit_id('');
	};


	const handelDeleteCategory = () => {
		dispatch(deleteCategoryAction(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getCategoriesTable());
			}
		});
	};

	useMemo(() => {
		switch (selectedOption) {
			case t('Delete category'):
				handelOpenDialog();
				setSelectedOption('');
				break;
			case t('edit category'):
				setOpenDialog(true);
				setEdit_id(custom_Id);
				setCategory(
					CategoriesArrangedData?.filter((e) => e.id.toString() === custom_Id.toString()),
				);
				// dispatch(getCategoryInfo(custom_Id));
				setSelectedOption('');
				break;
			case 'Delete all categories':
				CategoriesArrangedData?.length > 0
					? dispatch(deleteAllCategoriesAction({ indexes: categoriesIds })).then(
						(promiseResponse: any) => {
							if ((promiseResponse.payload.code = 200)) {
								dispatch(getCategoriesTable());
							}
						},
					)
					: toast.error('There are no data to delete it');
				setSelectedOption('');
				break;
			case 'Copy category link':
				navigator.clipboard.writeText(copyLink);
				setSelectedOption('');
				toast.success(`${copyLink}`)
				break;
		}
	}, [selectedOption, custom_Id]);

	return (
		<div className='custom_container'>
			<div className='flex-col-global'>
				{/*  top section */}
				<TopSectionCategoriesTable
					ActionsMenus={ActionsMenus}
					selectedOption={selectedOption}
					handleSelect={handleSelect}
					sortMenus={sortMenus}
					setOpenDialog={setOpenDialog}
					title={t('Add Category')}
				/>

				{/* table */}

				{!xs && (
					<CategoryTable
						handelId={handelId}
						categoryData={CategoriesArrangedData}
						isLoading={isLoading}
					>
						<ThreeDotsButton
							sortMenus={CategoryMenu}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</CategoryTable>
				)}

				{/*  case of small media */}
				{xs && (
					// <div className='responsive_pages'>
					// 	{CategoriesArrangedData?.map((e: CategoryInterface, i) => (
					// 		<CustomersComponent
					// 			handelId={handelId}
					// 			noAvatar
					// 			id={e.id}
					// 			key={i}
					// 			firstName={language === 'ar' ? e.ar.name : e.en.name}
					// 			email={language === 'ar' ? e.ar.description : e.en.description}
					// 			imageUrl={e.image_url}
					// 			path='/products/categories/SubCategories'
					// 		>
					// 			<ThreeDotsButton
					// 				sortMenus={CategoryMenu}
					// 				selectedOption={selectedOption}
					// 				handelSelect={handleSelect}
					// 			/>
					// 		</CustomersComponent>
					// 	))}
					// 	<AddButtonMobile onClick={() => setOpenDialog(true)} />
					// </div>
				)}
			</div>
			{openDialog && (
				<AddCategoryForm
					category={category}
					Edit_id={Edit_id}
					setEdit_id={setEdit_id}
					allProducts={allProducts}
					openDialog={openDialog}
					handleClose={handleClose}
				/>
			)}
			{openDeleteDialog && (
				<PopupDelete
					open={openDeleteDialog}
					onClose={handelCloseDeleteDialog}
					title={t('Delete Item')}
					subTitle={t('Do You Want To Delete This Item')}
					onDelete={handelDeleteCategory}
				/>
			)}
		</div>
	);
}
