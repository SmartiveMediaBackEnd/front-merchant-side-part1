//? Unfinished tasks
//! =================
// todo Action Button

import { MoreIcon } from 'src/app/utils/icons';
import { getImageUrl } from 'src/app/utils';

/**
 * @param {{
 *  imageUrl: string;
 *  productName: string;
 *  category: string;
 *  price: string;
 *  quantity: number;
 * }} props
 *
 * @example
 *
 * ```jsx
 * <MobileProductCard
 *   imageUrl='images/Rectangle.svg'
 *   productName='DJI Mavic Pro 2'
 *   category='Sportswear'
 *   price='SAR 10000.00'
 *   quantity={50}
 * />
 * ```
 */
export default function MobileProductCard(props) {
	return (
		<div className='border-2 overflow-hidden border-light-2 rounded-xl bg-white p-0 grid grid-cols-1 divide-y w-[164px]'>
			<div className='relative w-full h-40 '>
				<img src={getImageUrl(props.imageUrl)} alt={props.productName} className='object-cover w-full h-full' />
				<button className='absolute top-2 right-2'>
					<MoreIcon className='fill-subtitle' />
				</button>
			</div>
			<div className='p-3 space-y-1'>
				<h2 className='title'>{props.productName}</h2>
				<p className='subtitle'>{props.category}</p>
				<p className='paragraph'>{props.price}</p>
				<p className='paragraph'>Qty: {props.quantity}</p>
			</div>
		</div>
	);
}
