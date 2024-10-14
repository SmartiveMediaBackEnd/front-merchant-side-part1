import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';

interface Props {
	isOpen: boolean;
	toggleSidebar: () => void;
	children: ReactNode;
	header: string;
}

const RightSidebar: React.FC<Props> = ({ isOpen, toggleSidebar, children, header }) => {
	return createPortal(
		<>
			{/* Sidebar */}
			<div
				className={`fixed top-0 right-0 h-full z-30 bg-gray-900  transition-transform duration-300 transform w-96 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				{/* Sidebar Content */}
				<div className='h-full bg-white overflow-auto'>
					{/* Sidebar content */}
					<div className='flex justify-between items-center border-b py-4 p-5'>
						<h2 className='text-xl font-bold'>{header}</h2>
						<button onClick={toggleSidebar}>
							<IoMdCloseCircleOutline size={24} />
						</button>
					</div>

					{/* Children content */}

					{children}
				</div>
			</div>

			{/* Overlay */}
			{isOpen && (
				<div className='fixed inset-0 bg-blue-200 opacity-50 z-30' onClick={toggleSidebar} />
			)}
		</>,
		document.body,
	);
};

export default RightSidebar;
