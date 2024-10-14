import { useTranslation } from 'react-i18next';
import { HiExternalLink } from 'react-icons/hi';
import { Button } from '../..';
const ChangeCustomer = () => {
	const { t } = useTranslation();
	return (
		<div className='p-3 flex flex-col gap-2 items-start'>
			<div className='flex items-center gap-2'>
				<span className='text-subtitle text-sm'>1 Week ago</span>
				<button className='bran-sec-btn'>{t('New')}</button>
			</div>

			<p className='text-sm text-title'>Now you can change customer groups</p>

			<div className='flex items-center gap-3'>
				<button className='btn-pri'>{t('download app')}</button>
				<Button variant='link'>
					<span className='flex items-center gap-2'>
						{t('learn more')} <HiExternalLink />
					</span>
				</Button>
			</div>
		</div>
	);
};

export default ChangeCustomer;
