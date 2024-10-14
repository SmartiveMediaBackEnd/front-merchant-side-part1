import { useId, useState } from 'react';
import { ClipLoader } from 'react-spinners';
/**
 * SelectBoxRow component for rendering a select box with various features.
 * @param {Object} props - The props object.
 * @param {string} [props.label] - The label for the select box.
 * @param {Array<Object>} props.options - The options for the select box.
 * @param {boolean} [props.loading] - Indicates if the select box is in a loading state.
 * @param {boolean} [props.error] - Indicates if the select box has encountered an error.
 * @param {boolean} [props.success] - Indicates if the select box has succeeded.
 * @param {import('react').ReactNode} [props.leftIcon] - The icon to display on the left side of the select box.
 * @param {import('react').ReactNode} [props.rightIcon] - The icon to display on the right side of the select box.
 * @param {string} props.selectedValue - The currently selected value of the select box.
 * @param {string} props.defaultValue - The default value for the select box.
 * @param {Function} props.handleOnChange - The function to handle onChange events for the select box.
 * @param {import('react').RefObject<HTMLSelectElement>} [props._ref] - The ref object for the select box.
 * @returns {JSX.Element} The SelectBoxRow component.
 */

export default function SelectBoxRow({
	label,
	options,
	loading,
	error,
	success,
	leftIcon,
	rightIcon,
	selectedValue,
	defaultValue,
	handleOnChange,
	_ref,
	...rest
}) {
	const reactId = useId();
	const controlId = rest.id ?? reactId;
	const [focused, setFocused] = useState(false);

	function getInputClassNames() {
		if (focused && !success) {
			return 'border-blue-500';
		} else if (success) {
			return 'border-green-500 bg-gray-50';
		} else if (error) {
			return 'border-red-500 bg-gray-50';
		}
		return 'bg-gray-50 ';
	}

	const classNames = getInputClassNames();

	return (
		<>
			<div className='flex flex-col w-full'>
				<label htmlFor={controlId} className='block text-sm mb-1 font-medium'>
					{label}
				</label>
				<div className={`${classNames} overflow-hidden rounded-md w-full border`}>
					<div className='relative'>
						{leftIcon && (
							<div className='absolute inset-y-0 left-0 flex items-center p-5 bg-gray-200 '>
								{leftIcon}
							</div>
						)}
						<select
							ref={_ref}
							className={`block w-full px-3 py-2 border rounded focus:outline-none border-none outline-none ${
								leftIcon && 'px-16'
							} ${loading && 'appearance-none'}`}
							id={controlId}
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							disabled={loading}
							value={selectedValue}
							onChange={handleOnChange && ((event) => handleOnChange(event.target.value))}
							{...rest}
						>
							<option className='p-3 bg-white' disabled value={defaultValue}>
								{defaultValue}
							</option>
							{options?.map((option) => (
								<option className='p-3 bg-white' key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						{rightIcon && !loading && (
							<div className='absolute inset-y-0 right-0 flex items-center p-5 bg-gray-200'>
								{rightIcon}
							</div>
						)}
						{loading && (
							<div className='absolute inset-y-0 right-0 flex items-center pr-2'>
								<ClipLoader size={16} />
							</div>
						)}
					</div>
				</div>

				{error && !focused && <small className='text-xs text-red-500'>Error</small>}
				{success && !focused && <small className='text-xs text-green-500'>Success</small>}
			</div>
		</>
	);
}

/*
Usage Example:

const [selectedOption, setSelectedOption] = useState("select an option");
const handleOnChange = (value) => {
	setSelectedOption(value);
};

<SelectBoxRow
	label="Select an option"
	options={[
	{ value: "option1", label: "Option 1" },
	{ value: "option2", label: "Option 2" },
	{ value: "option3", label: "Option 3" },
	]}
	loading={false}
	error={false}
	success={false}
	selectedValue={selectedOption}
	defaultValue={'select an option'}
	handleSelectChange={handleOnChange}
/>
*/
