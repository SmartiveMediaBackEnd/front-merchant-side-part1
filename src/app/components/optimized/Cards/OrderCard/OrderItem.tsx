import { useNavigate } from 'react-router-dom';
import Avatar from '../../UiKits/Avatar';

// Define the type for the order object
export interface Order {
	id: string;
	imageUrl?: string;
	fullName?: string;
	firstName?: string;
	lastName?: string;
	orderStatus: string;
	orderNumber: string;
	price: string;
	currency: string;
	date: string;
}

export default function OrderItem({ order }: { order: Order }) {
	const navigate=useNavigate()
	const {
		id,
		imageUrl,
		fullName,
		firstName,
		lastName,
		orderStatus,
		orderNumber,
		price,
		currency,
		date,
	} = order;
	// Determine the name to display
	const displayName = fullName ? fullName : `${firstName} ${lastName}`;

	return (
		<div
			onClick={() => navigate(`/orders/orderDetails/${id}`)}
			key={id}
			className='flex justify-between items-start py-0.5 cursor-pointer'
		>
			<div className=' w-[65%] flex  gap-3'>
				<Avatar
					variant='user'
					firstName={firstName}
					fullName={fullName}
					lastName={lastName}
					imageUrl={imageUrl}
					size='lg'
				/>
				<div className='flex flex-col justify-between'>
					<h2 className='text-title text-sm'>
						{displayName} <span className='text-xs text-subtitle'>{orderNumber}</span>
					</h2>
					<p
						className={`paragraph ${
							// Apply different styles based on order status
							orderStatus === 'Awaiting Payment'
								? 'text-neutral-2'
								: orderStatus === 'Canceled'
								? 'text-subtitle'
								: 'text-sec-pressed'
						}`}
					>
						{orderStatus}
					</p>
				</div>
			</div>
			<div className=' w-[35%] flex-col-global items-end gap-2'>
				<h4 className='text-right  text-title text-sm font-semibold'>
					{price} {currency}
				</h4>
				<p className='text-subtitle text-xs'>{date}</p>
			</div>
		</div>
	);
}
