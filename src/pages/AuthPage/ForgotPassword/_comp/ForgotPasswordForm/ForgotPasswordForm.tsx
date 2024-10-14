import { useCallback, useMemo } from 'react';

import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import useForgotPasswordForm from './useForgotPasswordForm';
import { useTranslation } from 'react-i18next';

interface ForgotPasswordFormProps {
	setIsCodeSent: (isCodeSent: boolean) => void;
	setUsePhone: (usePhone: boolean | ((prev: boolean) => boolean)) => void;
	usePhone: boolean;
}

export default function ForgotPasswordForm({
	setIsCodeSent,
	setUsePhone,
	usePhone,
}: ForgotPasswordFormProps) {

	const { getTexts, formStore, onSubmit } = useForgotPasswordForm({ usePhone, setIsCodeSent });
	const { btnText, switchText, placeholder } = useMemo(() => getTexts(usePhone), [usePhone]);
	const { t } = useTranslation();

	const handleToggle = useCallback(() => {
		setUsePhone((prev) => !prev);
	}, [setUsePhone]);

	return (
		<div className='w-full'>
			<h2 className='title text-2xl	mb-6'>{t('Forgot password')}</h2>
			<Form {...formStore}>
				<form onSubmit={onSubmit}>
					<FormField
						formStore={formStore}
						name='contact'
						render={(field) => <Input {...field} placeholder={placeholder} />}
					/>
					<div className='flex justify-end  mt-5 mb-11'>
						<Button type='submit' variant='primary' text={t('Send Code')} className='w-36' />
					</div>
					<p className='paragraph text-subtitle flex justify-center items-center'>
						{switchText}&nbsp;
						<Button variant='link' text={btnText} onClick={handleToggle} />
					</p>
				</form>
			</Form>
		</div>
	);
}

