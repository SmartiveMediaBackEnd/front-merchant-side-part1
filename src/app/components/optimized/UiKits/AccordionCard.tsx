import { useTranslation } from 'react-i18next';
import { DownIcon, UpIcon } from 'src/app/utils/icons';

export default function AccordionCard({
	content,
	title,
	open,
	setOpen,
}: {
	content: React.ReactNode;
	title: string;
	open: boolean;
	setOpen: (e: boolean) => void;
}) {
	const { t } = useTranslation();

	return (
		<div className='transition delay-700 ease-in-out duration-500  global-cards gap-4'>
			{/*?? */}
			<div className='flex justify-between'>
				<h3 className='title'>{title}</h3>
				<button
					className='transition delay-700 ease-in-out duration-500'
					onClick={() => setOpen(!open)}
				>
					{open ? (
						<UpIcon className='fill-title' />
					) : (
						<div className='flex gap-2 items-center'>
							<DownIcon className='fill-title' />
							<span className='test-title text-sm font-semibold'>{t('Edit')}</span>
						</div>
					)}
				</button>
			</div>
			{/* card */}
			<div className='global-cards gap-0 shadow-md'>
				<p className='text-blue'>T-Shirt</p>
				<p className='text-xs text-green'>https://artisan.dookan.net/t-shirt</p>
				<p className='text-xs text-gray'>meta description tags</p>
			</div>
			{open ? content : ''}
		</div>
	);
}
