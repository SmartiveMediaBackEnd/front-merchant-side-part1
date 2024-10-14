import { z } from 'zod';

import { useForm } from 'src/app/utils/hooks/form';
import { useEffect, useState } from 'react';
const CheckCodeSchema = {
	otp: z.string().min(3, 'OTP code is required').length(6, 'OTP code must be 6 digits'),
};
export default function useCheckOtp({setIsVerified}:{setIsVerified: (isVerified: boolean) => void;}) {
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

	const resetTimer = () => {
		setTimer(10);
		setIsResendVisible(false);
	};

	const { formStore, onSubmit } = useForm({
		schema: CheckCodeSchema,
		handleSubmit: (values) => {
		
			setIsVerified(true);
		},
		defaultValues: { otp: '' },
	});

	return { formStore, onSubmit , timer, isResendVisible, resetTimer};
}
