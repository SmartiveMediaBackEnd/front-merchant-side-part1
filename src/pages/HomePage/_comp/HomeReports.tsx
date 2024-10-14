import SlideCard from 'src/app/components/optimized/Cards/SlideCard';
import ProgressCard from 'src/app/components/optimized/Cards/ProgressCard';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';

export default function HomeReports() {
	const { selectedOption, handleSelect } = useSelectBox();
	const reportsProgressData = [
		{ label: 'Visitors with product views', count: 2, ratio: 4.75, positive: false },
		{ label: 'Added to cart', count: 7, ratio: 3.25, positive: true },
		{ label: 'Started checkouts', count: 2, ratio: 3.7, positive: false },
		{ label: 'Placed orders', count: 2, ratio: 1.7, positive: true },
		{ label: 'Visitors', count: 15, ratio: 2, positive: false },
		{ label: 'Product views', count: 20, ratio: 3, positive: true },
		{ label: 'Orders received', count: 2, ratio: 3.7, positive: false },
		{ label: 'Revenue', count: 1, ratio: 1.2, positive: true },
	];
	return (
		<SlideCard
			items={reportsProgressData}
			title='Reports'
			itemsPerSlide={4}
			SlideComponent={ProgressCard}
			selectedOption={selectedOption}
			handleSelect={handleSelect}
			dropdown
		/>
	);
}
