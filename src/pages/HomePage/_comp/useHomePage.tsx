import { useEffect, useState } from 'react';

import { CallBackProps } from 'react-joyride';
export function useHomePage() {
	const [showLoading, setShowLoading] = useState(true);
	const [isSetup, setIsSetup] = useState(false);
	const [run, setRun] = useState(true);

	const startTour = () => {
		setRun(true);
	};
	const handleJoyrideCallback = (data: CallBackProps) => {
		if (data.status === 'finished' || data.status === 'skipped') {
			setRun(false);
		}
	};
	const handleSetup = () => {
		setIsSetup(true);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false);
		}, 50);
		return () => clearTimeout(timer);
	}, []);

	return { showLoading, startTour, handleSetup, handleJoyrideCallback, run, isSetup };
}
