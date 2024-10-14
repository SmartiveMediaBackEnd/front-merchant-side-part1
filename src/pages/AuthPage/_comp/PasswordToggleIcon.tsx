import { UnSeeIcon, ViewIcon } from 'src/app/utils/icons';
import useLanguage from 'src/app/utils/hooks/useLanguage';

export default function PasswordToggleIcon({
	toggle,
	isVisible,
}: {
	toggle: () => void;
	isVisible: boolean;
}) {
	const { language } = useLanguage();

	return (
		<button
			type='button'
			className={`absolute top-1/2 -translate-y-1/2 ${language === 'ar' ? 'left-3' : 'right-3'}`}
			onClick={toggle}
		>
			{isVisible ? <ViewIcon className='fill-pri-dark' /> : <UnSeeIcon className='fill-pri-dark' />}
		</button>
	);
}
