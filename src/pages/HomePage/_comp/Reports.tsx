import { BackAndroidIcon } from 'src/app/utils/icons';

const Reports = ({
	label,
	count,
	ratio,
	positive,
}: {
	label: string;
	count: number;
	ratio?: number;
	positive?: boolean;
}) => {
	return (
		<div className='grid gap-2 p-1 h-fit'>
			<div className='flex items-center'>
				<BackAndroidIcon
					className={`-ms-1.5 ${positive ? 'fill-success rotate-90' : 'fill-error -rotate-90'}`}
				/>
				<h2 className={`paragraph ${positive ? 'text-success' : 'text-error'}`}>{ratio}%</h2>
			</div>
			<p className='paragraph text-subtitle'>{label}</p>
			<p className='title text-2xl'>{count}</p>
		</div>
	);
};

export default Reports;
