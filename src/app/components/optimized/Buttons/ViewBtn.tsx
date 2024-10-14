import { ViewIcon } from 'src/app/utils/icons';
import ManageAccountCard from '../Cards/ManageAccountCard';

import PopoverComponent from '../UiKits/Popover';
/**
 * ViewBtn component represents a button that, when clicked, displays a view icon
 * and opens the manage account card when clicked.
 */
const ViewBtn = () => {
	return (
		<PopoverComponent
			button={
				<>
					<p className='roundedParentIcon'>
						<ViewIcon />
					</p>
				</>
			}
		>
			<ManageAccountCard />
		</PopoverComponent>
	);
};

export default ViewBtn;
