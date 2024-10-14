import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import { BackIcon, NextIcon } from 'src/app/utils/icons';

const arrowClasses =
	'flex justify-center items-center absolute top-0 pointer border border-pri-dark size-[34px] z-30 cursor-pointer';

// Usage Example
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <CustomSlider slides={slides} title="My Custom Slider" slidesToShow={2} SlideComponent={Card} />
//     </div>
//   );
// };

interface Arrow {
	onClick?: () => void;
}

interface Slide {
	title: string;
	videoUrl: string;
	description: string;
}
interface CustomSliderProps {
	slides: Slide[];
	title: string;
	defaultSlidesToShow?: number;
	SlideComponent: React.ComponentType<Slide>;
}

export function CustomSlider({
	slides,
	title,
	SlideComponent,
	defaultSlidesToShow = 1,
}: CustomSliderProps) {
	const { t } = useTranslation();

	const isSmallScreen = useMediaQuery({ query: '(max-width: 890px)' });
	const isMediumScreen = useMediaQuery({ query: '(min-width: 891px) and (max-width: 1380px)' });
	const isLargeScreen = useMediaQuery({ query: '(min-width: 1381px)' });

	let slidesToShow = defaultSlidesToShow;

	if (isSmallScreen) {
		slidesToShow = 1;
	} else if (isMediumScreen) {
		slidesToShow = 2;
	} else if (isLargeScreen) {
		slidesToShow = 3;
	}

	const settings: Settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<div className='global-cards relative'>
			<div className='absolute title leading-9'>{t(title as any)}</div>
			<Slider {...settings}>
				{slides.map((slide, index) => (
					<div key={index} className='mt-12'>
						<SlideComponent {...slide} />
					</div>
				))}
			</Slider>
		</div>
	);
}

function NextArrow({ onClick }: Arrow) {
	return (
		<div className={`${arrowClasses} right-0 rounded-r`} onClick={onClick}>
			<NextIcon className='fill-pri-dark' />
		</div>
	);
}

function PrevArrow({ onClick }: Arrow) {
	return (
		<div className={`${arrowClasses} right-[33px] rounded-l`} onClick={onClick}>
			<BackIcon className='fill-pri-dark' />
		</div>
	);
}
