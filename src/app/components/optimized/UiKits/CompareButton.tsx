import { CalenderIcon, DownIcon } from 'src/app/utils/icons';
import PopoverComponent from '../UiKits/Popover';
// import Button from "./Button";
import Menu from '../Menu/Menu';
import { Button } from '..';
import { useTranslation } from 'react-i18next';

interface Props {
	sortMenus: { id: string; text: string }[];
	selectedOption?: string;
	variant?: any;
	// handelSelect: () => void;
	handleSelect?: (option: string) => void;
}

export default function CompareButton({ sortMenus, selectedOption, variant, handleSelect }: Props) {
	const { t } = useTranslation();
	switch (variant) {
		case 'link':
			return (
				<PopoverComponent
					button={
						<Button variant={variant} RightIcon={DownIcon}>
							{selectedOption ? selectedOption : t('Today')}
						</Button>
					}
				>
					<Menu options={sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />
				</PopoverComponent>
			);

		default:
			return (
				<PopoverComponent
					button={
						<Button variant='secondary' LeftIcon={CalenderIcon} RightIcon={DownIcon}>
							{selectedOption ? selectedOption : t('Today')}
						</Button>
					}
				>
					<Menu options={sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />
				</PopoverComponent>
			);
	}
}
