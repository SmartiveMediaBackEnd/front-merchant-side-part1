import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import useCreateNewPassword from './useCreateNewPassword';
import { useTranslation } from 'react-i18next';
import PasswordToggleIcon from 'src/pages/AuthPage/_comp/PasswordToggleIcon';

export default function CreateNewPassword() {
	const { formStore, onSubmit, isVisible, toggleVisibility, fields } = useCreateNewPassword();
	const { t } = useTranslation();

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='grid w-full gap-5'>
				<h2 className='title text-2xl'>{t('Create a new password')}</h2>
				{fields.map(({ name, placeholder }) => (
					<FormField
						key={name}
						formStore={formStore}
						name={name}
						render={(field) => (
							<div className='relative'>
								<Input
									{...field}
									type={isVisible[name] ? 'text' : 'password'}
									placeholder={placeholder}
								/>
								<PasswordToggleIcon
									toggle={() => toggleVisibility(name)}
									isVisible={isVisible[name]}
								/>
							</div>
						)}
					/>
				))}
				<div className='flex justify-end'>
					<Button
						variant='primary'
						type='submit'
						text={t('Update Password')}
						className='w-36 px-2'
					/>
				</div>
			</form>
		</Form>
	);
}
