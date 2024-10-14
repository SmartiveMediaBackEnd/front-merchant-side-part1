import { ReactNode, useEffect, useState } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import useLanguage from '../utils/hooks/useLanguage';

type Props = {
	children: ReactNode | ReactNode[];
};

function AnimatedRoutes({ children }: Props) {
	// hooks
	const { language } = useLanguage();
	// TRANSITION
	const [transitionStage, setTransitionStage] = useState('fadeIn');

	// CURRENT LOCATION
	const location = useLocation();
	const [displayLocation, setDisplayLocation] = useState(location);

	useEffect(() => {
		if (location !== displayLocation) {
			setTransitionStage('fadeOut');
		}
	}, [location, displayLocation]);

	return (
		<main
			dir={language === 'ar' ? 'rtl' : 'ltr'}
			className={`${transitionStage}`}
			onAnimationEnd={() => {
				if (transitionStage === 'fadeOut') {
					setTransitionStage('fadeIn');
					setDisplayLocation(location);
				}
			}}
		>
			<Routes location={displayLocation}>{children}</Routes>
		</main>
	);
}

export default AnimatedRoutes;
