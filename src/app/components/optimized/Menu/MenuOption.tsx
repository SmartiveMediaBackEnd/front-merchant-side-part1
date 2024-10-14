import React from 'react';
import useLanguage from '../../../utils/hooks/useLanguage';

/**
 * Component representing a menu option list.
 * @param {MenuOptionProps} props - Props for the MenuOption component.
 * @returns {JSX.Element} - Rendered component.
 */
const MenuOption = ({
	options,
	onSelect,
	selectedOption,
}: {
	options: any;
	onSelect: any;
	selectedOption: any;
}) => {
	const { language } = useLanguage();

	return (
		<ul
			className={`rounded shadow-md py-2 flex flex-col absolute z-30 bg-white min-w-40 top-10 ${
				language === 'ar' ? 'left-0' : 'right-0'
			} `}
		>
			{options.map((option: any) => (
				<MenuItem
					key={option.id}
					text={option.text}
					icon={option.icon}
					onClick={() => onSelect(option.text)}
					selected={selectedOption === option.text}
				/>
			))}
		</ul>
	);
};

export default MenuOption;

/**
 * Props for the MenuItem component.
 */
interface MenuItemProps {
	text: string;
	onClick: () => void;
	selected: boolean;
	icon?: React.ReactNode;
}

/**
 * Component representing a menu item.
 * @param {MenuItemProps} props - Props for the MenuItem component.
 * @returns {JSX.Element} - Rendered component.
 */
function MenuItem(props: MenuItemProps) {
	return (
		<li
			onClick={props.onClick}
			className={`flex text-title cursor-pointer justify-between items-center hover:bg-sec-light px-4 py-3 transition-all ${
				props.selected ? 'bg-sec-light' : ''
			}`}
		>
			<span
				className={`text-sm ${
					props.selected
						? 'text-sec-pressed flex gap-[.5rem] items-center'
						: 'flex gap-[.5rem] items-center'
				}`}
			>
				{props.icon}
				{props.text}
			</span>
		</li>
	);
}
