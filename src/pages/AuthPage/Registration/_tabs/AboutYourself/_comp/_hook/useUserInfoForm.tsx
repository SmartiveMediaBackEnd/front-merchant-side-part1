import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { AuthApi } from 'src/app/React-Query/authApi';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';

import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';

export interface UserInfoInterface {
	email: string;
	admin_name: string;
	mobile: string;
	password: string;
}

const handleDefaultValue = (): UserInfoInterface => {
	return {
		email: '',
		admin_name: '',
		mobile: '',
		password: '',
	};
};

const userInfoValidationSchema = {
	email: z.string().email('Invalid email address'),
	admin_name: z.string().min(1, 'Name is required'),
	mobile: z.string().min(10, 'Phone number is too short'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
};

export interface UserInfoProps {
	onNext: () => void;
	onPhoneChange: (phone: string) => void;
}

export function useUserInfoForm({ onNext, onPhoneChange }: UserInfoProps) {
	//  linking with api
	const { mutate, isLoading, error } = useMutation('sign-up', AuthApi.signUp);
	const handleSubmit = (values: UserInfoInterface) => {
		//Perform verification before moving to the next step
		mutate(values, {
			onSuccess: async (response) => {
				localStorage.setItem('userInfoData', JSON.stringify(values));
				toast.success(response?.data?.message);
				toast.success(response?.data?.data?.otp);
				onNext();
			},
			onError: PublicHandlingErrors.onErrorResponse,
		});
		// ///////////////////

		//  second method to link with api instead of using react query
		// PublicRequest.postData(values, "merchant/register/validate/step-one")

		// onNext();
	};

	const { formStore, onSubmit } = useForm({
		schema: userInfoValidationSchema,
		handleSubmit: handleSubmit,
		defaultValues: handleDefaultValue(),
	});
	useEffect(() => {
		const subscription = formStore.watch((value) => {
			const phoneValue = value.mobile ?? '';
			onPhoneChange(phoneValue);
		});
		return () => subscription.unsubscribe();
	}, [formStore, onPhoneChange]);

	return { formStore, onSubmit, isLoading };
}
