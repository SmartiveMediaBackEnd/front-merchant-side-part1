import { useEffect, useMemo, useState } from 'react';
import CustomersComponent from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';
import BrandsTable from 'src/pages/ProductsPage/tabs/Brands/_comp/BrandsTable';
import TopSectionBrandsTable from 'src/pages/ProductsPage/tabs/Brands/_comp/TopSectionBrandsTable';
import {
	deleteAllBrandsAction,
	deleteBrandAction,
	getBrandsTable,
	getExportBrands,
	PostImportBrands,
} from 'src/app/store/slices/productsPage/brands/brandsAsyncThunks';

import { useAppDispatch } from 'src/app/store';

import { getAllProductsTable } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreeDotsButton';
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { useTranslation } from 'react-i18next';
import AddBrandForm from './_comp/AddBrandForm';

import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import toast from 'react-hot-toast';
import ActionHandler from 'src/app/utils/ActionMethods';
import PopupImportData, { FormSchema } from 'src/app/components/optimized/Popups/PopupImportData';
import { Use_Hook_ForBrandsPage } from './_hook/_hookForBrandsPage';

export default function Brands() {
	// hooks
	const [openAddOrUpdateDialog, setOpenAddOrUpdateDialog] = useState(false);
	const [openExportDialog, setOpenExportDialog] = useState<boolean>(false);
	const [isDeletingAllBrands, setIsDeletingAllBrands] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const [Edit_id, setEdit_id] = useState('');
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();

	//  handel delete Item
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
		brandsSettingMenus,
		allProducts,
		BrandsArrangedData,
		brandsIds,
		isLoading,
		language,
		ActionsMenus,
		copyLink
	} = Use_Hook_ForBrandsPage(selectedOption, custom_Id);

	// ///////////////
	///////////////
	useEffect(() => {
		dispatch(getBrandsTable());
		dispatch(getAllProductsTable());
	}, [dispatch]);
	// /////////////////////////////


	// filter data
	const filteredBrands = useMemo(() => {
		return BrandsArrangedData.filter(brand =>
			brand.name_en.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}, [searchQuery, BrandsArrangedData]);


	// Delete brand

	const handelDeleteBrand = () => {
		dispatch(deleteBrandAction(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getBrandsTable());
			}
		});
	};

	const handelDeleteAllBrands = () => {
		filteredBrands?.length > 0
			? dispatch(deleteAllBrandsAction({ indexes: brandsIds })).then((promiseResponse: any) => {
				if ((promiseResponse.payload.code = 200)) {
					handelCloseDeleteDialog();
					dispatch(getBrandsTable());
				}
			})
			: toast.error('There are no data to delete it');
	};
	// /////////////////////////////////
	// /////////////////////////////////

	useMemo(() => {
		switch (selectedOption) {
			case 'Delete brand':
				handelOpenDialog();
				setSelectedOption('');
				break;
			case 'Export brands':
				dispatch(getExportBrands()).then((response: any) => {
					ActionHandler.exportToExcelFromApi(response.payload, 'brands');
				});
				setSelectedOption('');
				break;

			case 'Delete all brands':
				handelOpenDialog();
				setIsDeletingAllBrands(true);
				setSelectedOption('');
				break;
			case 'Import brands':
				setOpenExportDialog(true);
				setSelectedOption('');
				break;
			case 'Copy brand link':
				navigator.clipboard.writeText(copyLink);
				setSelectedOption('');
				toast.success(`${copyLink}`)
				break;
		}
	}, [selectedOption]);
	// //////////////////////////////
	// /////////////////////////////

	//  close add dialog
	const handleCloseAddDialog = () => {
		setEdit_id('');
		setOpenAddOrUpdateDialog(false);
	};

	// ////////////////////////////////
	///////////////////////////////////

	/////////
	/////////////////////////////////
	const handelCloseExportDialog = () => {
		setOpenExportDialog(false);
	};
	// //////////////////
	// ///////////////
	const ImportData = (values: FormSchema) => {
		dispatch(PostImportBrands(values)).then((res) => {
			dispatch(getBrandsTable());
			handelCloseExportDialog();
		});
	};

	return (
		<div className='custom_container'>
			<div className='flex-col-global '>
				{/*  top section */}
				<TopSectionBrandsTable
					ActionsMenus={ActionsMenus}
					selectedOption={selectedOption}
					setSearchQuery={setSearchQuery}
					handleSelect={handleSelect}
					sortMenus={sortMenus}
					setOpenAddOrUpdateDialog={setOpenAddOrUpdateDialog}
				/>

				{/*  table  */}
				{!xs && (
					<BrandsTable
						Edit_id={Edit_id}
						setEdit_id={setEdit_id}
						setOpenAddOrUpdateDialog={setOpenAddOrUpdateDialog}
						handelId={handelId}
						brands={filteredBrands}
						isLoading={isLoading}
					>
						<ThreeDotsButton
							sortMenus={brandsSettingMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</BrandsTable>
				)}
				{/*  case of small media */}
				{xs && (
					<div className='responsive_pages'>
						{filteredBrands?.map((e, i) => (
							<CustomersComponent
								handelId={handelId}
								noAvatar
								id={e.id}
								key={i}
								firstName={language === 'ar' ? e.name_ar : e.name_en}
								email={language === 'ar' ? e.description_ar : e.description_en}
								imageUrl={e.image_url}
							>
								<ThreeDotsButton
									sortMenus={brandsSettingMenus}
									selectedOption={selectedOption}
									handelSelect={handleSelect}
								/>
							</CustomersComponent>
						))}
						<AddButtonMobile onClick={() => setOpenAddOrUpdateDialog(true)} />
					</div>
				)}
				{/* open delete dialog */}
				{openDeleteDialog && (
					<PopupDelete
						open={openDeleteDialog}
						onClose={handelCloseDeleteDialog}
						title={t('Delete Item')}
						subTitle={t('Do You Want To Delete This Item')}
						onDelete={isDeletingAllBrands ? handelDeleteAllBrands : handelDeleteBrand}
					/>
				)}


				{/* open add brand form */}
				{openAddOrUpdateDialog && (
					<AddBrandForm
						setEdit_id={setEdit_id}
						Edit_id={Edit_id}
						allProducts={allProducts}
						openDialog={openAddOrUpdateDialog}
						handleClose={handleCloseAddDialog}
					/>
				)}

				{/*  open export data dialog */}
				{openExportDialog && (
					<PopupImportData
						open={openExportDialog}
						onClose={handelCloseExportDialog}
						handelSubmit={(values) => ImportData(values)}
					/>
				)}
			</div>
		</div>
	);
}
