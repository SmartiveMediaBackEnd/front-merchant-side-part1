import { useTranslation } from 'react-i18next';
import { BackAndroidIcon } from 'src/app/utils/icons';

interface ProgressCardProps {
	label: string;
	count: number;
	ratio: number;
	positive: boolean;
}

export default function ProgressCard({ label, count, ratio, positive }: ProgressCardProps) {
	const { t } = useTranslation();
	return (
		<div className='grid gap-2 p-1 h-fit'>
			<div className='flex items-center'>
				<BackAndroidIcon
					className={`-ms-1.5 ${positive ? 'fill-success rotate-90' : 'fill-error -rotate-90'}`}
				/>
				<h2 className={`paragraph ${positive ? 'text-success' : 'text-error'}`}>{ratio}%</h2>
			</div>
			<p className='paragraph text-subtitle'>{t(label as any)}</p>
			<p className='title text-2xl'>{count}</p>
		</div>
	);
}

// const progressData = [
// 	{ label: 'Visitors with product views', count: 2, ratio: 4.75, positive: false },
// 	{ label: 'Added to cart', count: 7, ratio: 3.25, positive: true },
// 	{ label: 'Started checkouts', count: 2, ratio: 3.7, positive: false },
// 	{ label: 'Placed orders', count: 2, ratio: 1.7, positive: true },
// 	{ label: 'Visitors', count: 2, ratio: 4.75, positive: false },
// 	{ label: 'Product views', count: 7, ratio: 3.25, positive: true },
// 	{ label: 'Orders received', count: 2, ratio: 3.7, positive: false },
// 	{ label: 'Revenue', count: 2, ratio: 1.7, positive: true },
// ];
