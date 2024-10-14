import { CheckBox } from '..';

interface CheckMenuProps {
	options: string[];
	selected: string[];
	setSelected: (options: string[]) => void;
}
export default function CheckMenu({ options, selected = [], setSelected }: CheckMenuProps) {
	const handleOptionToggle = (option: string) => {
		if (selected.includes(option)) {
			setSelected(selected.filter((item) => item !== option));
		} else {
			setSelected([...selected, option]);
		}
	};

	return (
		<div className='grid gap-0.5 rounded py-2 bg-white w-52' >
			{options.map((option, index) => (
				<MenuItem
					key={index}
					label={option}
					isSelected={selected.includes(option)}
					handleToggle={() => handleOptionToggle(option)}
				/>
			))}
		</div>
	);
}

interface MenuItemProps {
	label: string;
	isSelected: boolean;
	handleToggle: () => void;
}
function MenuItem({ label, isSelected, handleToggle }: MenuItemProps) {
	return (
		<CheckBox
			label={label}
			checked={isSelected}
			handleOnChange={handleToggle}
			classes={`duration-300 transition-all px-4 py-3 ${
				isSelected ? 'bg-sec-light' : 'hover:bg-sec-light'
			}`}
		/>
	);
}
