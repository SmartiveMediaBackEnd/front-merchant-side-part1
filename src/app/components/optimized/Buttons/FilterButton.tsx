import { useTranslation } from 'react-i18next';

import PopoverComponent from '../UiKits/Popover';

import { Button, Menu } from '..';
import { FilterIcon } from 'src/app/utils/icons';
//  global componenet used in multi components like ActionsComp
export default function FilterButton({
	sortMenus,
	selectedOption,
	handelSelect,
}: {
	sortMenus: { id: string; text: string }[];
	selectedOption: string;
	handelSelect: (e: string) => void;
}) {
	//  hooks
	const { t } = useTranslation();

	return (
		<PopoverComponent
			button={
				<>
					<Button variant='secondary' LeftIcon={FilterIcon}>
						{t('filter')}
					</Button>
				</>
			}
		>
			<Menu options={sortMenus} selectedOption={selectedOption} onSelect={handelSelect} />
		</PopoverComponent>
	);
}
