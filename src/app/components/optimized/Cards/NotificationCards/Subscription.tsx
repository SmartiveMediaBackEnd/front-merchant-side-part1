import { useTranslation } from 'react-i18next';
import { HiExternalLink } from 'react-icons/hi';
import { Button } from '../..';

const Subscription = () => {
	const { t } = useTranslation();
	return (
		<div className='p-3 flex flex-col gap-2 items-start'>
			<span className='text-subtitle text-sm'>last Week</span>
			<p className='text-sm text-title'>Your subscription is about to end</p>

			<div className='flex items-center gap-3'>
				<button className='btn-pri'>{t('update payment')}</button>
				<Button variant='link'>
					<span className='flex items-center gap-2'>
						{t('learn more')} <HiExternalLink />
					</span>
				</Button>
			</div>
		</div>
	);
};

export default Subscription;
