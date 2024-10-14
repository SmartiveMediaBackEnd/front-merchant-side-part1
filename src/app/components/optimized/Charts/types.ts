import type { ApexOptions } from 'apexcharts';

export interface ReactApexCompProps {
	options: ApexOptions;
	series: { name: string, data: number[] }[];
	title?: string
	negative?: boolean
	percentage?: string
}
