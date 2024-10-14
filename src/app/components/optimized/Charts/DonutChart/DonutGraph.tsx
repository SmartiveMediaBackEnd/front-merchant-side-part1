import React from 'react';
import ApexCharts from 'react-apexcharts';

export interface ChartData {
	label: string;
	value: number;
	color: string;
}

interface DonutGraphProps {
	chartData: ChartData[];
}

const DonutGraph: React.FC<DonutGraphProps> = ({ chartData }) => {
	const options: ApexCharts.ApexOptions = {
		labels: chartData.map((datapoint) => datapoint.label),
		series: chartData.map((datapoint) => datapoint.value),
		colors: chartData.map((datapoint) => datapoint.color),
		chart: {
			type: 'donut',
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 50,
					},
					legend: {
						position: 'bottom',
					},
				},
			},
		],
		legend: {
			show: true,
			position: 'bottom',
			labels: {
				colors: chartData.map((datapoint) => datapoint.color),
				useSeriesColors: false,
			},
		},
	};

	return (
		<ApexCharts
			options={options}
			series={chartData.map((datapoint) => datapoint.value)}
			type='donut'
			width={350}
		/>
	);
};

export default DonutGraph;
