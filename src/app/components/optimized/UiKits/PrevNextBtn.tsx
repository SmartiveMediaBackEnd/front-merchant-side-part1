import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import useLanguage from '../../../utils/hooks/useLanguage';
export default function PrevNextBtn({
	onClickPrev,
	onClickNext,
}: {
	onClickPrev?: () => void;
	onClickNext?: () => void;
}) {
	const { language } = useLanguage();
	const borderStyle = 'flex items-center justify-center w-full border border-pri-dark';
	return (
		<div className='flex w-[67px] h-[34px]'>
			<button
				onClick={onClickPrev}
				className={` ${borderStyle} ${language === 'ar' ? 'rounded-r' : 'rounded-l'}`}
			>
				{language === 'ar' ? (
					<RiArrowRightSLine color='#032C58' />
				) : (
					<RiArrowLeftSLine color='#032C58' />
				)}
			</button>
			<button
				onClick={onClickNext}
				className={` ${borderStyle} ${language === 'ar' ? 'rounded-l' : 'rounded-r'}`}
			>
				{language === 'ar' ? (
					<RiArrowLeftSLine color='#032C58' />
				) : (
					<RiArrowRightSLine color='#032C58' />
				)}
			</button>
		</div>
	);
}
