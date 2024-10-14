import { type ReactNode } from 'react';
import { CheckIcon } from 'src/app/utils/icons';

// CheckBoxX component for customizable checkbox with optional label.

// HOW TO USE

// const ExampleComponent: React.FC = () => {
// const [isChecked, setIsChecked] = useState<boolean>(false);

// const handleCheckBoxChange = (isChecked: boolean) => {
// 	setIsChecked(isChecked);
// };

// 	return (
// 		<div>
// 			<CheckBox
// checked={isChecked}
// handleOnChange={handleCheckBoxChange}
// 				label='Example Label'
// 				classes='custom-checkbox'
// 			/>
// 			<CheckBox
// 				variant='minus' // Specify variant as "minus"
// 				initialChecked={false} // Initial state of the checkbox
// 				handleOnChange={handleChange} // Change event handler
// 				label='Minus Checkbox' // Optional label
// 			/>
// 		</div>
// 	);
// };
interface CheckBoxProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'> {
	variant?: 'minus';
	label?: ReactNode;
	handleOnChange: (isChecked: boolean) => void;
	checked: boolean;
	classes?: string;
}

export default function CheckBox({
	variant,
	label,
	handleOnChange,
	classes,
	checked,
	...props
}: CheckBoxProps) {
	function renderCheckboxIcon() {
		// console.log('checked', checked);
		if (variant === 'minus' && checked) {
			return <p className='flex items-center justify-center w-full h-full text-white'>-</p>;
		}
		return <CheckIcon className='w-full h-full fill-white' />;
	}

	return (
		<label className={`flex  gap-2 items-center cursor-pointer ${classes}`}>
			<input
				{...props}
				type='checkbox'
				checked={checked}
				onChange={(event) => handleOnChange(event.target.checked)}
				className='hidden'
			/>
			<div
				className={`hover:bg-sec-light w-5 h-5 border rounded ${
					checked ? 'bg-success hover:bg-sec-pressed' : ''
				}`}
			>
				{renderCheckboxIcon()}
			</div>
			{label && <span className=' text-sm text-title'>{label}</span>}
		</label>
	);
}
