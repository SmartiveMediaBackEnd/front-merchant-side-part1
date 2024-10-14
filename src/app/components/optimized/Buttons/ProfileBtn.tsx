import { getImageUrl } from 'src/app/utils';
import ManageAccountCard from '../Cards/ManageAccountCard';

import PopoverComponent from '../UiKits/Popover';
import { useState } from 'react';

const ProfileBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<PopoverComponent
			close
			button={
				<div className='roundedParentIcon'>
					<img src={getImageUrl('images/profile.png')} alt='logo' className='object-cover h-full' />
				</div>
			}
		>
			<ManageAccountCard onClose={() => setShow(false)} />
		</PopoverComponent>
	);
};

export default ProfileBtn;
