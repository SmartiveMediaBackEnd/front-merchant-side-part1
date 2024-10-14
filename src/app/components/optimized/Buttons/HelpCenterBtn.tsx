import { FaqIcon } from 'src/app/utils/icons';
import HelpCenterCard from '../Cards/HelpCenterCard';

import { useState } from 'react';
import PopoverComponent from '../UiKits/Popover';

/**
 * HelpCenterBtn component represents a button that, when clicked, displays a FAQ icon
 * and opens the help center card when clicked.
 */
const HelpCenterBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<PopoverComponent
			
			button={
				<>
					<span className='roundedParentIcon'>
						<FaqIcon />
					</span>
				</>
			}
		>
			<HelpCenterCard onClose={() => setShow(true)} />
		</PopoverComponent>
	);
};

export default HelpCenterBtn;
