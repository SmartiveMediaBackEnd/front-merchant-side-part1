import { getImageUrl } from 'src/app/utils';
import { Button } from '../../optimized';

interface JoyrideStep {
	beaconComponent?: React.ElementType;
	floaterProps?: object;
	spotlightPadding?: number;
	placement?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'auto';
	title?: string;
	content: string;
	target: string;
	disableBeacon?: boolean;
	event?: 'click' | 'hover';
	styles?: object;
	image?: string;
	link?: string;
}
interface TourCardProps {
	index: number;
	step: JoyrideStep;
	backProps: object;
	closeProps: object;
	primaryProps: object;
	tooltipProps: object;
	size: number;
	isLastStep: boolean;
}

export default function TourCard({
	step,
	size,
	index,
	backProps,
	isLastStep,
	closeProps,
	primaryProps,
	tooltipProps,
}: TourCardProps) {
	const { image, content, link } = step;
	const stepNumber = index + 1;

	return (
		<div {...tooltipProps} className='w-80  p-3 global-cards flex flex-col justify-between'>
			<div className='flex justify-between items-start'>
				<div className='size-20 grid place-content-center border-light-2 border rounded-md'>
					{image && <img src={getImageUrl(image)} alt='icon' className='w-14' />}
				</div>
				{!isLastStep && <Button {...closeProps} variant='link' text='End tour' />}
			</div>
			<p className='paragraph'>
				{content}
				{link && <Button {...closeProps} variant='link' text='Learn More' />}
			</p>
			<div className='flex justify-between items-end'>
				<p className='subtitle'>
					{stepNumber}/{size}
				</p>
				<div className='gap-2 flex'>
					{stepNumber > 1 && <Button {...backProps} variant='tertiary' text='Back' />}
					<Button {...primaryProps} variant='primary' text={isLastStep ? 'Finish' : 'Next'} />
				</div>
			</div>
		</div>
	);
}
