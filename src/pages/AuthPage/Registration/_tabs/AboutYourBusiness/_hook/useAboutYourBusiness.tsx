import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import { AuthApi } from 'src/app/React-Query/authApi';
import { getCookie } from 'src/app/utils';

export interface AboutYourBusinessInterface {
	name: string;
	username: string;
	industry: string;
	agreementTerms: boolean;
	email?: string;
	mobile?: string;
	admin_name?: string;
	password?: string;
}
// ///////////////////////////////////////
// ///////////////////////////////////////
const aboutYourBusinessSchema = {
	name: z.string().min(3, 'Store name is required'),
	username: z.string().min(3, 'Store link is required'),
	industry: z.string().min(3, 'Industry is required'),
	agreementTerms: z.boolean().refine((val) => val, 'You must agree to the terms and conditions'),
};
// //////////////////////////////
// /////////////////////////////
const handleDefaultValue = (): AboutYourBusinessInterface => ({
	name: '',
	username: '',
	industry: '',
	agreementTerms: false,
});
// /////////////////////////////
///////////////////////////////
export default function useAboutYourBusiness({ onFinish }: { onFinish: () => void }) {
	const { t } = useTranslation();
	//  get user info data from localstorage
	let userInfoData = {
		email: '',
		admin_name: '',
		mobile: '',
		password: '',
	};
	if (typeof window !== 'undefined') {
		userInfoData = JSON.parse(localStorage.getItem('userInfoData') as any);
	}
	//  linking with api
	const { mutate, isLoading, error } = useMutation('sign-up', AuthApi.signUp_secondStep);
	const handleSubmit = (values: AboutYourBusinessInterface) => {
		let SendingData = {
			...values,
			...userInfoData,
		};
		//Perform verification before moving to the next step
		mutate(SendingData, {
			onSuccess: async (response) => {
				onFinish();
				localStorage.setItem('token', response?.data?.data?.token);
				localStorage.setItem('domain', response?.data?.data?.data?.company?.domain);

				toast.success(response?.data?.message);
			},
			onError: PublicHandlingErrors.onErrorResponse,
		});
	};
	// /////////////////
	// ////////////////
	const industryOptions = [
		{ value: 'fashion', label: t('Fashion') },
		{ value: 'electronics', label: t('Electronics') },
		{ value: 'groceries', label: t('Groceries') },
	];
	const { formStore, onSubmit } = useForm({
		schema: aboutYourBusinessSchema,
		handleSubmit: handleSubmit,
		defaultValues: handleDefaultValue(),
	});

	return { formStore, onSubmit, industryOptions, isLoading };
}
