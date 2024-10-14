import ReactApexChart from 'react-apexcharts';
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
//  *   	chart: {
//  *   		type: 'donut',
//  *   		width: '100%',
//  *   		fontFamily: 'Poppins , sans-serif'
//  *   	},
//  *   	plotOptions: {
//  *   		pie: {
//  *   			dataLabels: {
//  *   				// position doesn't exist in the types of `pie`
//  *   				// position: 'top'
//  *   			}
//  *   		}
//  *   	},
//  *   	grid: {
//  *   		padding: {
//  *   			right: 25,
//  *   			left: 20
//  *   		}
//  *   	},
//  *   	labels: ['Google', 'Social media', 'Email'],
//  *   	legend: {
//  *   		position: 'top',
//  *   		horizontalAlign: 'center'
//  *   	},
//  *   	colors: ['#446CCE', '#49C596', '#D65036'],
//  *   	responsive: [
//  *   		{
//  *   			breakpoint: 480,
//  *   			options: {
//  *   				chart: {
//  *   					width: 400
//  *   				}
//  *   			}
//  *   		}
//  *   	]
//  *   }}
//  *   series={[44, 55, 41]}
//  *  />
//  * ```
//  */

export default function ChannelChart(props) {
	const {
		title,
		percentage,
		negative,
		labels = ['Google', 'Social media', 'Email'],
		colors = ['#446CCE', '#49C596', '#D65036'],
		series = [44, 55, 41],
	} = props;

	const defaultOptions = {
		chart: {
			type: 'donut',
			width: '100%',
			fontFamily: 'Poppins , sans-serif',
		},
		plotOptions: {
			pie: {
				dataLabels: {},
			},
		},
		grid: {
			padding: {
				right: 25,
				left: 20,
			},
		},
		labels,
		legend: {
			position: 'top',
			horizontalAlign: 'center',
		},
		colors,
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 500,
					},
				},
			},
		],
	};

	return (
		<div className='h-full global-cards'>
			<div className='flex-row-global justify-between '>
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

			<div id='chart' className='flex-row-global w-full'>
				<ReactApexChart
					className='mx-auto'
					options={props.options || defaultOptions}
					series={props.series || series}
					type='donut'
				/>
			</div>
			<div id='html-dist'></div>
		</div>
	);
}
