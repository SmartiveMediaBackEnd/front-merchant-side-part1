import { IoCloseCircleOutline } from 'react-icons/io5';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import {
	CustomersIcon,
	OrdersIcon,
	ProductsIcon,
	SearchIcon,
	StoresIcon,
} from 'src/app/utils/icons';
import { InputRow } from '..';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LinkCards from './LinkCards';
import useLanguage from '../../../utils/hooks/useLanguage';
import Slider from '../UiKits/Slider';
import { slides } from 'src/pages/HomePage/HomePage';
import CalloutCard from './CalloutCard';
import { CustomSlider } from '../UiKits/CustomSlider';

const HelpCenterCard = ({
	onClose,
	menu,
	close,
}: {
	onClose?: () => void;
	menu?: boolean;
	close?: () => void;
}) => {
	const [searchValue, setSearchValue] = useState('');
	const { t } = useTranslation();
	const { language } = useLanguage();

	return (
		<div
			className={`bg-white ${
				menu ? 'w-full h-full' : 'w-[21rem] h-[32rem] shadow-lg overflow-hidden'
			} p-3 pb-5  z-30   ${
				language === 'ar'
					? 'rounded-tr-md rounded-br-md left-2'
					: 'rounded-tl-md rounded-bl-md right-2'
			} `}
			style={{ overflowY: 'auto' }}
		>
			<div className='flex-col-global h-full justify-between'>
				<div className='flex-col-global gap-4'>
					<div className='flex justify-between items-center'>
						<h3 className='title'>{t('Help center')}</h3>
						<IoCloseCircleOutline
							onClick={onClose}
							className='text-pri-dark size-5 cursor-pointer'
						/>
					</div>
					<InputRow
						leftIcon={<SearchIcon className='fill-hint' />}
						placeholder={t('Search')}
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					{/* link cards */}
					<div>
						<h4 className='title'>{t('Get started')}</h4>
						<div className='grid grid-cols-2 gap-2 mt-4'>
							<LinkCards
								path='/store'
								Icon={StoresIcon}
								title={t('Creating store')}
								close={close}
							/>
							<LinkCards path='/products' Icon={ProductsIcon} title={t('Products')} close={close} />
							<LinkCards path='/orders' Icon={OrdersIcon} title={t('Orders')} close={close} />
							<LinkCards
								path='/customers'
								Icon={CustomersIcon}
								title={t('Customers')}
								close={close}
							/>
						</div>
					</div>
					{/* slider videos */}
					<div>
						{/* <Slider size='mini' slides={slides} title={t('Video tutorials')} /> */}
						<CustomSlider
							slides={slides}
							title={t('Video tutorials')}
							SlideComponent={CalloutCard}
						/>
					</div>
				</div>

				{/* contact */}
				<div className='flex justify-between items-center pb-5'>
					<h4>{t('Contact Us')}</h4>
					<button onClick={() => console.log('aa')}>
						{language === 'ar' ? (
							<FaAngleLeft className='text-title' />
						) : (
							<FaAngleRight className='text-title' />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default HelpCenterCard;
