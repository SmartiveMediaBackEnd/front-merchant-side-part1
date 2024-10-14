import { useId } from 'react';
import { ClipLoader } from 'react-spinners';
import { cn } from 'src/app/utils';

/**
 * @param {{
 *  label?: import("react").ReactNode;
 *  leftIcon?: JSX.Element;
 *  rightIcon?: JSX.Element;
 *  loading?: boolean;
 *  error?: string;
 *  success?: boolean;
 *  value?: string;
 *  handleOnChange?: (value: string) => void;
 * _ref?: any;
 * } & Omit<import('react').TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange">} props - Props for the InputRow component
 *
 * How to Use:
 *
 * Example:
 *
 * ```jsx
 * import { FaUser, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
 *
 * const MyComponent = () => {
 *   const [value, setValue] = useState("");
 *   const [error, setError] = useState("");
 *   const [success, setSuccess] = useState("");
 *   const [loading, setLoading] = useState(false);
 *
 *   return (
 *     <div>
 *       <Textarea
 *         label="Username"
 *         leftIcon={<FaUser />}
 *         rightIcon={<FaCheckCircle />}
 *         loading={loading}
 *         error={error}
 *         success={success}
 *         value={value}
 *         onChange={value => setValue(value)}
 *       />
 *     </div>
 *   );
 * };
 * ```
 *
 * Explanation:
 * - label: The text label displayed above the input field.
 * - leftIcon: An optional icon to display on the left side of the input field.
 * - rightIcon: An optional icon to display on the right side of the input field.
 * - loading: A boolean flag indicating whether the input field is in a loading state.
 * - error: An optional error message to display below the input field when there is an error.
 * - success: An optional success message to display below the input field when the input is successful.
 * - value: The current value of the input field.
 * - handleSelectChange: A function to handle changes to the input field value.
 */

export default function Textarea({
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
					<label htmlFor={controlId} className='block text-sm'>
						{label}
					</label>
				)}
				<div className={`${classNames} overflow-hidden rounded-md w-full border`}>
					<div className='relative'>
						{leftIcon && (
							<div className='absolute inset-y-0 left-0 flex items-center p-4'>{leftIcon}</div>
						)}
						<textarea
							ref={_ref}
							className={`block w-full px-4 py-2 rounded focus:border-none focus:outline-none ${
								leftIcon ? 'pl-16' : ''
							} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
							disabled={loading}
							value={value}
							rows={5}
							style={{
								width: '100%',
								border: 'none',
								outline: 'none',
								resize: 'none',
								padding: '8px',
							}}
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
