import { useEffect, useMemo, useRef, useState } from 'react';
import InventoryTable from 'src/pages/ProductsPage/tabs/Inventory/_comp/InventoryTable';
import TopSectionInventoryTable from 'src/pages/ProductsPage/tabs/Inventory/_comp/TopSectionInventoryTable';
import {
	deleteInventoryAction,
	getInventoryTable,
	PostImportInventoryRequest,
} from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreeDotsButton';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { useNavigate } from 'react-router-dom';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { Use_Hook_ForInventoryPage } from './_hook/_hookforInventoryPage';
import { useOpenFilterDrawer } from 'src/app/utils/hooks/CustomHookOpenDrawer';
import CustomersFilters from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/_customerFilter/CustomersFilters';

export default function Inventory() {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [searchQuery, setSearchQuery] = useState('');
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();



	// filter
	const { HandelOpenDrawer, openDrawer, HandelCloseDrawer } = useOpenFilterDrawer();
	const {
		InventoriesArrangedData,
		isLoading,
		InventoryMenu,
	} = Use_Hook_ForInventoryPage(selectedOption);

	console.log('InventoriesArrangedData:', InventoriesArrangedData);


	// filter data
	const filteredInventories = useMemo(() => {
		return InventoriesArrangedData.filter(user =>
			user.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}, [searchQuery, InventoriesArrangedData]);
	console.log('Filtered Inventories:', filteredInventories);


	//  handel delete Item
	const { openDeleteDialog, custom_Id, handelCloseDeleteDialog, handelId, handelOpenDialog } =
		UseDeleteItem();

	const handelDeleteInventory = () => {
		dispatch(deleteInventoryAction(custom_Id)).then((promiseResponse: any) => {
			const payload = promiseResponse?.payload;
			if (payload && payload.code === 200) {
				console.log('code')//??
				handelCloseDeleteDialog();
				dispatch(getInventoryTable());
			} else {
				console.error('Error deleting item:', promiseResponse.payload);
			}
		});
	};

	useEffect(() => {
		switch (selectedOption) {
			case t('Delete Inventory'):
				handelOpenDialog();
				setSelectedOption('');
				break;
			case t('Edit Inventory'):
				setSelectedOption('');
				custom_Id && navigate(`addInventory?id=${custom_Id}`);
				console.log('id', custom_Id)
				break;
		}
	}, [selectedOption, custom_Id]);

	return (
		<div className='custom_container'>
			<div className='flex-col-global '>
				{/*  top section */}
				<TopSectionInventoryTable
					data={filteredInventories}
					setSearchQuery={setSearchQuery}
					HandelOpenDrawer={HandelOpenDrawer}
				/>


				{/*  table */}
				<InventoryTable
					handelId={handelId}
					inventory={filteredInventories}
					isLoading={isLoading}
				>
					<ThreeDotsButton
						sortMenus={InventoryMenu}
						selectedOption={selectedOption}
						handelSelect={handleSelect}
					/>
				</InventoryTable>

				{xs && <AddButtonMobile onClick={() => navigate('addInventory')} />}
			</div>
			{openDeleteDialog && (
				<PopupDelete
					open={openDeleteDialog}
					onClose={handelCloseDeleteDialog}
					title={t('Delete Item')}
					subTitle={t('Do You Want To Delete This Item')}
					onDelete={handelDeleteInventory}
				/>
			)}

			{openDrawer && (
				<CustomersFilters openDrawer={openDrawer} HandelCloseDrawer={HandelCloseDrawer} />
			)}
		</div>
	);
}
