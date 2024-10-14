import { useTranslation } from 'react-i18next';

import { Button, Menu } from '../../optimized';
import { FaAngleDown } from 'react-icons/fa6';
import { ArrangeIcon } from 'src/app/utils/icons';
import PopoverComponent from '../../optimized/UiKits/Popover';
//  global componenet used in multi components like ActionsComp
export default function ArrangeButton({
	sortMenus,
	selectedOption,
	handelSelect,
}: {
	sortMenus: { id?: string; text: string }[];
	selectedOption: string;
	handelSelect: (e: string) => void;
}) {
	//  hooks
	const { t } = useTranslation();

	return (
		<PopoverComponent
			button={
				<>
					<Button variant='secondary' LeftIcon={ArrangeIcon} RightIcon={FaAngleDown}>
						{t('arrange')}
					</Button>
				</>
			}
		>
			<Menu options={sortMenus} selectedOption={selectedOption} onSelect={handelSelect} />
		</PopoverComponent>
	);
}

// function App() {
// 	// Sample data for sort menus
// const sortMenus = [
// 	{ id: '1', text: 'Sort by Name' },
// 	{ id: '2', text: 'Sort by Date' },
// 	{ id: '3', text: 'Sort by Size' },
// ];

// // State for selected option
// const [selectedOption, setSelectedOption] = React.useState('name');

// // Handler for selecting option
// const handleSelect = (optionId: string) => {
// 	setSelectedOption(optionId);
// 	// Implement further logic here if needed
// };

// 	// Render JSX
// 	return (
// 		<div>
// 			<h1>Example App</h1>
// 			{/* Render ArrangeButton component */}
// 			<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handleSelect={handleSelect} />
// 			{/* Display selected option */}
// 			<p>Selected Option: {selectedOption}</p>
// 		</div>
// 	);
// }
