import { useTranslation } from 'react-i18next';
import { HiExternalLink } from 'react-icons/hi';
import { Button } from '../..';

const Abandoned = () => {
	const { t } = useTranslation();
	return (
		<div className='p-3 flex flex-col gap-2 items-start'>
			<div className='flex items-center gap-2'>
				<span className='text-subtitle text-sm'>Yesterday</span>
				<button className='bran-sec-btn'>{t('New')}</button>
			</div>

			<p className='text-sm text-title'>Abandoned cart is here</p>
			<p className='text-xs text-subtitle leading-relaxed'>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
				consequat duis enim velit mollit. Exercitation veniam consequat sunt to kd fgsdf Learn more
			</p>

			<Button variant='link'>
				<span className='flex items-center gap-2'>
					{t('learn more')} <HiExternalLink />
				</span>
			</Button>
		</div>
	);
};

export default Abandoned;
