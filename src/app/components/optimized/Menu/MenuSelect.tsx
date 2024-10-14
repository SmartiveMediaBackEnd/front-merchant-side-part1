import React from 'react';
import useLanguage from '../../../utils/hooks/useLanguage';

/**
 * Props for the MenuSelect component.
 */
interface MenuSelectProps {
	options: { id: string; text: string; icon: React.ReactNode; onClick: () => void }[];
}

/**
 * Component representing a select menu.
 * @param {MenuSelectProps} props - Props for the MenuSelect component.
 * @returns {JSX.Element} - Rendered component.
 */
const MenuSelect: React.FC<MenuSelectProps> = ({ options }) => {
	// console.log('options', options);
	const { language } = useLanguage();

	return (
		<ul
			className={`rounded shadow-md p-2 flex flex-col min-w-48 bg-white w-fit absolute top-16 ${
				language === 'ar' ? 'left-0' : 'right-0'
			}  z-30`}
		>
			{options.map((option) => (
				<MenuItem
					key={option.id}
					text={option.text}
					icon={option.icon}
					onClick={option.onClick}
					id={option.id}
				/>
			))}
		</ul>
	);
};

export default MenuSelect;

/**
 * Props for the MenuItem component.
 */
interface MenuItemProps {
	text: string;
	icon: React.ReactNode;
	onClick: () => void;
	id: string;
}

/**
 * Component representing a menu item in the select menu.
 * @param {MenuItemProps} props - Props for the MenuItem component.
 * @returns {JSX.Element} - Rendered component.
 */
function MenuItem({ text, icon, onClick, id }: MenuItemProps) {
	return (
		<li
			onClick={onClick}
			className='flex text-title cursor-pointer gap-3 
            items-center px-4 py-3 hover:bg-light-3 transition-all'
			id={id}
		>
			{icon}
			{text}
		</li>
	);
}
