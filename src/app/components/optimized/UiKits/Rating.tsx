import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface RatingProps {
	rating: number;
	size?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, size = 16 }) => {
	const stars = Array(Math.floor(rating)).fill(1);
	const halfStar = rating % 1 !== 0;

	return (
		<div className='flex items-center space-x-1 text-yellow-500 text-2xl'>
			{stars.map((_, index) => (
				<span key={index}>
					<FaStar size={size} />
				</span>
			))}
			{halfStar && (
				<span>
					<FaStarHalfAlt size={size} />
				</span>
			)}
		</div>
	);
};

export default Rating;

{
	/* <Rating rating={4.5} size={24} /> */
}
