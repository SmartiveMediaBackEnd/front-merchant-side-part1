import { ClipLoader } from 'react-spinners';
import { cn } from 'src/app/utils';

/**
 * @param {Object} props - The props object.
 * @param {import('react').ReactNode} [props.leftIcon] - The icon to display on the left side of the input field.
 * @param {import('react').ReactNode}  [props.rightIcon] - The icon to display on the right side of the input field.
 * @param {boolean} [props.loading] - Indicates if the input field is in a loading state.
 */

export default function FieldContainer({ leftIcon, rightIcon, loading, children }) {
	const classNames = cn('bg-gray-50 focus-within:border-blue-500 focus-within:bg-auto');

	return (
		<div className={`${classNames} overflow-hidden rounded-md border w-full relative flex`}>
			{leftIcon && (
				<div className='absolute inset-y-0 left-0 flex items-center p-2'>{leftIcon}</div>
			)}

			{children}
			{rightIcon && !loading && (
				<div className='absolute inset-y-0 right-0 flex items-center p-4'>{rightIcon}</div>
			)}
			{loading && (
				<div className='absolute inset-y-0 right-0 flex items-center pr-2'>
					<ClipLoader size={16} />
				</div>
			)}
		</div>
	);
}

{
/* <FieldContainer>
<Input className='flex-grow border-0 bg-transparent' />
</FieldContainer> */
}
