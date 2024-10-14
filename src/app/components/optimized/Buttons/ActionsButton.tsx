import { useTranslation } from 'react-i18next';

import PopoverComponent from '../UiKits/Popover';

import { Button, Menu } from '..';
import { FaAngleDown } from 'react-icons/fa6';
//  global componenet used in multi components like ActionsComp
export default function ActionsButton({
	sortMenus,
	selectedOption,
	handelSelect,
	status,
}: {
	sortMenus: { id: string; text: string }[];
	selectedOption: string;
	handelSelect: (e: string) => void;
	status?: boolean;
}) {
	//  hooks
	const { t } = useTranslation();

	return (
		<PopoverComponent
			button={
				<>
					<Button variant='secondary' RightIcon={FaAngleDown}>
						{status ? t('Status') : t('Actions')}
					</Button>
				</>
			}
		>
			<Menu options={sortMenus} selectedOption={selectedOption} onSelect={handelSelect} />
		</PopoverComponent>
	);
}
