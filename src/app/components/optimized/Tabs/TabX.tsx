import React, { useContext, createContext } from 'react';
import { MdDone } from 'react-icons/md';
import Button from '../Buttons/Button';
import { useTranslation } from 'react-i18next';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import useLanguage from 'src/app/utils/hooks/useLanguage';

// 1. Define the interface for the Tab object
interface Tab {
	title: string;
	content: React.ReactNode;
}

// 2. Define the props interface for TabX component
interface TabXProps {
	tabs: Tab[];
	handleFinish: (isFinished: boolean) => void;
	currentTab: number;
	handleTabClick: (index: number) => void;
	handleNext: () => void;
	handlePrev: () => void;
}

// 3. Define the TabX component using React.FC with TabXProps
const TabX: React.FC<TabXProps> = ({
	tabs,
	handleFinish,
	currentTab,
	handleTabClick,
	handleNext,
	handlePrev,
}) => {
	return (
		// 4. Provide the VerticalTabsContext to child components
		<VerticalTabsContext.Provider value={{ currentTab, handleTabClick, handleNext, handlePrev }}>
			<div className='flex flex-col gap-4 h-full'>
				{tabs.map((tab, index) => (
					// 5. Render each tab using VTab component
					<VTab
						key={index}
						index={index}
						title={tab.title}
						content={tab.content}
						tabs={tabs}
						handleFinish={handleFinish}
					/>
				))}
			</div>
		</VerticalTabsContext.Provider>
	);
};

export default TabX;

// 6. Define the context type for vertical tabs
interface VerticalTabsContextType {
	currentTab: number;
	handleTabClick: (index: number) => void;
	handleNext: () => void;
	handlePrev: () => void;
}

// 7. Create context with the specified type and default values
export const VerticalTabsContext = createContext<VerticalTabsContextType>({
	currentTab: 0,
	handleTabClick: () => {},
	handleNext: () => {},
	handlePrev: () => {},
});

// 8. Define the props interface for VTab component
interface VTabProps {
	index: number;
	title: string;
	content: React.ReactNode;
	tabs: Tab[];
	handleFinish: (isFinished: boolean) => void;
}

// 9. Define the VTab component using React.FC with VTabProps
const VTab: React.FC<VTabProps> = ({ index, title, content, tabs, handleFinish }) => {
	// 10. Use context to access current tab and navigation functions
	const { currentTab, handleTabClick, handleNext, handlePrev } = useContext(VerticalTabsContext);
	const { t } = useTranslation(); // Translation hook
	const isActive = index === currentTab; // Check if the tab is active
	const isLastStep = index === tabs.length - 1; // Check if it is the last step
	const isCompleted = index < currentTab; // Check if the step is completed

	// 11. Hooks for language direction and responsiveness
	const { language } = useLanguage();
	const { xs } = useResponsive();

	// 12. Determine the classes for the step indicator
	const stepClasses = `flex justify-center items-center size-[1.94rem] z-20 rounded-full cursor-pointer ${
		isActive
			? 'bg-primary text-white'
			: isCompleted
			? 'bg-white border border-primary'
			: 'bg-white border border-hint text-hint'
	}`;

	return (
		<div className={`relative ${isActive ? 'flex-grow' : ''}`}>
			<section className='flex gap-2 items-center'>
				<div className={stepClasses} onClick={() => handleTabClick(index)}>
					{isCompleted ? (
						<span className='text-sm'>
							<MdDone color='blue' />
						</span>
					) : (
						index + 1
					)}
				</div>
				<div className={`capitalize ${isActive ? 'title' : 'paragraph text-subtitle'}`}>
					{title}
				</div>
				{!xs && !isLastStep && (
					<span
						className={`h-full w-px absolute top-6 ${
							language === 'ar' ? 'right-[15px]' : 'left-[15px]'
						} ${isCompleted ? 'bg-primary' : 'bg-inactive'}`}
					></span>
				)}
			</section>
			{isActive && (
				<div className='py-5 px-9 global-cards'>
					{content}
					<div className='flex justify-end mt-4 gap-2'>
						{index > 0 && (
							<Button onClick={handlePrev} disabled={currentTab === 0} className='ms-5'>
								{t('Prev')}
							</Button>
						)}
						<Button onClick={isLastStep ? () => handleFinish(true) : handleNext}>
							{isLastStep ? t('Finish') : t('Next')}
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};
