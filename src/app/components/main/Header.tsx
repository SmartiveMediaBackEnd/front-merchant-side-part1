import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavIcon, SearchIcon } from 'src/app/utils/icons';
import { GoSearch } from 'react-icons/go';
import HelpCenterBtn from '../optimized/Buttons/HelpCenterBtn';
import ViewBtn from '../optimized/Buttons/ViewBtn';
import ChatBtn from '../optimized/Buttons/ChatBtn';
import NotificationBtn from '../optimized/Buttons/NotificationBtn';
import ProfileBtn from '../optimized/Buttons/ProfileBtn';
import HeaderLoading from '../optimized/SchimmerLoading/HeaderLoading';
import SearchBtn from '../optimized/Buttons/SearchBtn';
import { getImageUrl } from 'src/app/utils';
import { useMediaQuery } from 'react-responsive';
import useResponsive from 'src/app/utils/hooks/useResponsive';
// -------------------------------------------------------------------------------------

// // Lazy-loaded components
// const HelpCenterBtn = lazy(() => import('../optimized/Buttons/HelpCenterBtn'));
// const ViewBtn = lazy(() => import('../optimized/Buttons/ViewBtn'));
// const ChatBtn = lazy(() => import('../optimized/Buttons/ChatBtn'));
// const NotificationBtn = lazy(() => import('../optimized/Buttons/NotificationBtn'));
// const ProfileBtn = lazy(() => import('../optimized/Buttons/ProfileBtn'));
// const HeaderLoading = lazy(() => import('../optimized/SchimmerLoading/HeaderLoading'));
// const SearchBtn = lazy(() => import('../optimized/Buttons/SearchBtn'));
// -------------------------------------------------------------------------------------
const Header = ({ setIsOpen }: { setIsOpen: () => void }) => {
	//  hooks
	const [showLoading, setShowLoading] = useState(true);
	const { pathname } = useLocation();
	const { t } = useTranslation();
	let activeModule = '';
	const isMobile = useMediaQuery({ maxWidth: 525 });

	// loading header
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);
	const modules = [
		{ path: '/', name: t('Home') },
		{ path: 'products', name: t('Products') },
		{ path: 'orders', name: t('Orders') },
		{ path: 'customers', name: t('Customers') },
		{ path: 'analytics', name: t('Analytics') },
		{ path: 'reviews', name: t('Reviews') },
		{ path: 'pages', name: t('Pages') },
		{ path: 'marketing', name: t('Marketing') },
		{ path: 'apps', name: t('Apps') },
		{ path: 'services', name: t('Services') },
		{ path: 'settings', name: t('Settings') },
		{ path: 'store', name: t('Store') },
	];
	modules.forEach((module) => {
		if (pathname.startsWith(`/${module.path}`) || pathname === `${module.path}`) {
			activeModule = module.name;
		}
	});

	return (
		<Suspense fallback={<HeaderLoading />}>
			{/* {showLoading ? (
				<HeaderLoading />
			) : ( */}
			<div className='h-[70px] px-4 flex justify-between items-center mx-auto bg-white z-40'>
				<div className='flex items-center gap-3'>
					<button className='max-lg:hidden' onClick={setIsOpen}>
						<NavIcon className='fill-pri-dark' />
					</button>
					{isMobile && (
						<div>
							<img src={getImageUrl('brand/cloud.svg')} alt='logo' className={`w-8`} />
						</div>
					)}

					<h2 className='title text-lg font-semibold'>{activeModule}</h2>
				</div>

				{pathname === '/' && (
					<div className='hidden lg:flex'>
						<HeaderSearchBar />
					</div>
				)}

				<ProfileInfo />
			</div>
			{/* )} */}
		</Suspense>
	);
};

export default Header;

// HeaderSearchBar
function HeaderSearchBar() {
	const { t } = useTranslation();
	const [selectedCategory, setSelectedCategory] = useState('products');
	const [searchTerm, setSearchTerm] = useState('');

	const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCategory(event.target.value);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSearchTerm(event.target.value);
	};

	const options = [
		{ value: 'products', label: t('Products') },
		{ value: 'orders', label: t('Orders') },
		{ value: 'customers', label: t('Customers') },
		{ value: 'analytics', label: t('Analytics') },
	];

	return (
		<div className='relative flex items-center xl:w-[550px] h-10 rounded-md border py-6'>
			<input
				className='xl:w-full pl-12 pr-3 py-2 text-sm bg-transparent border border-transparent focus:outline-none '
				placeholder='Search on products or customers or orders...'
				value={searchTerm}
				onChange={handleInputChange}
			/>

			<span className='absolute left-3 top-3 '>
				<GoSearch size={24} color='gray' style={{ transform: 'rotate(90deg)' }} />
			</span>

			<select
				className='p-[0.840rem] text-sm text-primary cursor-pointer bg-constrained outline-none '
				value={selectedCategory}
				onChange={handleCategoryChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>

			<button
				type='button'
				className='py-[0.800rem] w-12 xl:w-20 flex justify-center items-center rounded-r-md bg-primary focus:outline-none'
			>
				<GoSearch size={24} color='white' style={{ transform: 'rotate(90deg)' }} />
			</button>
		</div>
	);
}

// ProfileInfo
const ProfileInfo = () => {
	const { xs } = useResponsive();
	return xs ? (
		<div className='flex-row-global gap-5  items-center '>
			<SearchBtn />
			<ViewBtn />
			<NotificationBtn />
		</div>
	) : (
		<div className='flex-row-global gap-5 items-center'>
			<HelpCenterBtn />
			<ViewBtn />
			<ChatBtn />
			<NotificationBtn />
			<ProfileBtn />
		</div>
	);
};
