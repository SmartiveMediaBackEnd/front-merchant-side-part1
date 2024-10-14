// import { useCallback, useState } from 'react';
// import { z } from 'zod';

// import { useForm } from 'src/app/utils/hooks/form';
// import toast from 'react-hot-toast';
// import { AuthApi } from 'src/app/React-Query/authApi';
// import { useMutation } from 'react-query';
// import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
// export interface passwordSchemaForm {
// 	password: string;
// 	email?: string;
// 	device_name?: string;
// }
// const passwordSchema = {
// 	password: z.string().min(6, 'Password must be at least 6 characters long'),
// };

// export default function usePasswordForm({ email }: { email: string }) {
// 	const [isVisible, setIsVisible] = useState(false);

// 	const { mutate, isLoading } = useMutation('login', AuthApi.login);

// 	const handleSubmit = (values: passwordSchemaForm) => {
// 		let sendingData = { ...values, email, device_name: 'postman' };
// 		mutate(sendingData, {
// 			onSuccess: async (response: any) => {
// 				toast.success(response?.data?.message);
// 				// set to local storage
// 				localStorage.setItem('token', response?.data?.data?.token);
// 				window.location.href = '/home';
// 			},
// 			onError: PublicHandlingErrors.onErrorResponse,
// 		});
// 	};

// 	const { formStore, onSubmit } = useForm({
// 		schema: passwordSchema,
// 		handleSubmit: handleSubmit,
// 		defaultValues: { password: '' },
// 	});

// 	const toggleVisibility = useCallback(() => {
// 		setIsVisible((prev) => !prev);
// 	}, []);
// 	return { formStore, onSubmit, toggleVisibility, isVisible, isLoading };
// }
/////////////////////////////////////////////////////////////////////////////////////
import { useCallback, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';

export interface PasswordSchemaForm {
	password: string;
	email?: string;
	device_name?: string;
}

const passwordSchema = {
	password: z.string().min(6, 'Password must be at least 6 characters long'),
};

export default function usePasswordForm({ email }: { email: string }) {
	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (values: PasswordSchemaForm) => {
		const domain = localStorage.getItem('domain');
		if (!domain) {
			toast.error('Domain not found in local storage');
			return;
		}

		setIsLoading(true);
		try {
			const response = await fetch(`https://${domain}/api/v1/merchant/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					password: values.password,
					email,
					device_name: 'postman',
				}),
			});

			const data = await response.json();

			if (response.ok) {
				toast.success(data?.message);
				localStorage.setItem('token', data?.data?.token);
				window.location.href = '/home';
			} else {
				toast.error(data?.message || 'Something went wrong');
				PublicHandlingErrors.onErrorResponse(data);
			}
		} catch (error) {
			toast.error('An error occurred while processing your request.');
			PublicHandlingErrors.onErrorResponse(error);
		} finally {
			setIsLoading(false);
		}
	};

	const { formStore, onSubmit } = useForm({
		schema: passwordSchema,
		handleSubmit,
		defaultValues: { password: '' },
	});

	const toggleVisibility = useCallback(() => {
		setIsVisible((prev) => !prev);
	}, []);

	return { formStore, onSubmit, toggleVisibility, isVisible, isLoading };
}





