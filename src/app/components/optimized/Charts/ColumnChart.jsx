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
//  *   series={[
//  * 		{
//  *   		name: 'Series 1',
//  *   		data: [100, 500, 300, 800, 200, 100, 400, 250, 50]
//  *    }
//  *   ]}
//  *   options={{
//  *   	chart: {
//  *   		type: 'bar',
//  *   		stacked: true,
//  *   		fontFamily: 'Poppins, sans-serif',
//  *   		toolbar: {
//  *   			show: false
//  *   		}
//  *   	},
//  *   	plotOptions: {
//  *   		bar: {
//  *   			horizontal: false,
//  *   			columnWidth: '70%'
//  *   		}
//  *   	},
//  *   	xaxis: {
//  *   		categories: [
//  *   			'Apr 1',
//  *   			'Apr 2',
//  *   			'Apr 3',
//  *   			'Apr 4',
//  *   			'Apr 5',
//  *   			'Apr 6',
//  *   			'Apr 7',
//  *   			'Apr 8',
//  *   			'Apr 9'
//  *   		],
//  *   		labels: {
//  *   			rotate: -45
//  *   		}
//  *   	},
//  *   	yaxis: {
//  *   		// categories: [0, 100, 200, 300, 500, 1000], // Dates for y-axis
//  *   		tickAmount: 5
//  *   	},
//  *   	legend: {
//  *   		position: 'top',
//  *   		horizontalAlign: 'left'
//  *   	},
//  *   	colors: ['#55C397'],
//  *   	responsive: [
//  *   		{
//  *   			breakpoint: 480,
//  *   			options: {
//  *   				chart: {
//  *   					width: 200
//  *   				},
//  *   				legend: {
//  *   					position: 'bottom'
//  *   				}
//  *   			}
//  *   		}
//  *   	],
//  *   	grid: {
//  *   		show: false
//  *   	}
//  *   }}
//  *  />
//  * ```
//  */
export default function ColumnChart(props) {
	// sm:w-[375px] lg:w-[1150px]
	const {
		percentage,
		negative,
		categories = [
			'Apr 1',
			'Apr 2',
			'Apr 3',
			'Apr 4',
			'Apr 5',
			'Apr 6',
			'Apr 7',
			'Apr 8',
			'Apr 9',
			'Apr 10',
			'Apr 11',
			'Apr 12',
		],
		colors = ['#55C397'],
		data = [125, 500, 300, 800, 200, 100, 400, 250, 950, 600, 300, 700],
	} = props;
	const defaultProps = /** @satisfies {import("./types").ReactApexCompProps} */ ({
		series: [
			{
				// name: 'Series 1',
				data,
			},
		],
		options: {
			chart: {
				type: 'bar',
				stacked: true,
				fontFamily: 'Poppins, sans-serif',
				toolbar: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '60%',
				},
			},
			xaxis: {
				categories,
				labels: {
					rotate: -45,
				},
			},
			yaxis: {
				tickAmount: 5,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
			},
			colors,
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
			grid: {
				show: false,
			},
		},
	});
	const { t } = useTranslation();
	return (
		<div className='px-5 pt-5 bg-white sm:h-[327px] lg:h-[315px]'>
			<div className='flex items-center justify-between mb-1'>
				<h2 className='text-lg font-semibold text-title'>{t('Sales')}</h2>
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
				type='bar'
				width='100%'
				height='89%'
			/>
		</div>
	);
}
