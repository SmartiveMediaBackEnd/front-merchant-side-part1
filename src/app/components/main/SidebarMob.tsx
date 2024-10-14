import { useState } from 'react';
import { getImageUrl } from 'src/app/utils';
import { IoClose } from 'react-icons/io5';
import ContainLinks from './comp/ContainLinks';
import Profile from './comp/Profile';
import ChatCard from '../optimized/Cards/ChatCard';
import HelpCenterCard from '../optimized/Cards/HelpCenterCard';

export default function SidebarMob() {
	const [openMore, setOpenMore] = useState(false);
	const [openChat, setOpenChat] = useState(false);
	const [openHelpCenter, setOpenHelpCenter] = useState(false);

	
	return (
		<>
			{openMore ? (
				<aside className='h-full z-50 bg-white fixed top-0 left-0 right-0 overflow-y-auto'>
					<header className='flex items-center justify-between p-4 z-50'>
						<div className=''>
							<img src={getImageUrl('brand/en-light.svg')} alt='logo' className='w-32 ' />
						</div>
						<IoClose
							size={24}
							color='#032C58'
							onClick={() => setOpenMore(false)}
							className='cursor-pointer'
						/>
					</header>
					<Profile />
					<ContainLinks
						close={() => setOpenMore(false)}
						list={true}
						openHelpCenter={() => setOpenHelpCenter(true)}
					/>
				</aside>
			) : (
				<ContainLinks openMore={() => setOpenMore(true)} openChat={() => setOpenChat(true)} />
			)}

			{openChat && (
				<aside className='h-full z-50 bg-white fixed top-0 left-0 right-0 overflow-y-auto'>
					<ChatCard onClose={() => setOpenChat(false)} menu={true} />
				</aside>
			)}
			{openHelpCenter && (
				<aside className='h-full z-50 bg-white fixed top-0 left-0 right-0 overflow-y-auto'>
					<HelpCenterCard
						onClose={() => setOpenHelpCenter(false)}
						menu={true}
						close={() => setOpenMore(false)}
					/>
				</aside>
			)}
		</>
	);
}
