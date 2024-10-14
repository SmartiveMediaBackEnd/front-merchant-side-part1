import { useState } from 'react';
// how to use
// const ParentComponent = () => {
// 	const slides = [
// 		{ title: 'Title 1', content: <Component /> },
// 		{ title: 'Title 2', content: <Component /> },
// 		{ title: 'Title 3', content: <Component /> },
// 		{ title: 'Title 4', content: <Component /> },
// 	];

// 	return <SlideCardTabs slides={slides} />

// };

const SlideCardTabs = ({
	slides,
	title,
}: {
	title: string;
	slides: { title: string; content: React.ReactNode }[];
}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className='global-cards w-full grid '>
			<div className='flex-row-global justify-between  '>
				<h2 className='title'>{title}</h2>
			</div>
			<div className='flex-row-global justify-between border-b border-borders-lines '>
				{slides.map((slide, index) => (
					<Tab
						key={index}
						title={slide.title}
						active={index === activeIndex}
						onClick={() => setActiveIndex(index)}
					/>
				))}
			</div>
			<div className='grid gap-3'>
				{slides.map((slide, index) => (
					<div key={index} className={`${index === activeIndex ? 'block' : 'hidden'}`}>
						{slide.content}
					</div>
				))}
			</div>
		</div>
	);
};
export default SlideCardTabs;

const Tab = ({
	title,
	active,
	onClick,
}: {
	title: string;
	active: boolean;
	onClick: () => void;
}) => {
	return (
		<button
			className={`px-4 py-2 focus:outline-none ${
				active
					? 'title text-primary  border-b-2 border-primary'
					: 'paragraph text-hint hover:text-primary'
			}`}
			onClick={onClick}
		>
			{title}
		</button>
	);
};
