import { useEffect, useState } from 'react';
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
//  *		chart: {
//  *			type: 'bar',
//  *			stacked: true,
//  *			fontFamily: 'Poppins, sans-serif',
//  *			toolbar: {
//  *				show: false
//  *			}
//  *		},
//  *		plotOptions: {
//  *			bar: {
//  *				horizontal: false,
//  *				columnWidth: '70%'
//  *			}
//  *		},
//  *		yaxis: {
//  *			tickAmount: 5
//  *		},
//  *		xaxis: {
//  *			categories: [
//  *				'Apr 1',
//  *				'Apr 2',
//  *				'Apr 3',
//  *				'Apr 4',
//  *				'Apr 5',
//  *				'Apr 6',
//  *				'Apr 7',
//  *				'Apr 8',
//  *				'Apr 9'
//  *			],
//  *			labels: {
//  *				rotate: -45
//  *			}
//  *		}, *
//  *		legend: {
//  *			position: 'top',
//  *			horizontalAlign: 'left'
//  *		},
//  *		responsive: [
//  *			{
//  *				breakpoint: 480,
//  *				options: {
//  *					chart: {
//  *						width: 200
//  *					},
//  *					legend: {
//  *						position: 'bottom'
//  *					}
//  *				}
//  *			}
//  *		],
//  *		colors: ['#55C397', '#FFCC73'],
//  *		grid: {
//  *			show: false
//  *		}
//  *	 }}
//  *   series={[
//  *		{
//  *			name: 'Group 1',
//  *			data: [300, 1000, 700, 300, 500, 300]
//  *		},
//  *		{
//  *			name: 'Group 2',
//  *			data: [100, 100, 200, 400, 500, 900]
//  *		}
//  *	 ]}
//  *  />
//  * ```
//  */

/**
 *
 * @param {{
 *  title?: string;
 * percentage?:string
 *  negative?:boolean
 * categories?:string[]
 * colors?:string[]
 *nameA?:string
 * nameB?:string
 * dataA?:number[]
 * dataB?:number[]
 * }} props
 */
export default function StackedColumnChart(props) {
	const {
		title = 'sales',
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
			'Apr 13',
			'Apr 14',
			'Apr 15',
		],
		colors = ['#C0C7D6', '#55C397'],
		nameA = 'Group 1',
		nameB = 'Group 2',
		dataA = [3000, 1000, 700, 300, 500, 300, 700, 600, 1000, 2000, 1500, 800, 1200, 500],
		dataB = [100, 100, 200, 400, 500, 900, 8000, 100, 60, 300, 700, 1000, 200, 400, 500],
	} = props;

	const defaultProps = /** @satisfies {import("./types").ReactApexCompProps} */ ({
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
					columnWidth: '70%',
				},
			},
			yaxis: {
				tickAmount: 5,
			},
			xaxis: {
				categories,
				labels: {
					rotate: -45,
				},
			},

			legend: {
				position: 'top',
				horizontalAlign: 'left',
			},
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
	});

	return (
		<div className='px-5 pt-5 bg-white h-80 rounded-xl border border-borders-lines'>
			<div className='flex items-center justify-between mb-1'>
				<h2 className='text-lg font-semibold text-title'>{capitalize(title)}</h2>
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
				dir='ltr'
				options={defaultProps.options}
				series={defaultProps.series}
				type='bar'
				width='98%'
				height='89%'
			/>
		</div>
	);
}
