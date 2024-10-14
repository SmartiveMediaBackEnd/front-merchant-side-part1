import { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import MenuSelect from '../../Menu/MenuSelect';

const CollapsibleSection = () => {
	const [show, setShow] = useState(false);
	const { language, toggleLanguage } = useLanguage();
	const sortMenus = [
		{
			id: 1,
			text: language === 'ar' ? 'English' : 'العربيه',
			onClick: toggleLanguage,
		},
	];
	return (
		<div className='flex justify-between p-4 relative'>
			<div className='flex gap-3 items-center text-title'>
				<TfiWorld size={24} />
				<h3>{language === 'ar' ? 'العربيه' : 'English'}</h3>
			</div>
			{language === 'ar' ? (
				<FaAngleLeft onClick={() => setShow(true)} className='cursor-pointer' />
			) : (
				<FaAngleRight onClick={() => setShow(true)} className='cursor-pointer' />
			)}
			{show && <MenuSelect options={sortMenus} />}
		</div>
	);
};
export default CollapsibleSection;
