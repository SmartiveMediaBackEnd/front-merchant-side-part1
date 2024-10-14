import { EditIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';
import useResponsive from 'src/app/utils/hooks/useResponsive';

interface Props {
	onClick: () => void;
}
export default function EditButtonMobile({ onClick }: Props) {
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const handleClick = () => {
		onClick();
	};
	return (
		xs && (
			<div className="flex-row-global  justify-center">
				<button
					onClick={handleClick}
					className='flex justify-center items-center gap-2 w-24 h-12 bg-white rounded border border-light-2   shadow'
				>
					<EditIcon className='fill-pri-dark' />
					<p className='title'>{t('Edit')}</p>
				</button>
			</div>
		)
	);
}
// Usage Example
// const { xs } = useResponsive();
// {xs && <EditButtonMobile onClick={} />}
// or
// {xs && <EditButtonMobile path='' />}
