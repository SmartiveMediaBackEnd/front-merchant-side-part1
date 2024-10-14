/**
 * @param {{
 *  variant?: "countAvatar";
 *  src?: string;
 *  fName?: string;
 *  lName?: string;
 *  count?: number;
 *  small?: boolean;
 * }} props
 */
export default function Avatars(props) {
	const shortName = `${props.fName?.charAt(0) ?? ''}${props.lName?.charAt(0) ?? ''}`;

	return props.variant === 'countAvatar' ? (
		<div className='flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-light-2'>
			<span className='text-title text-[13px]'>
				{props.count && props.count > 50 ? '+' : ''}
				{props.count ?? ''}
			</span>
		</div>
	) : (
		<div
			className={`rounded-full bg-pri-light overflow-hidden flex justify-center items-center ${
				props.small ? 'w-8 h-8' : 'w-10 h-10'
			}`}
		>
			{props.src ? (
				<img src={props.src} alt='Avatar' className='w-full h-full' />
			) : (
				<span className='font-semibold uppercase text-sec-pressed'>{shortName}</span>
			)}
		</div>
	);
}
