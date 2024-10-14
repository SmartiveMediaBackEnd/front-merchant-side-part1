import { NotifiIcon } from 'src/app/utils/icons';
import NotificationsCard from '../Cards/NotificationsCard';

import PopoverComponent from '../UiKits/Popover';

/**
 * NotificationBtn component represents a button that, when clicked, displays a notification icon
 * and opens the notifications card when clicked.
 */
const NotificationBtn = () => {
	return (
		<PopoverComponent
			button={
				<>
					<p className='roundedParentIcon relative'>
						<span className='absolute p-1 rounded-full bg-error top-1 right-1'></span>
						<NotifiIcon />
					</p>
				</>
			}
		>
			<NotificationsCard />
		</PopoverComponent>
	);
};

export default NotificationBtn;
