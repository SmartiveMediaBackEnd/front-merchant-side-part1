import { useMediaQuery } from 'react-responsive';
import React, { useState } from 'react';

import Header from 'src/app/components/main/Header';
import Sidebar from 'src/app/components/main/Sidebar';
import SidebarMob from 'src/app/components/main/SidebarMob';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
	const isMobile = useMediaQuery({ maxWidth: 599 }); // for mobile . there in Header.tsx
	const isDesktop = useMediaQuery({ minWidth: 599 }); // for desktop
	
	const sidebarOpenHandler = () => {
		setSidebarIsOpen((prevState) => !prevState);
	};

	return (
		<div className='relative'>
			{isDesktop && (
				<div className='flex flex-row'>
					<div>
						<Sidebar isOpen={sidebarIsOpen} />
					</div>
					<div className='w-full bg-light-1'>
						<div className='sticky top-0 z-30'>
							<Header setIsOpen={sidebarOpenHandler} />
						</div>
						<main className='pb-5'>{children}</main>
					</div>
				</div>
			)}
			{isMobile && (
				<div className='w-full bg-light-1'>
					<div className='sticky top-0 z-50 md:h-20'>
						<Header setIsOpen={sidebarOpenHandler} />
					</div>
					<main className='pb-[6rem]'>{children}</main>
					<div className='fixed bottom-0 bg-white w-full z-50'>
						<SidebarMob />
					</div>
				</div>
			)}
		</div>
	);
};
export default RootLayout;
