import useLanguage from 'src/app/utils/hooks/useLanguage';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function ArrowTables({ path }: { path?: string }) {
	const { language } = useLanguage();
	const navigate = useNavigate();
	return (
		<>
			{language === 'ar' ? (
				<IoIosArrowBack className='text-subtitle' onClick={() =>path && navigate(path)} />
			) : (
				<IoIosArrowForward className='text-subtitle' onClick={() =>path && navigate(path)} />
			)}
		</>
	);
}
