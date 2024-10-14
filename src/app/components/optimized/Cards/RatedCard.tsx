import { GoStarFill } from 'react-icons/go';

const RatedCard = (props: {
	imageSrc: string;
	title: string;
	rating: number;
	reviews: number;
	price: number;
	priceUnit: string;
	description: string;
	onClick?:()=>void
}): JSX.Element => {
	return (
		<div onClick={props.onClick}  className='bg-white cursor-pointer shadow-md md:w-full sm:w-[90%]  rounded-lg overflow-hidden mx-auto  relative'>
			<div className='flex items-center justify-center space-x-1 bg-white p-1  rounded-md absolute top-36 left-5'>
				<GoStarFill size={18} color='gold' />
				<span className='text-sm'>
					{props.rating} <span className='text-subtitle'>({props.reviews})</span>
				</span>
			</div>
			<div className='p-3 flex flex-col gap-[.5rem]'>
				<img className=' h-48 object-cover rounded-lg' src={props.imageSrc} alt={props.title} />
				<div className='flex-col gap-[.2rem]'>
					<h2 className='text-xl font-bold text-title'>{props.title}</h2>
					<p className='  text-[.7rem] text-subtitle'>{props.description}</p>
				</div>
				<div className=' flex items-center gap-[.2rem] text-title font-semibold'>
					<span className='text-base'>{props.priceUnit}</span>
					<span className='text-base'>{props.price} / hour</span>
				</div>
			</div>
		</div>
	);
};

// Default props for the RatedCard component
RatedCard.defaultProps = {
	imageSrc: 'https://picsum.photos/id/227/200/150',
	title: 'The Awesome Product',
	rating: 4.3,
	reviews: 500,
	price: 200,
	priceUnit: 'SAR',
	description: 'Connect with Telegram to show...',
};

export default RatedCard;

/*
<RatedCard
	imageSrc='https://example.com/image.jpg'
	title='Sample Product'
	rating={4.7}
	reviews={250}
	price={150}
	priceUnit='USD'
	description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
/>;
*/
