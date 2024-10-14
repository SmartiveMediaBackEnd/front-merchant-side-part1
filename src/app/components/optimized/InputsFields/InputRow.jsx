import { useId } from 'react';
import { ClipLoader } from 'react-spinners';
import { cn } from 'src/app/utils';

/**
 * @param {Object} props - The props object.
 * @param {string} [props.label] - The label for the input field.
 * @param {import('react').ReactNode} [props.leftIcon] - The icon to display on the left side of the input field.
 * @param {import('react').ReactNode}  [props.rightIcon] - The icon to display on the right side of the input field.
 * @param {boolean} [props.loading] - Indicates if the input field is in a loading state.
 * @param {string} [props.error] - The error message to display.
 * @param {boolean} [props.success] - Indicates if the input field has succeeded.
 * @param {string} props.value - The value of the input field.
 * @param {(value: string) => void} props.handleOnChange - The function to handle onChange events for the input field.
 * @param {string} props.placeholder - The value of the input field.
 * @param {import('react').RefObject<HTMLInputElement>} [props._ref] - The ref object for the input field.
 * @param {(value: boolean) => void} [props.onFocus] - The function to handle onFocus events for the input field.
 * @returns {JSX.Element} The InputRow component.
 */

export default function InputRow({
	label,
	leftIcon,
	rightIcon,
	loading,
	error,
	success,
	value,
	handleOnChange,
	_ref,
	...rest
}) {
	const reactId = useId();
	const controlId = rest.id ?? reactId;

	const classNames = cn('bg-gray-50 focus-within:border-blue-500 focus-within:bg-auto', {
		'[&:not(:focus-within)]:border-red-500 [&:not(:focus-within)]:bg-auto': error,
		'[&:not(:focus-within)]:border-green-500 [&:not(:focus-within)]:bg-auto': success,
	});

	const containerClassName = cn('flex flex-col', {
		'group error': error,
		'group success': success,
	});

	return (
		<>
			<div className={containerClassName}>
				{label && (
					<label htmlFor={controlId} className='block text-sm mb-1.5 font-medium'>
						{label}
					</label>
				)}
				<div className={`${classNames} overflow-hidden rounded-md border w-full`}>
					<div className='relative'>
						{leftIcon && (
							<div className='absolute inset-y-0 left-0 flex items-center p-2'>{leftIcon}</div>
						)}
						<input
							ref={_ref}
							className={`${
								leftIcon && 'pl-12'
							} block w-full px-4 py-2 border rounded focus:outline-none  border-none outline-none `}
							disabled={loading}
							value={value}
							onChange={handleOnChange && ((event) => handleOnChange(event.target.value))}
							{...rest}
							id={controlId}
						/>
						{rightIcon && !loading && (
							<div className='absolute inset-y-0 right-0 flex items-center p-4'>{rightIcon}</div>
						)}
						{loading && (
							<div className='absolute inset-y-0 right-0 flex items-center pr-2'>
								<ClipLoader size={16} />
							</div>
						)}
					</div>
				</div>
				{error && (
					<small className='group-[.error:focus-within]:hidden text-xs text-red-500 '>
						{error}
					</small>
				)}
				{success && (
					<small className='group-[.success:focus-within]:hidden text-xs text-green-500 '>
						Success
					</small>
				)}
			</div>
		</>
	);
}

/*
import { FaUser, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

How to Use:

const [value, setValue] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const [loading, setLoading] = useState(false);
<InputRow
	label='Username'
	leftIcon={<FaUser />}
	rightIcon={<FaCheckCircle />}
	loading={loading}
	error={error}
	success={success}
	value={value}
	handleOnChange={(value) => setValue(value)}
/>;

*/
