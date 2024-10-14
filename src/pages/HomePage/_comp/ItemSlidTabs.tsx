import MenuOptions from 'src/app/components/optimized/Menu/MenuOptions';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { MoreIcon } from 'src/app/utils/icons';

/**
 * ItemSlidTabs component displays information about an item in a sliding tab.
 * It includes options for the item, such as deleting it.
 *
 * @param {number} id - The unique identifier of the item.
 * @param {string} title - The title of the item.
 * @param {string} img - The URL of the image representing the item.
 * @param {number} qty - The quantity of the item.
 * @param {number} price - The price of the item.
 * @param {string} subtitle - The subtitle or description of the item.
 * @param {Array} options - The options available for the item.
 * @param {function} handleDeleteItem - Function to handle item deletion.
 * @param {boolean} showDeletePopup - Boolean indicating whether the delete popup should be shown.
 * @param {any} deletingItemId - The ID of the item being deleted.
 * @param {function} setState - Function to set component state.
 * @param {any} state - The state of the component.
 * @returns {JSX.Element} ItemSlidTabs component.
 */
const ItemSlidTabs = ({
	id,
	title,
	img,
	qty,
	price,
	subtitle,
	options,
	handleDeleteItem,
	showDeletePopup,
	deletingItemId,
	setState,
	state,
}: {
	id: number;
	title: string;
	img: string;
	qty: number;
	price: number;
	subtitle: string;
	options: any;
	handleDeleteItem: () => void;
	showDeletePopup: boolean;
	deletingItemId: any;
	setState: any;
	state: any;
}) => {
	return (
		<div className='flex justify-between mb-3'>
			<div className='flex gap-2'>
				<div className='w-[3.625rem] h-[3.625rem] border border-light-3 rounded'>
					<img src={img} className='w-full h-full' alt={title} />
				</div>

				<div>
					<h4 className='text-title font-semibold text-sm'>{title}</h4>
					<p className='text-subtitle text-sm'>{subtitle}</p>
					<p className='text-title text-sm'>Qty: {qty}</p>
				</div>
			</div>
			<div className='flex flex-col justify-between items-end relative'>
				<MenuOptions
					btn={<MoreIcon className='fill-subtitle' />}
					options={options}
					handle={() => setState({ ...state, showDeletePopup: true, deletingItemId: id })}
				/>
				<p className='text-title text-sm'>SAR {price}</p>
				{showDeletePopup && deletingItemId === id && (
					<PopupDelete
						onClose={() => setState({ ...state, showDeletePopup: false })}
						onDelete={() => handleDeleteItem(id)}
					/>
				)}
			</div>
		</div>
	);
};

export default ItemSlidTabs;
