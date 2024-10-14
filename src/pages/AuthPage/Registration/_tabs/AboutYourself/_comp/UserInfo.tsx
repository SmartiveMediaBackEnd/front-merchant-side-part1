import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { capitalize } from 'src/app/utils';
import { UserInfoProps, useUserInfoForm } from './_hook/useUserInfoForm';

// Define the specific types for the field names
type FieldName = 'email' | 'admin_name' | 'mobile' | 'password';

export default function UserInfo({ onNext, onPhoneChange }: UserInfoProps) {
	const { t } = useTranslation();
	const { formStore, onSubmit, isLoading } = useUserInfoForm({ onNext, onPhoneChange });

	const inputData = [
		{ name: 'email', label: t('email') },
		{ name: 'admin_name', label: t('name') },
		{ name: 'mobile', label: t('phone') },
		{ name: 'password', label: 'password' },
	];
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='grid grid-cols-1 gap-4'>
				{(inputData as { name: FieldName; label: string }[]).map((fieldName) => (
					<FormField
						key={fieldName.name}
						formStore={formStore}
						name={fieldName.name}
						render={(field) => (
							<Input
								{...field}
								id={fieldName.name}
								type={fieldName.name === 'password' ? 'password' : 'text'}
								placeholder={capitalize(fieldName.label)}
							/>
						)}
					/>
				))}
				<div className='flex justify-end w-full'>
					<Button
						loading={isLoading}
						className='w-[8.75rem]'
						variant='primary'
						type='submit'
						text={t('Next')}
					/>
				</div>
			</form>
		</Form>
	);
}
