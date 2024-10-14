import { type ComponentType, type ReactNode, useState } from 'react';
import CompareButton from '../UiKits/CompareButton';
import { useTranslation } from 'react-i18next';

// how to use
// import { ComponentToBeUsed } from "../"
// const ParentComponent = () => {
// const data = [{ label: 'data_1' }, { label: 'data_2' }, { label: 'data_3' }, { label: 'data_4' }];
// 	return <SlideCard items={statsData} title='Title' itemsPerSlide={4} SlideComponent={ComponentToBeUsed} />;
// };

interface SlideCardProps<T> {
	items: T[];
	title: string;
	itemsPerSlide: number;
	SlideComponent: ComponentType<T>;
	children?: ReactNode;
	dropdown?: boolean;
	selectedOption?: string;
	handleSelect?: (option: string) => void;
}

function SlideCard<T>({
	items,
	title,
	itemsPerSlide,
	SlideComponent,
	children,
	dropdown,
	selectedOption,
	handleSelect,
}: SlideCardProps<T>) {
	//  hooks
	const { t } = useTranslation();

	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlide = Math.ceil(items.length / itemsPerSlide);

	// Calculate the slice of items based on the current slide
	const start = currentSlide * itemsPerSlide;
	const end = (currentSlide + 1) * itemsPerSlide;
	const slicedItems = items.slice(start, end);

	const comparisonMenus = [
		{ id: '1', text: t('Today') },
		{ id: '2', text: t('Last week') },
		{ id: '3', text: t('Last month') },
	];
	return (
		<div className='global-cards h-full  justify-between '>
			<div className='flex-col-global flex-1'>
				<div className='flex justify-between items-center mb-3'>
					<h2 className='title'>{t(title as any)}</h2>
					{dropdown && (
						<CompareButton
							sortMenus={comparisonMenus}
							selectedOption={selectedOption}
							handleSelect={handleSelect}
							variant='link'
						/>
					)}
				</div>
				{children}
				<div
					className='overflow-hidden flex-1 grid gap-2'
					style={{
						gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
					}}
				>
					{slicedItems.map((item, index) => (
						<SlideComponent key={index} {...item} />
					))}
				</div>
			</div>
			<div className='flex justify-center pt-2'>
				{Array.from({ length: totalSlide }, (_, index) => (
					<button
						key={index}
						className={`mx-1 size-3 rounded-full ${
							index === currentSlide ? 'bg-primary' : 'border border-primary bg-white'
						}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div>
		</div>
	);
}

export default SlideCard;
