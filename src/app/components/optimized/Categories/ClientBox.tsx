import { capitalize } from 'src/app/utils';

interface Props {
	avatar: React.ReactNode;
	title?: string;
	details?: string; // Making details optional
}

export default function ClientBox({ avatar, title, details }: Props) {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				{avatar}
				<div>
					{title && <h5 className='text-sm font-semibold text-title capitalize'>{capitalize(title)}</h5>}
					{details && <p className='text-sm text-subtitle'>{details}</p>}
				</div>
			</div>
		</div>
	);
}
