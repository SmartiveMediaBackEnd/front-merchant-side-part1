import { useEffect, useState } from 'react';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { AuthApi } from 'src/app/React-Query/authApi';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
export interface OtpVerificationInterface {
	code: string;
	mobile?: string;
}

const otpSchema = {
	code: z.string().min(3, 'OTP code is required').length(6, 'OTP code must be 6 digits'),
};

export function UseOtp({ onVerify, phone }: { onVerify: () => void; phone: string }) {
	const [timer, setTimer] = useState(10);
	const [isResendVisible, setIsResendVisible] = useState(false);

	useEffect(() => {
		if (timer > 0) {
			const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
			return () => clearInterval(interval);
		} else {
			setIsResendVisible(true);
		}
	}, [timer]);

	const resetTimer = (): void => {
		setTimer(10);
		setIsResendVisible(false);
	};
	const { mutate, isLoading, error } = useMutation('verify-otp', AuthApi.verify_otp);
	const handleSubmit = (values: OtpVerificationInterface) => {
		// onVerify();
		let SendingData = { mobile: '', code: '' };
		SendingData.mobile = phone;
		SendingData.code = values.code;
		mutate(SendingData, {
			onSuccess: async (response) => {
				toast.success(response?.data?.message);
				onVerify();
			},
			onError: PublicHandlingErrors.onErrorResponse,
		});
	};

	const { formStore, onSubmit } = useForm({
		schema: otpSchema,
		handleSubmit: handleSubmit,
		defaultValues: { code: '' },
	});

	return { timer, isResendVisible, resetTimer, formStore, onSubmit, isLoading };
}
