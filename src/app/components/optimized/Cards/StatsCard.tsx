import { BackAndroidIcon } from 'src/app/utils/icons';

export interface StatsCardInterface {
	percentage: string;
	label: string;
	value: string;
	positive: boolean;
	extensions?: string;
}
const StatsCard = ({ percentage, label, value, positive, extensions }: StatsCardInterface) => {
	return (
		<div className='rounded-lg bg-brand-gradient min-w-40 p-px '>
			<div className='rounded-[calc(0.5rem-1px)] p-2 bg-white flex flex-col'>
				<div className='flex items-center'>
					<BackAndroidIcon
						className={`${positive ? 'fill-success rotate-90' : 'fill-error -rotate-90'}`}
					/>
					<h2 className={`paragraph ${positive ? 'text-success' : 'text-error'}`}>
						{percentage} %
					</h2>
				</div>
				<p className='subheading text-title my-[3px]'>{label}</p>
				<div className='flex items-end gap-2'>
					<p className='text-3xl  text-title'>{value}</p>
					{<span className='paragraph text-subtitle'>{extensions}</span>}
				</div>
			</div>
		</div>
	);
};
// p-2 w-40

export default StatsCard;
// const ParentComponent = () => {
//   const statsData = [
//     {
//       percentage: "75%",
//       label: "Completion Rate",
//       value: "750",
//       positive: true,
//       extensions: "abc",
//     },
//   ];
//   return (
//     <div className="flex justify-center space-x-4">
//       {/* Mapping over statsData and rendering StatsCard for each item */}
//       {statsData.map((stat, index) => (
//         <StatsCard
//           key={index}
//           percentage={stat.percentage}
//           label={stat.label}
//           value={stat.value}
//           positive={stat.positive}
//           extensions={stat.extensions}
//         />
//       ))}
//     </div>
//   );
// };


