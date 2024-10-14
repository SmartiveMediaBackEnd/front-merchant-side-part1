import Joyride from 'react-joyride';
import { LineChart } from 'src/app/components/optimized';
import CalloutCard from 'src/app/components/optimized/Cards/CalloutCard';
import OrdersCard from 'src/app/components/optimized/Cards/OrderCard/OrdersCard';
import { HomeLoading } from 'src/app/components/optimized/SchimmerLoading/HomeLoading';
import { CustomSlider } from 'src/app/components/optimized/UiKits/CustomSlider';
import { TourCard } from 'src/app/components/shared';
import { joyrideStyles, tourSteps } from 'src/app/components/shared/tour-guide/tourSteps';
import HomeReports from './_comp/HomeReports';
import ProductHighlights from './_comp/ProductHighlights';
import Setups from './_comp/Setups';
import data from './_comp/data.json';
import { useHomePage } from './_comp/useHomePage';

export const slides = [
	{
		videoUrl: '',
		title: 'How to finish steps',
		description: 'In 2 mins, learn how to launch your store',
	},
	{
		videoUrl: '',
		title: 'How to register domain',
		description: 'In 2 mins, learn how to launch your store',
	},
	{
		videoUrl: '',
		title: 'SEO in details',
		description: 'In 2 mins, learn how to launch your store',
	},
	{
		videoUrl: '',
		title: 'How to finish steps',
		description: 'In 2 mins, learn how to launch your store',
	},
	{
		videoUrl: '',
		title: 'How to finish steps',
		description: 'In 2 mins, learn how to launch your store',
	},
];

export default function HomePage() {
	const { showLoading, startTour, handleSetup, handleJoyrideCallback, run, isSetup } =
		useHomePage();
	// console.log('here home');
	if (showLoading) {
		return <HomeLoading />;
	}
	return (
		<div className='custom_container grid grid-cols-1 gap-5 pt-5'>
			<div className='custom-grid-parent'>
				<div className='grid-left'>
					{isSetup ? (
						<LineChart percentage='50' />
					) : (
						<Setups startTour={startTour} handleSetup={handleSetup} />
					)}
				</div>
				<div className='grid-right'>
					<HomeReports />
				</div>
			</div>
			<div className='custom-grid-parent'>
				<div className='grid-left'>
					<OrdersCard latestOrders={data.latestOrders} title='Latest Orders' dropdown />
				</div>
				<div className='grid-right'>
					<ProductHighlights data={data} />
				</div>
			</div>

			<CustomSlider slides={slides} title='Get started with dookan' SlideComponent={CalloutCard} />

			<Joyride
				steps={tourSteps}
				run={run}
				continuous
				styles={joyrideStyles}
				tooltipComponent={TourCard as any}
				callback={handleJoyrideCallback}
			/>
		</div>
	);
}
// </Suspense>
