import { CheckIcon } from 'src/app/utils/icons';

export default function Steps({ stepsContent, currentStep, setCurrentStep }) {
	const renderStepContent = () => {
		const StepContent = stepsContent[currentStep - 1];
		return StepContent;
	};

	return (
		<div className='flex flex-col space-y-4'>
			<div className='flex justify-between'>
				<div className='flex space-x-1'>
					<InternalStepper
						currentStep={currentStep}
						stepsLength={stepsContent.length}
						setCurrentStep={setCurrentStep}
					/>
				</div>
			</div>
			<div className='p-4 bg-gray-100 rounded-md '>{renderStepContent()}</div>
		</div>
	);
}

interface InternalStepperProps {
	currentStep: number;
	stepsLength: number;
	setCurrentStep: (step: number) => void;
}

// export default
function InternalStepper({ currentStep, stepsLength, setCurrentStep }: InternalStepperProps) {
	const renderStep = (index: number) => {
		const stepNumber = index + 1;
		const isActive = index + 1 === currentStep;
		const isCompleted = index + 1 < currentStep;
		const baseClasses = 'w-9 h-5 flex items-center justify-center rounded-sm border';
		const handleClick = () => {
			if (isCompleted) {
				setCurrentStep(stepNumber);
			}
		};
		return (
			<button
				key={index}
				className={`${baseClasses}
          ${
						isActive
							? 'bg-primary border-transparent'
							: isCompleted
							? 'bg-white border-primary'
							: 'bg-white border-hint'
					}`}
				onClick={handleClick}
			>
				{isCompleted && !isActive && <CheckIcon className='fill-primary' />}
			</button>
		);
	};

	return (
		<div className='flex gap-2'>
			{Array.from({ length: stepsLength }).map((_, index) => renderStep(index))}
		</div>
	);
}
