import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

import { LiaTrashAlt } from 'react-icons/lia';


import { InventoryInterface } from 'src/app/interface/InventoryInterface';
import { useAppSelector } from 'src/app/store';
import { UseCustomTableSorting } from 'src/app/utils/hooks/UseCustomTableSorting';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { AnalyticsIcon, EditIcon, OrdersIcon } from 'src/app/utils/icons';

export const Use_Hook_ForInventoryPage = (selectedOption: string) => {
	//  selectors
	const { inventory, isLoading } = useAppSelector((state) => state.inventory);

	const { language } = useLanguage();
	const { t } = useTranslation();

	// /////////////////

	const sortFunctions = {
		'Name A to Z': (a: InventoryInterface, b: InventoryInterface) => a.name.localeCompare(b.name),
		'Name Z to A': (a: InventoryInterface, b: InventoryInterface) => b.name.localeCompare(a.name),
	};
	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
		// { id: nanoid(), text: 'SKU Ascending' },
		// { id: nanoid(), text: 'SKU Descending' },
		// { id: nanoid(), text: 'Price Low in first' },
		// { id: nanoid(), text: 'Price High in first' },
		// { id: nanoid(), text: 'Date Added' },
		// { id: nanoid(), text: 'Date modified' },
	];
	const { arrangedData: InventoriesArrangedData } = UseCustomTableSorting<InventoryInterface>(
		sortFunctions,
		inventory,
		sortMenus?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
	);
	// body
	const InventoryMenu = [
		{ id: nanoid(), text: t('Edit Inventory'), icon: <EditIcon className='iconClass' /> },

		// { id: nanoid(), text: t('Inventory report'), icon: <AnalyticsIcon className='iconClass' /> },
		// { id: nanoid(), text: t('Inventory products'), icon: <OrdersIcon className='iconClass' /> },
		{
			id: nanoid(),
			text: t('Delete Inventory'),
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];

	const ActionsMenus = [
		{ id: nanoid(), text: t('Bulk edit'), icon: <EditIcon className='iconClass' /> },
	];

	return {
		sortMenus,
		inventory,
		InventoriesArrangedData,
		ActionsMenus,
		isLoading,
		language,
		InventoryMenu
	};
};
