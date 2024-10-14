//  global componenet used in multi compoenents like AllCustomersComp

import ArrangeButton from './ArrangeButton';
import { Button } from '..';

import ActionsButton from './ActionsButton';
import { useTranslation } from 'react-i18next';
import { FilterIcon } from 'src/app/utils/icons';
export interface menuType {
	id: string;
	text: string;
	icon?: React.ReactNode;
}
export default function ActionsComp({
	selectedOption,
	handelSelect,
	sortMenus,
	ActionsMenus,
	StatusMenus,
	HandelOpenDrawer,
	filter,
}: {
	selectedOption: string;
	handelSelect: (e: string) => void;

	sortMenus?: menuType[];
	ActionsMenus?: menuType[];
	StatusMenus?: menuType[];
	HandelOpenDrawer?: () => void;
	filter?: boolean;
}) {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='flex-row-global sm:h-10    md:gap-4 gap-2  '>
			{StatusMenus && StatusMenus?.length > 0 && (
				<ActionsButton
					status
					sortMenus={StatusMenus}
					selectedOption={selectedOption}
					handelSelect={handelSelect}
				/>
			)}
			{/*   arrange button */}

			{/* {sortMenus && sortMenus?.length > 0 && (
				<ArrangeButton
					sortMenus={sortMenus}
					selectedOption={selectedOption}
					handelSelect={handelSelect}
				/>
			)} */}

			{/*  filter button */}

			{filter && (
				<Button onClick={HandelOpenDrawer} variant='secondary' LeftIcon={FilterIcon}>
					{t('filter')}
				</Button>
			)}

			{/*  actions button */}
			{ActionsMenus && ActionsMenus?.length > 0 && (
				<ActionsButton
					sortMenus={ActionsMenus}
					selectedOption={selectedOption}
					handelSelect={handelSelect}
				/>
			)}
		</div>
	);
}
