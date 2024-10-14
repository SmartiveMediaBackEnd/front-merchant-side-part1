import { useCallback, useState } from 'react';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';

import { useForm } from 'src/app/utils/hooks/form';
type PasswordField = 'newPassword' | 'confirmPassword';

const passwordSchema = {
	newPassword: z.string().min(8, 'Password must be at least 8 characters long'),
	confirmPassword: z.string().min(8, 'Password must be at least 8 characters long'),
};

export default function useCreateNewPassword() {
	const [isVisible, setIsVisible] = useState({
		newPassword: false,
		confirmPassword: false,
	});
	const toggleVisibility = useCallback((field: PasswordField) => {
		setIsVisible((prev) => ({
			...prev,
			[field]: !prev[field],
		}));
	}, []);
	const { t } = useTranslation();

	const { formStore, onSubmit } = useForm({
		schema: passwordSchema,
		handleSubmit: (validatedData) => {
			// console.log(validatedData);
		},
		defaultValues: { newPassword: '', confirmPassword: '' },
	});
	const fields: { name: PasswordField; placeholder: string }[] = [
		{ name: 'newPassword', placeholder: t('New password') },
		{ name: 'confirmPassword', placeholder: t('New password again') },
	];
	return { formStore, onSubmit, isVisible, toggleVisibility, fields };
}
