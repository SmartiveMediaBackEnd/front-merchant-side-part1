import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../Buttons/Button';
import { RxDotsHorizontal } from 'react-icons/rx';
import useResponsive from 'src/app/utils/hooks/useResponsive';

const SubHeaderActionBtns = ({
	onSubmit,
	isLoading,
}: {
	onSubmit: () => void;
	isLoading?: boolean;
}) => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<>
			<Button type="button" variant='secondary' onClick={() => navigate(-1)}>
				{t('Discard')}
			</Button>
			<Button loading={isLoading} variant='primary' onClick={onSubmit}>
				{t('Save Changes')}
			</Button>
		</>
	);
};

export default SubHeaderActionBtns;

export const SubHeaderDefaultBtns = ({
	onSubmit,
	isLoading,
}: {
	onSubmit: () => void;
	isLoading?: boolean;
}) => {
	const { xs } = useResponsive();

	return (
		<>
			{!xs ? (
				<SubHeaderActionBtns isLoading={isLoading} onSubmit={onSubmit} />
			) : (
				<RxDotsHorizontal />
			)}
		</>
	);
};
export const SubHeaderMobileBtns = ({
	onSubmit,
	isLoading,
}: {
	onSubmit: () => void;
	isLoading?: boolean;
}) => {
	const { xs } = useResponsive();

	return (
		<>
			{xs && (
				<div className='flex-btn-end'>
					<SubHeaderActionBtns isLoading={isLoading} onSubmit={onSubmit} />
				</div>
			)}
		</>
	);
};
