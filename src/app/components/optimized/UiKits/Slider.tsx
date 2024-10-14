import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useTranslation } from 'react-i18next';
import { HiExternalLink } from 'react-icons/hi';
import useLanguage from '../../../utils/hooks/useLanguage';
import CalloutCard from '../Cards/CalloutCard';

/**
 * Interface for each slide in the Slider component.
 */
interface Slide {
	image: string;
	title: string;
	description: string;
}

/**
 * Props for the Slider component.
 */
interface SliderProps {
	size: string;
	slides: Slide[];
	title: string;
}

/**
 * Component representing a slider with Splide.
 * @param {SliderProps} props - Props for the Slider component.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Slider({ size, slides, title }: SliderProps) {
	const { language } = useLanguage();
	const { t } = useTranslation();

	return (
		<section className='mx-auto p-3'>
			<h2 className='text-title font-semibold'>{t(title)}</h2>
			{/* Splide Slider based on size */}
			<Splide
				options={{
					focus: 0,
					perPage: size === 'mini' ? 1 : size === 'mid' ? 2 : 3,
					perMove: 1,
					drag: 'free',
					type: 'loop',
					gap: '1rem',
					snap: true,
					omitEnd: true,
					...(language === 'ar' && { direction: 'rtl' }),
				}}
				aria-label='My Favorite Images'
			>
				{slides?.map((slide, index) => (
					<SplideSlide
						key={index}
						className={`grid grid-cols-${size === 'mini' ? 1 : size === 'mid' ? 2 : 3} gap-2 `}
					>
						{/* {size === 'mini' ? <MiniCard {...slide} /> : <Card {...slide} />} */}
						<CalloutCard />
					</SplideSlide>
				))}
			</Splide>
		</section>
	);
}

/**
 * Component representing a card in the Slider component.
 * @param {Slide} props - Props for the Card component.
 * @returns {JSX.Element} - Rendered component.
 */
const Card: React.FC<Slide> = ({ image, title, description }) => {
	return (
		<div className='w-96 h-24 flex gap-3'>
			<div>
				<img src={image} alt={title} className='w-40 h-24' />
			</div>
			<div className='pl-2'>
				<h2 className='font-semibold mb-0.5 text-title'>{title}</h2>
				<p className='text-subtitle text-sm'>{description}</p>
			</div>
		</div>
	);
};

/**
 * Component representing a mini card in the Slider component.
 * @param {Slide} props - Props for the MiniCard component.
 * @returns {JSX.Element} - Rendered component.
 */

const MiniCard: React.FC<Slide> = ({ image, title, description }) => {
	const { t } = useTranslation();
	return (
		<div className='flex border border-constrained rounded-md overflow-hidden '>
			<div className='w-32 h-28'>
				<img src={image} alt={title} className='w-full h-full' />
			</div>
			<div className='p-2 flex flex-col justify-between'>
				<div>
					<h2 className='font-semibold mb-0.5 text-title text-sm'>{title}</h2>
					<p className='text-subtitle text-xs'>{description}</p>
				</div>
				<button className='text-sm p-0 btn-lin hover:bg-transparent'>
					<span className='flex items-center gap-2'>
						{t('Watch Video')} <HiExternalLink />
					</span>
				</button>
			</div>
		</div>
	);
};
