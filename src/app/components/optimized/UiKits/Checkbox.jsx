import { CheckIcon } from 'src/app/utils/icons';

/**
 * CheckBoxX component for customizable checkbox with optional label.
 * @param {{
 *  variant?: "minus";
 *  label?: import("react").ReactNode;
 *  handleOnChange: (isChecked: boolean) => void;
 *  checked?: boolean;
 *  classes?: string;
 * } & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked">} props - Props for the CheckBoxX component.
 *
 * @example
 *
 * ```jsx
 * export default function ExampleComponent() {
 *   function handleChange(isChecked) {
 *     // Handle checkbox change event
 *     console.log("Checkbox checked:", isChecked);
 *   };
 *
 *   return (
 *     <div>
 *       <CheckBox
 *         initialChecked={true} // Initial state of the checkbox
 *         handleOnChange={handleChange} // Change event handler
 *         label="Example Checkbox" // Optional label
 *       />
 *
 *       <CheckBox
 *         variant="minus" // Specify variant as "minus"
 *         initialChecked={false} // Initial state of the checkbox
 *         handleOnChange={handleChange} // Change event handler
 *         label="Minus Checkbox" // Optional label
 *       />
 *     </div>
 *   );
 * };
 * ```
 */
export default function CheckBox({ variant, label, handleOnChange, classes, ...props }) {
	function renderCheckboxIcon() {
		if (variant === 'minus' && props.checked) {
			return <p className='flex items-center justify-center w-full h-full text-white'>-</p>;
		}
		return <CheckIcon className='w-full h-full fill-white' />;
	}

	return (
		<label className={`flex gap-2 items-center cursor-pointer ${classes}`}>
			<input
				{...props}
				type='checkbox'
				checked={props.checked}
				onChange={(event) => handleOnChange(event.target.checked)}
				className='hidden'
			/>
			<div
				className={`hover:bg-sec-light w-5 h-5 border rounded ${
					props.checked ? 'bg-success hover:bg-sec-pressed' : ''
				}`}
			>
				{renderCheckboxIcon()}
			</div>
			{label && <span className='text-sm text-title'>{label}</span>}
		</label>
	);
}

