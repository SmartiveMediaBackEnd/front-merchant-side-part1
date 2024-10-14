// import SidebarLoading from '../optimized/SchimmerLoading/SidebarLoading';
// ----------------------------------------------------------------
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getImageUrl } from 'src/app/utils';
import { sidebarLinks, socialLinks } from 'src/app/utils/constants';

// Lazy-loaded component
const SidebarLoading = lazy(() => import('../optimized/SchimmerLoading/SidebarLoading'));

// ----------------------------------------------------------------

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
	//  hooks

	const { t } = useTranslation();

	return (
		<Suspense fallback={<SidebarLoading />}>
			<aside
				className={`min-h-screen h-full duration-200 transition-all max-lg:min-w-16 max-lg:w-16 px-2 py-3 bg-white ${isOpen ? 'w-[180px]' : 'w-16 min-w-16'
					}`}
			>
				<div className='sticky top-3 overflow-hidden '>
					<header className=' h-[42px]'>
						<div
							className={`w-[162px] rounded-lg h-full shadow-[0px_5px_15px_0px_#7C82B90D] max-lg:hidden place-content-center grid ${!isOpen ? 'hidden' : ''
								}`}
						>
							<img
								src={getImageUrl('brand/en-light.svg')}
								alt='logo'
								className={`w-32 max-lg:hidden `}
							/>
						</div>

						<div
							className={`max-lg:grid place-content-center grid h-full ${isOpen ? 'hidden' : 'grid'
								} `}
						>
							<img src={getImageUrl('brand/cloud.svg')} alt='logo' className={`w-9`} />
						</div>
					</header>
					<SidebarNavLinks isOpen={isOpen} />

					{/* <div className='px-2 max-lg:p-1'>
						<p className={`paragraph text-subtitle mb-2 max-lg:hidden ${!isOpen ? 'hidden' : ''}`}>
							{t('Sales channel')}
						</p>
						<div
							className={`grid max-lg:grid-cols-1 gap-2 ${!isOpen ? 'grid-cols-1' : 'grid-cols-3'}`}
						>
							{socialLinks.map((link) => (
								<Link
									key={link.id}
									className={`w-10 h-10 hover:border-primary focus:border-primary focus:bg-pri-light/50 max-lg:border-0 border border-borders-lines rounded-xl grid place-content-center ${
										!isOpen ? 'border-0' : ''
									} `}
								>
									<img src={link.img} alt='social' className='w-6 h-6' />
								</Link>
							))}
						</div>
					</div> */}
				</div>
			</aside>
		</Suspense>
	);
};

export default Sidebar;

// SidebarNavLinks
const SidebarNavLinks = ({ isOpen }: { isOpen?: boolean }) => {
	return (
		<nav className='my-4 w-full'>
			<ul className='flex gap-2 flex-col'>
				{sidebarLinks.map((link) => (
					<li key={link.id}>
						<SidebarLink {...link} isOpen={isOpen} />
					</li>
				))}
			</ul>
		</nav>
	);
};

// SidebarLink
const SidebarLink = ({
	Icon,
	name,
	path,
	isOpen,
}: {
	Icon: React.ReactNode;
	name: string;
	path: string;
	isOpen?: boolean;
}) => {
	//  hooks
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const isActive = pathname === path || location.pathname.startsWith(`/${path}`);
	// ${({ isActive }) => (isActive ? 'active' : '')}

	return (
		<NavLink
			to={path}
			className={`${isActive ? 'active' : ''}
      hover:bg-pri-light relative w-full px-1 py-[3px] flex items-center gap-2 duration-300 transition-all group rounded-lg max-lg:justify-center max-lg:hover:bg-transparent max-lg:bg-transparent ${!isOpen ? 'justify-center bg-transparent hover:bg-transparent' : ''
				} `}
			end
		>
			<div
				className={`rounded-lg size-[30px] duration-300 grid place-content-center transition-all max-lg:bg-transparent group-[.active]:bg-white ${!isOpen ? 'bg-transparent' : ''
					}`}
			>
				<Icon className='fill-hint duration-300 transition-all  group-[.active]:fill-primary  group-hover:fill-primary ' />
			</div>
			<p
				className={`paragraph text-subtitle  group-hover:text-primary max-lg:hidden group-[.active]:font-semibold group-[.active]:text-primary group-[.active]:title ${!isOpen ? 'hidden' : ''
					}`}
			>
				{t(name as any)}
			</p>
			<span
				className={`absolute rounded-full right-0 h-0 w-[3px] bg-primary group-[.active]:h-[30px] duration-300 transition-all ${!isOpen ? 'block' : 'lg:hidden'
					}`}
			></span>
		</NavLink>
	);
};
