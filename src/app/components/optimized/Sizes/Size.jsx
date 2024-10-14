/**
 * @param {{
 *  size?: string;
 *  bgColor?: string;
 * }} props
 */
export default function Size({ size = 'xl', bgColor = 'red-500' }) {
	return (
		<div className={`rounded bg-${bgColor} flex items-center w-fit py-[3px] px-4`}>
			<span className='text-sm text-white uppercase'>{size}</span>
		</div>
	);
}
