import { Link } from 'react-router-dom';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import usePasswordForm from './usePasswordForm';
import { useTranslation } from 'react-i18next';
import PasswordToggleIcon from 'src/pages/AuthPage/_comp/PasswordToggleIcon';

export default function PasswordForm({ email }: { email: string }) {
	const { t } = useTranslation();

	const { formStore, onSubmit, toggleVisibility, isVisible, isLoading } = usePasswordForm({
		email,
	});
	return (
		<Form {...formStore}>
			<form className='w-full' onSubmit={onSubmit}>
				<FormField
					formStore={formStore}
					name='password'
					render={(field) => (
						<div className='relative'>
							<Input
								{...field}
								type={isVisible ? 'text' : 'password'}
								placeholder={t('Password')}
							/>
							<PasswordToggleIcon toggle={toggleVisibility} isVisible={isVisible} />
						</div>
					)}
				/>
				<div className='flex justify-end mt-2 mb-5'>
					<Link to='/forgot_password' className='paragraph text-primary'>
						{t('Forgot Password?')}
					</Link>
				</div>
				<div className='flex justify-end'>
					<Button
						loading={isLoading}
						type='submit'
						variant='primary'
						text={t('Sign In')}
						className='w-36'
					/>
				</div>
			</form>
		</Form>
	);
}
