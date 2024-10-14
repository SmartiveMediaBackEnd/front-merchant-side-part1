//?! This table is used in Analytics page and Review Page

import { ReactNode } from 'react';

export type TableColumn<T> = {
	label: string;
	key: keyof T; 
	render?: (value: T[keyof T]) => ReactNode; // Optional function to customize the rendering of the cell value
};

type TableMobileProps<T> = {
	tableData: T[];
	columns: TableColumn<T>[];
	renderHeader?: (item: T) => ReactNode; // Optional function to render a custom header for each row
};

export default function TableMobile<T>({ tableData, columns, renderHeader }: TableMobileProps<T>) {
	// Define a default header rendering function
	const defaultHeader = (item: T) => <h2 className='title'>{(item as any).day}</h2>;

	return (
		<div className='grid gap-3 divide-y'>
			{tableData.map((item, index) => (
				<div key={index} className='grid gap-1 py-3'>
					{/* Use the custom renderHeader function if provided, otherwise use the defaultHeader */}
					{renderHeader ? renderHeader(item) : defaultHeader(item)}
					<TableBody item={item} columns={columns} />
				</div>
			))}
		</div>
	);
}

type TableBodyProps<T> = {
	item: T;
	columns: TableColumn<T>[];
};


function TableBody<T>({ item, columns }: TableBodyProps<T>) {
	return (
		<section
			className='grid gap-x-5 gap-y-3'
			style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))' }}
		>
			{columns.map((column, index) => (
				<div className='grid gap-0.5' key={index}>
					<p className='paragraph text-subtitle'>{column.label}</p>
					<p className='paragraph text-title'>
						{/* Use the custom render function if provided, otherwise render the value as a string */}
						{column.render ? column.render(item[column.key]) : String(item[column.key])}
					</p>
				</div>
			))}
		</section>
	);
}
