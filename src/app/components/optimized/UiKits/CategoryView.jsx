/**
 * @param {{
 *  imageUrl?: string,
 *  title: string,
 *  description?: string
 * }} props
 */
export default function CategoryView(props) {
	return (
		<div className='overflow-hidden bg-white rounded-lg shadow-md'>
			<img className='object-cover w-full h-48' src={props.imageUrl} alt={props.title} />
			<div className='flex items-center justify-between px-4 py-4'>
				<div className='flex items-center'>
					<div className='mr-2 text-lg font-medium text-gray-800'>{props.title}</div>
					...
				</div>
				{props.description && <div className='text-right text-gray-500'>{props.description}</div>}
			</div>
		</div>
	);
}
