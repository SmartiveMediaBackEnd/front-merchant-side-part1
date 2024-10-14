import ReactApexChart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';
import { capitalize } from 'src/app/utils';
import { BackAndroidIcon } from 'src/app/utils/icons';

// /**
//  * @param {import("./types").ReactApexCompProps} props
//  *
//  * @example
//  *
//  * ```jsx
//  *  <ChannelChart
//  *   options={{
//  *		chart: {
//  *			type: "line",
//  *			fontFamily: "Poppins, sans-serif",
//  *			toolbar: {
//  *				show: false,
//  *			},
//  *		},
//  *		stroke: {
//  *			width: 1,
//  *		},
//  *		xaxis: {
//  *			categories: [
//  *				"Apr 1",
//  *				"Apr 2",
//  *				"Apr 3",
//  *				"Apr 4",
//  *				"Apr 5",
//  *				"Apr 6",
//  *				"Apr 7",
//  *			],
//  *			labels: {
//  *				rotate: -45,
//  *			},
//  *		},
//  *		yaxis: {
//  *			min: 0,
//  *			max: 1000,
//  *			tickAmount: 5,
//  *		},
//  *		legend: {
//  *			position: "top",
//  *			horizontalAlign: "left",
//  *		},
//  *		colors: ["#C0C7D6", "#55C397"],
//  *		grid: {
//  *			show: false,
//  *		},
//  *	}}
//  *   series={[
//  *   	{
//  *   		name: "Last Week",
//  *   		data: [220, 230, 250, 200, 210, 180, 220],
//  *   	},
//  *   	{
//  *   		name: "This Week",
//  *   		data: [200, 210, 230, 240, 250, 230, 240],
//  *   	},
//  *    ]}
//  *  />
//  * ```
//  */
export default function LineChart(props) {
	const { t } = useTranslation();
	const {
		title = t('sales'),
		percentage,
		negative,
		categories = ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7'],
		colors = ['#C0C7D6', '#55C397'],
		nameA = t('Last Week'),
		nameB = t('This Week'),
		dataA = [220, 230, 250, 200, 210, 180, 220],
		dataB = [200, 210, 230, 240, 250, 230, 240],
	} = props;

	const defaultProps = {
		options: {
			chart: {
				// type: 'line',
				fontFamily: 'Poppins, sans-serif',
				toolbar: {
					show: false,
				},
			},
			stroke: {
				width: 1,
			},
			xaxis: {
				categories,
				labels: {
					rotate: -40,
				},
			},
			yaxis: {
				min: 0,
				max: 1000,
				tickAmount: 5,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
			},
			colors,
			grid: {
				show: false,
			},
		},
		series: [
			{
				name: nameA,
				data: dataA,
			},
			{
				name: nameB,
				data: dataB,
			},
		],
	};
	return (
		<div className='global-cards  h-full'>
			<div className='flex items-center justify-between '>
				<h2 className='title'>{capitalize(title)}</h2>
				<div className='flex'>
					<BackAndroidIcon
						className={`fill-${negative ? 'error' : 'success'}  ${
							negative ? '-rotate-90' : 'rotate-90'
						}`}
					/>
					<h2 className={`text-${negative ? 'error' : 'success'}`}>{percentage}%</h2>
				</div>
			</div>
			<ReactApexChart
				options={props.options || defaultProps.options}
				series={props.series || defaultProps.series}
				type='line'
				width='100%'
				height='89%'
			/>
		</div>
	);
}
