import { useState } from 'react';
import { ToggleSwitch } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { AddBgIcon, DownIcon, MoreIcon, MoveIcon } from 'src/app/utils/icons';

/**
 * @param {object} props - Props for the ProductCategory component
 * @param {string} props.imageUrl - The URL of the image for the product category
 * @param {string} props.title - The title of the product
 * @param {string} props.category - The category of the product
 * @param {number} props.quantity - The quantity of the product
 * @param {string} props.price - The price of the product
 *
 * @description
 *
 * Usage Example:
 *
 * ```jsx
 *
 * import { ProductCategory } from "./ProductCategory";
 *
 * export default function ParentComponent() {
 *   const demoData = [
 *     {
 *       imageUrl: "image-url-1",
 *       title: "Product 1",
 *       category: "Category 1",
 *       quantity: 10,
 *       price: "$100",
 *     },
 *     {
 *       imageUrl: "image-url-2",
 *       title: "Product 2",
 *       category: "Category 2",
 *       quantity: 20,
 *       price: "$200",
 *     },
 *   ];
 *   return (
 *     <div>
 *       {demoData.map((data, index) => (
 *         <ProductCategory key={index} {...data} />
 *       ))}
 *     </div>
 *   );
 * };
 * ```
 */
export default function ProductCategory({ imageUrl, title, category, quantity, price }) {
	const [availability, setAvailability] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	// Toggle the opening and closing of additional details
	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='grid w-full grid-cols-12 p-3 '>
			{/* [1] */}
			<div className='gap-[6px] col-span-4 flex'>
				<div className='flex items-center cursor-grab'>
					<MoveIcon className='fill-subtitle' />
				</div>
				<div className='flex flex-1 gap-3'>
					<div className='overflow-hidden border rounded-lg size-10 border-light-2'>
						<img src={getImageUrl(imageUrl)} alt={title} className='object-cover size-full' />
					</div>
					<div className='flex flex-col justify-around'>
						<h2 className='title'>{title}</h2>
						<p className='paragraph text-subtitle'>{category}</p>
					</div>
				</div>
			</div>
			{/* [2] */}
			<div className='grid grid-cols-3 col-span-5'>
				<p className='paragraph'>{quantity}</p>
				<p className='paragraph'>{price}</p>
				<div className='flex items-start gap-[5px]'>
					<ToggleSwitch handleToggle={() => setAvailability((prev) => !prev)} checked={availability} />
				</div>
			</div>
			{/* [3] */}
			<div className='flex items-start justify-center col-span-2 gap-3'>
				<button>
					<AddBgIcon className='fill-subtitle' />
				</button>
				<button>
					<MoreIcon className='fill-subtitle' />
				</button>
			</div>
			{/* [4] */}
			<button className='flex items-center justify-self-end' onClick={toggleOpen}>
				<DownIcon className={`fill-subtitle transition-all ${isOpen ? 'rotate-180' : ''}`} />
			</button>
		</div>
	);
}
