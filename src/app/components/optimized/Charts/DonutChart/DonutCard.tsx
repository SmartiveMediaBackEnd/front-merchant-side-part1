import React from 'react';
import { ChartData } from './DonutGraph';

// import RateValue from 'src/pages/ReviewsPage/_comp/RateValue';

interface ChartLegend {
	label: string;
	value: number;
	color: string;
}
interface DonutCardProps {
	title: string;
	score: number;
	graph: React.ReactNode;
	legends: ChartLegend[];
}

const DonutCard: React.FC<DonutCardProps> = ({ title, score, graph, legends }) => {
	return (
		<div className='flex flex-col bg-white rounded-lg shadow-sm border p-4 gap-4'>
			<div className='flex justify-between items-center '>
				<h2 className='title'>{title}</h2>

				{/* <RateValue rating={score} /> */}
			</div>
			<div className='flex flex-col  space-x-2'>
				<ChartLegend legends={legends} />
				<div className='flex items-center justify-center '>
					<div>{graph}</div>
				</div>
			</div>
		</div>
	);
};

interface ChartLegendProps {
	legends: ChartData[];
}

const ChartLegend: React.FC<ChartLegendProps> = ({ legends }) => {
	return (
		<div className='flex space-x-1 justify-start flex-wrap'>
			{legends.map((legend, index) => (
				<div key={index} className='flex items-center space-x-2 border p-1 rounded-md mt-1'>
					<div className={`size-4 rounded-full`} style={{ backgroundColor: legend.color }}></div>
					<p className='text-sm text-gray-500'>{legend.label}</p>
				</div>
			))}
		</div>
	);
};

export default DonutCard;
/*
const chartData: ChartData[] = [
	{
		label: 'Detractors',
		value: 31,
		color: '#e74c3c',
	},
	{
		label: 'Passives',
		value: 31,
		color: '#F97316',
	},
	{
		label: 'Promoters',
		value: 41,
		color: '#2ecc71',
	},
];
<DonutCard
	title='Net Promoter Score'
	score={4.75}
	graph={<DonutGraph chartData={chartData} />}
	legends={chartData}
/>;
*/
