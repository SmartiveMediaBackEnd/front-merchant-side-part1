/**
 * @param {{
 *  size: string;
 *  Icon: import("react").ComponentType<{ className?: string; }>;
 * }} props
 */
export default function SizeIcon({ size = 'xl', Icon }) {
	return (
		<div className='rounded py-[3px] pl-1 pr-3 flex gap-1 items-center border border-constrained w-fit'>
			{Icon ? (
				<Icon className='w-[18px] h-[18px] mb-0.5' />
			) : (
				<span className='bg-secondary rounded-full w-4 h-4 mb-0.5'></span>
			)}

			<span className='text-sm uppercase text-title'>{size}</span>
		</div>
	);
}
