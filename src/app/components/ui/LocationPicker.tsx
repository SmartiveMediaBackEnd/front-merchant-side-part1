import useLanguage from 'src/app/utils/hooks/useLanguage';
import { Input } from './input';
import GoogleMapComponent from './GoogleMapComponent';
import FormField from './form/field';
import { AddIcon, LocationIcon } from 'src/app/utils/icons';
import { FiMinus } from 'react-icons/fi';
import { getImageUrl } from 'src/app/utils';
import { Button } from '../optimized';
import { useTranslation } from 'react-i18next';

export default function LocationPicker({ formStore, setLocationEnabled, setDisablePickButton }) {
	const { language } = useLanguage();
	const { t } = useTranslation();
	return (
		<div className='relative w-full h-[300px]'>
			<GoogleMapComponent
				setLocationEnabled={setLocationEnabled}
				setDisablePickButton={setDisablePickButton}
				height='300px'
			/>
			<div className='bg-white text-xs flex items-center w-fit shadow-md rounded-sm absolute top-2 left-2'>
				<p
					className={`text-title font-semibold p-2 ${
						language === 'ar' ? 'border-l' : 'border-r'
					} border-constrained`}
				>
					{t('Map')}
				</p>
				<p className='text-subtitle p-2'>{t('Satellite')}</p>
			</div>
			<div className='absolute md:top-2 md:left-[40%] md:inline hidden'>
				<FormField
					formStore={formStore}
					name='search'
					render={(field) => <Input {...field} placeholder={t('Search')} />}
				/>
			</div>
			<div className='flex flex-col items-end justify-between h-full'>
				<div className='flex flex-col gap-2 items-end absolute top-2 right-2'>
					<div className='flex flex-col gap-1.5 items-center bg-white p-1 shadow-md w-fit rounded-sm'>
						<AddIcon className='fill-grayIcon border-b border-hint' />
						<FiMinus color='#666666' />
					</div>
					<div className='bg-white flex items-center justify-center px-2 py-1 w-fit shadow-md rounded-sm'>
						<img src={getImageUrl('map.svg')} alt='Map Icon' />
					</div>
				</div>
				<Button
					variant='secondary'
					LeftIcon={LocationIcon}
					className='bg-white absolute bottom-2 right-2'
				>
					<span className='hidden md:inline'>{t('Locate Me')}</span>
				</Button>
			</div>
		</div>
	);
}
