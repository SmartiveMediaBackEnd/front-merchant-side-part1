import { useCallback, useState } from "react";

export default function useStepNavigator() {
	const [activeStep, setActiveStep] = useState(0);

	const goNext = useCallback(() => {
		setActiveStep((prevStep) => prevStep + 1);
	}, []);

	const goPrevious = useCallback(() => {
		setActiveStep((prevStep) => prevStep - 1);
	}, []);

	return {
		goNext,
		goPrevious,
		activeStep,
		setActiveStep,
	};
}