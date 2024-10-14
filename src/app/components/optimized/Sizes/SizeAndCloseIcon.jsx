import { DeleteExitIcon } from 'src/app/utils/icons';

/**
 * @param {{
 *  size?: string;
 *  bgColor?: string;
 * }} props
 */
export default function SizeAndCloseIcon({ size = 'xl', bgColor }) {
	return (
		<div className='flex items-center pl-1 rounded bg-constrained w-fit'>
			{bgColor ? (
				<>
					<span className={`bg-${bgColor} rounded-full w-4 h-4 mb-0.5 mr-1`}></span>
					<span className='text-sm uppercase text-title '>{size}</span>
					<DeleteExitIcon className='mt-1.5 fill-hint' />
				</>
			) : (
				<>
					<span className='pl-1 text-sm uppercase text-title'>{size}</span>
					<DeleteExitIcon className='mt-1.5 fill-hint' />
				</>
			)}
		</div>
	);
}
