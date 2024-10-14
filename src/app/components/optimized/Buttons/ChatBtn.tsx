import { ChatIcon } from 'src/app/utils/icons';
import ChatCard from '../Cards/ChatCard';
import Button from '@mui/material/Button';
import PopoverComponent from '../UiKits/Popover';
import { useState } from 'react';

const ChatBtn = () => {
	const [show, setShow] = useState(false);
	return (
		<PopoverComponent
			close
			button={
				<>
					<Button>
						<p className='rounded-lg border border-light-2 size-[42px] grid place-content-center relative'>
							<span className='absolute p-1 rounded-full bg-error top-1 right-1'></span>
							<ChatIcon />
						</p>
					</Button>
				</>
			}
		>
			<ChatCard close={() => setShow(!show)} />
		</PopoverComponent>
	);
};

export default ChatBtn;
