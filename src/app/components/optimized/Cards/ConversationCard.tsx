import { IoCloseCircleOutline } from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { ClientBox, InputRow } from '..';
import { MoreIcon, VectorIcon } from 'src/app/utils/icons';
import useLanguage from '../../../utils/hooks/useLanguage';
import Avatar from '../UiKits/Avatar';
const ConversationCard = ({ onClose, showChat }: { onClose: () => void; showChat: boolean }) => {
	const { language } = useLanguage();
	return (
		<div className='fixed inset-0 z-30 '>
			{/* Overlay */}
			<div
				className={`fixed inset-0 transition duration-300 ease-in-out bg-black ${
					showChat ? 'opacity-50' : 'opacity-0'
				} `}
				onClick={onClose}
			/>
			<div
				className={`bg-white absolute h-screen w-1/4 transition duration-700 ease-in-out  ${
					showChat ? 'right-0' : '-right-96'
				} top-0 rounded-tl-lg`}
			>
				<div className='flex justify-between items-center p-3 border-b border-constrained'>
					<h3 className='text-title text-lg font-semibold flex items-center gap-2'>
						{language === 'ar' ? (
							<FaChevronRight className='text-sm cursor-pointer' />
						) : (
							<FaChevronLeft className='text-sm cursor-pointer' />
						)}
						chat
					</h3>
					<IoCloseCircleOutline className='text-pri-dark size-5 cursor-pointer' onClick={onClose} />
				</div>
				<div className='p-3 flex justify-between items-center border-b border-constrained cursor-pointer'>
					<ClientBox title='sid' avatar={<Avatar variant='user' firstName='dd' lastName='bb' />} />
					<MoreIcon />
				</div>
				{/* chat */}
				<ContainChat />

				{/* typing */}
				<div className='flex items-center gap-3 py-2 px-3'>
					<div className='w-full'>
						<InputRow placeholder={'Type your message'} />
					</div>
					<VectorIcon className='cursor-pointer' />
				</div>
			</div>
		</div>
	);
};

export default ConversationCard;

function ContainChat() {
	return (
		<div className='bg-light-3 h-[75%] p-5 text-sm '>
			<div dir='ltr'>
				<p
					className='bg-white relative text-title p-2 w-fit min-w-15 rounded-md 
				'
				>
					Hey, you just subscribed to my service, ready to take a meeting?
				</p>
				<span className='text-subtitle text-sm'>4:05 AM</span>
			</div>

			<div dir='rtl'>
				<p className='bg-primary text-white p-2 w-fit min-w-15 rounded-md text-left'>Sure</p>
				<span className='text-subtitle text-sm'>4:05 AM</span>
			</div>
		</div>
	);
}

// before:size-5 before:bg-red-700 before:left-0 before:top-0 before:absolute before:border-yellow-400 before:border-8
