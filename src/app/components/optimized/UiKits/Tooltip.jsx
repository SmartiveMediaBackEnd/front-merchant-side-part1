import { TooltipIcon } from 'src/app/utils/icons';

/**
 * @param {{
 *  message: string;
 * }} props
 */
export default function Tooltip(props) {
	return (
		<div className='relative inline-block group'>
			<TooltipIcon className='cursor-pointer fill-secondary' />
			<div className='absolute  bg-title -left-[50%]  text-white text-sm py-1 px-1.5 rounded scale-0 group-hover:scale-100  transition-all duration-300'>
				{props.message}
				<svg className='absolute left-0 w-full h-2 text-title top-full' x='0px' y='0px' viewBox='0 0 255 255'>
					<polygon className='fill-current' points='0,0 127.5,127.5 255,0' />
				</svg>
			</div>
		</div>
	);
}
