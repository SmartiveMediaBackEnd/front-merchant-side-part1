import { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import useLanguage from 'src/app/utils/hooks/useLanguage';
const Collapsible = () => {
	const [show, setShow] = useState(false);
	const { language } = useLanguage();

	return (
		<div className='flex justify-between items-center p-4 relative'>
			<div>
				<h3 className='text-title'>Rasma</h3>
				<p className='text-sm text-subtitle'>Rasma.dookan.net</p>
			</div>
			{language === 'ar' ? (
				<FaAngleLeft onClick={() => setShow(true)} className='cursor-pointer' />
			) : (
				<FaAngleRight onClick={() => setShow(true)} className='cursor-pointer' />
			)}
			{/* {show && <MenuOption options={sortMenus} />} */}
		</div>
	);
};
export default Collapsible;
