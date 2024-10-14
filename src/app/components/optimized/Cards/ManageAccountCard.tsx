import { IoAddCircle } from 'react-icons/io5';
import { LogoutIcon, Person } from 'src/app/utils/icons';
import useLanguage from '../../../utils/hooks/useLanguage';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import CollapsibleSection from './ManagementCards/CollapsibleSection';
import CopyableSection from './ManagementCards/CopyableSection';
import Collapsible from './ManagementCards/Collapsible';
import { useClickOutsideWithId } from 'src/app/utils';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import toast, { Renderable, Toast, ValueFunction } from 'react-hot-toast';
import { useMutation } from 'react-query';
import { AuthApi } from 'src/app/React-Query/authApi';
import { useDispatch } from 'react-redux';
import { persistor } from 'src/app/store';
const ManageAccountCard = ({ menu, onClose }: { menu?: boolean; onClose?: () => void }) => {
	const { language } = useLanguage();

	const { t } = useTranslation();
	const id = 'ManageAccount-card';
	const dispatch = useDispatch();
	useClickOutsideWithId(id, onClose || (() => { }));

	//  handel logout action with api
	const { mutate, isLoading, error } = useMutation('log-out', AuthApi.logout);
	const handelLogout = () => {
		mutate(undefined, {
			onSuccess: async (response: {
				data: { message: Renderable | ValueFunction<Renderable, Toast> };
			}) => {
				toast.success(response?.data?.message);
			},
			onError: PublicHandlingErrors.onErrorResponse,
		});
		localStorage.removeItem('token');
		localStorage.removeItem('domain');
		localStorage.removeItem('email');
		localStorage.removeItem('language');
		localStorage.removeItem('_persist');
		persistor.flush();
		// dispatch(clearPersistedState());
		window.location.href = '/login';
	};
	return (
		<div
			id={id}
			className={`${menu ? 'w-full bg-light-2' : 'bg-white min-w-64 pt-3 pb-5 shadow-lg'} ${language === 'ar'
				? 'rounded-tr-md rounded-br-md left-2'
				: 'rounded-tl-md rounded-bl-md right-2'
				} `}
		>
			<div className='p-4 flex justify-between items-center'>
				<div className='flex gap-3 items-center'>
					<Person />
					<h2 className='text-sm text-title'>{t('Manage account')}</h2>
				</div>
				{!menu && <IoCloseCircleOutline onClick={onClose} className='text-lg cursor-pointer' />}
			</div>
			<hr />

			<div className='flex justify-between p-4'>
				<h3 className='font-semibold text-title text-sm'>{t('Stores')}</h3>
				<IoAddCircle size={18} className='cursor-pointer text-title' />
			</div>

			<CopyableSection content='content------------' />

			<hr />
			<Collapsible />

			<hr />
			<CollapsibleSection />

			<hr />
			<div className='p-4 text-title'>
				<div onClick={handelLogout} className='flex gap-3 items-center cursor-pointer'>
					<LogoutIcon />
					<h3 className='cursor-pointer'>{t('Sign Out')}</h3>
				</div>
			</div>
		</div>
	);
};

export default ManageAccountCard;
