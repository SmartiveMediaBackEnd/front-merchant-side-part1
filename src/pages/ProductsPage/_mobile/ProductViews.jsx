//? Unfinished tasks
//! =================
// todo Actions Button
// todo Make the Component more clean
// todo collect number of checked cards
// todo Trigger image preview logic

import { useState } from 'react';
import { getImageUrl } from 'src/app/utils';
import {
	CameraIcon,
	CopyIcon,
	EditIcon,
	MoreIcon,
	NextIcon,
	StarActiveIcon,
	StarIcon,
	ViewIcon,
} from 'src/app/utils/icons';
import { CheckBox } from 'src/app/components/optimized';

/**
 * @param {{
 *  name: string;
 *  imageUrl: string;
 *  category: string;
 *  options: number;
 *  sku: string;
 *  quantity: number;
 *  price: string;
 * }} props
 *
 * @example
 *
 * ```jsx
 * <ProductCard
 *   name='DJI Mavic Pro 2'
 *   imageUrl='images/Vector.svg'
 *   category='Blankets'
 *   options={50}
 *   sku='123456'
 *   quantity={50}
 *   price='10000.00'
 * />
 * ```
 */
export default function ProductViews(props) {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	// console.log(isFavorite);
	console.log(isChecked);

	function isFavoriteHandler() {
		setIsFavorite(!isFavorite);
	}

	function checkBoxHandler() {
		setIsChecked(!isChecked);
	}
	return (
		<div
			className={`rounded-lg w-full p-3 justify-between grid border grid-cols-12 bg-white ${
				isChecked ? 'border-success' : 'border-light-2'
			}`}
		>
			<div className='gap-[6px] col-span-4 flex items-center'>
				<div className='flex flex-col items-center gap-5'>
					<CheckBox handleOnChange={checkBoxHandler} checked={isChecked} />
					<button onClick={isFavoriteHandler}>
						{isFavorite ? (
							<StarActiveIcon className='fill-neutral-1' />
						) : (
							<StarIcon className='fill-hint' />
						)}
					</button>
				</div>
				<div className='flex items-center flex-1 gap-3'>
					<div className='size-[68px] rounded-lg border border-light-2 relative overflow-hidden'>
						<img
							src={getImageUrl(props.imageUrl)}
							alt={props.name}
							className='object-cover w-full h-full'
						/>
						<div className='absolute grid w-6 h-6 bg-white border rounded-full border-light-2 bottom-1 left-1 place-content-center'>
							<CameraIcon className='w-[18px] h-[18px]' />
						</div>
					</div>
					<div className='flex flex-col justify-around'>
						<h2 className='title'>{props.name}</h2>
						<p className='paragraph text-subtitle'>{props.category}</p>
						<p className='paragraph'>{props.options} Options</p>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-3 col-span-5'>
				<p className='paragraph'>{props.sku}</p>
				<p className='paragraph'>{props.quantity}</p>
				<p className='paragraph'>{props.price}</p>
			</div>
			<div className='flex items-start justify-center col-span-2 gap-3'>
				<button>
					<ViewIcon className='fill-subtitle' />
				</button>
				<button>
					<EditIcon className='fill-subtitle' />
				</button>
				<button>
					<CopyIcon className='fill-subtitle' />
				</button>
				<button>
					<MoreIcon className='fill-subtitle' />
				</button>
			</div>
			<div className='flex items-center justify-self-end'>
				<button>
					<NextIcon className='fill-subtitle' />
				</button>
			</div>
		</div>
	);
}
