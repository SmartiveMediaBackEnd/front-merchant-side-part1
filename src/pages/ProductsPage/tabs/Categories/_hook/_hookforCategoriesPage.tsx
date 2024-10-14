import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

import { LiaTrashAlt } from 'react-icons/lia';

import { CategoryInterface } from 'src/app/interface/CategoriesInterface';
import { useAppSelector } from 'src/app/store';
import { UseCustomTableSorting } from 'src/app/utils/hooks/UseCustomTableSorting';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { AnalyticsIcon, CopyIcon, EditIcon, OrdersIcon } from 'src/app/utils/icons';

export const Use_Hook_ForCategoriesPage = (selectedOption: string, custom_Id: string) => {
	const { categoriesTable, isLoading } = useAppSelector((state) => state.categoriesTable);
	const { allProducts } = useAppSelector((state) => state.allProducts);

	const { language } = useLanguage();
	const { t } = useTranslation();
	// body
	const CategoryMenu = [
		{ id: nanoid(), text: t('edit category'), icon: <EditIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Copy category link'), icon: <CopyIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Category report'), icon: <AnalyticsIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Category products'), icon: <OrdersIcon className='iconClass' /> },
		{
			id: nanoid(),
			text: t('Delete category'),
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];

	// /////////////////

	const ActionsMenus = [
		{ id: nanoid(), text: t('Bulk edit'), icon: <EditIcon className='iconClass' /> },
		{
			id: nanoid(),
			text: 'Delete all categories',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];

	// //////////////////////
	// /////////////////////
	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
	];
	// ///////////////////////////
	// /////////////////////////

	//  handel Sorting Table
	const sortFunctions = {
		'Name A to Z': (a: CategoryInterface, b: CategoryInterface) =>
			language === 'ar' ? a.ar.name.localeCompare(b.ar.name) : a.en.name.localeCompare(b.en.name),
		'Name Z to A': (a: CategoryInterface, b: CategoryInterface) =>
			language === 'ar' ? b.ar.name.localeCompare(a.ar.name) : b.en.name.localeCompare(a.en.name),
	};
	/////////////////////////
	//////////////////////////
	const { arrangedData: CategoriesArrangedData } = UseCustomTableSorting<CategoryInterface>(
		sortFunctions,
		categoriesTable,
		sortMenus?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
	);
	let categoriesIds = categoriesTable?.map((e) => e?.id.toString()).join(',');
	let copyLink = categoriesTable?.filter((e) => e.id.toString() === custom_Id.toString())[0]?.slug
	return {
		sortMenus,
		allProducts,
		CategoriesArrangedData,
		categoriesIds,
		CategoryMenu,
		isLoading,
		language,
		ActionsMenus,
		copyLink
	};
};
