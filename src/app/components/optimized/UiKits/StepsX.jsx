import { useState } from 'react';
import { MdDone } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdOutlineDownloadDone } from 'react-icons/md';

const StepsX = ({ stepsContent }) => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleNext = () => {
		if (currentStep < stepsContent.length) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleFinish	 = () => {
		// console.log('Finished!');
	};

	const ActiveStep = () => <div className='w-10 h-5 rounded-sm bg-primary'></div>;

	const NotActiveStep = () => {
		return <div className='w-10 h-5 rounded-sm border border-primary bg-transparent'></div>;
	};
	const DoneStep = () => {
		return (
			<div className='w-10 h-5 rounded-sm border border-primary bg-transparent'>
				<div className='w-full h-full flex items-center justify-center'>
					<span>
						<MdDone size={15} color='#2563EB' />
					</span>
				</div>
			</div>
		);
	};

	const renderStepContent = () => {
		return stepsContent[currentStep - 1];
	};
	return (
		<div className='flex flex-col space-y-4'>
			<div className='flex justify-between'>
				<div className='flex space-x-1'>
					{[...Array(stepsContent.length)].map((_, index) => {
						if (index + 1 === currentStep) {
							return <ActiveStep key={index} />;
						} else if (index + 1 < currentStep) {
							return <DoneStep key={index} />;
						} else {
							return <NotActiveStep key={index} />;
						}
					})}
				</div>
				<div className='flex space-x-2'>
					{currentStep > 1 && (
						<button disabled={currentStep === 1} onClick={handleBack}>
							<FaArrowLeft />
						</button>
					)}
					{currentStep < stepsContent.length && (
						<button disabled={currentStep === stepsContent.length} onClick={handleNext}>
							<FaArrowRight />
						</button>
					)}

					{currentStep === stepsContent.length && (
						<button onClick={handleFinish}>
							<MdOutlineDownloadDone size={25} />
						</button>
					)}
				</div>
			</div>
			<div className='p-4 bg-gray-100 rounded-md '>{renderStepContent()}</div>
		</div>
	);
};

export default StepsX;
