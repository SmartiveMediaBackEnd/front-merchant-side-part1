import React, { useEffect, useState } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';

interface State {
	run: boolean;
	steps: Step[];
}

function logGroup(type: string, data: any) {
	// console.groupCollapsed(type);
	// console.log(data);
	// console.groupEnd();
}
const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	return (
		<div className='flex items-center justify-center text-white h-screen px-4 py-8' {...props} />
	);
};

export default function BasicDemo() {
	const [state, setState] = useState<State>({
		run: false,
		steps: [
			{
				content: <h2>Let's begin our journey!</h2>,
				locale: { skip: <strong aria-label='skip'>S-K-I-P</strong> },
				placement: 'center',
				target: 'body',
			},
			{
				content: <h2>Sticky elements</h2>,
				floaterProps: {
					disableAnimation: true,
				},
				spotlightPadding: 10,
				target: '.star-burst',
			},
			{
				content: 'These are our super awesome projects!',
				placement: 'bottom',
				styles: {
					options: {
						width: 300,
					},
				},
				target: '.demo__projects h2',
				title: 'Our projects',
			},
			{
				content: (
					<div>
						You can render anything!
						<br />
						<h3>Like this H3 title</h3>
					</div>
				),
				placement: 'top',
				target: '.demo__how-it-works h2',
				title: 'Our Mission',
			},
			{
				content: (
					<div>
						<h3>All about us</h3>
					</div>
				),
				placement: 'left',
				target: '.demo__about h2',
			},
		],
	});

	useEffect(() => {
		// a11yChecker();
		// If you need to replace the a11y-checker functionality, you can do it here.
	}, []);

	const handleClickStart = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setState((prevState) => ({ ...prevState, run: true }));
	};

	const handleJoyrideCallback = (data: CallBackProps) => {
		const { status, type } = data;
		const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

		if (finishedStatuses.includes(status)) {
			setState((prevState) => ({ ...prevState, run: false }));
		}

		logGroup(type, data);
	};

	return (
		<div className='min-h-screen'>
			<Joyride
				callback={handleJoyrideCallback}
				continuous
				run={state.run}
				scrollToFirstStep
				showProgress
				showSkipButton
				steps={state.steps}
				styles={{
					options: {
						zIndex: 10000,
					},
				}}
			/>
			<Section className='bg-red-500 demo__hero'>
				<div className='flex flex-col items-center text-white max-w-xl'>
					<div className='size-60 bg-black star-burst'>V2</div>

					<p className='text-center'>Create guided tours for your apps</p>
					<hr className='my-8 w-full border-white' />
					<button className='bg-white text-black py-2 px-4 rounded-lg' onClick={handleClickStart}>
						Start
					</button>
				</div>
			</Section>
			<div className='bg-orange-500 demo__projects justify-start flex items-center  text-white h-screen px-4 py-8'>
				<h2>OUR PROJECTS</h2>
			</div>
			<div className='bg-green demo__how-it-works justify-start flex items-center  text-white h-screen px-4 py-8'>
				<h2>HOW DOES IT WORK</h2>
			</div>
			<div className='bg-blue demo__about justify-start flex items-center  text-white h-screen px-4 py-8'>
				<h2>ABOUT US</h2>
			</div>
		</div>
	);
}
