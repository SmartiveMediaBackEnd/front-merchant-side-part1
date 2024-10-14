// import { Link } from 'react-router-dom';
// import { Form } from 'src/app/components/ui/form';
// import { Input } from 'src/app/components/ui/input';
// import { Button } from 'src/app/components/optimized';
// import FormField from 'src/app/components/ui/form/field';
// import useIdentifierForm, { IdentifierFormProps } from './useIdentifierForm';
// import { useTranslation } from 'react-i18next';

// export default function IdentifierForm({
// 	setStep,
// 	onIdentifierChange,
// 	setEmail,
// }: IdentifierFormProps) {
// 	const { formStore, onSubmit } = useIdentifierForm({
// 		setStep,
// 		onIdentifierChange,
// 		setEmail,
// 	});
// 	const { t } = useTranslation();

// 	return (
// 		<Form {...formStore}>
// 			<form className='w-full' onSubmit={onSubmit}>
// 				<>
// 					<FormField
// 						formStore={formStore}
// 						name='emailOrPhone'
// 						render={(field) => <Input {...field} placeholder={t('Email or phone')} />}
// 					/>
// 					<div className='flex  justify-end mt-2 mb-5'>
// 						<Link to='/forgot_password' className='paragraph text-primary'>
// 							{t('Forgot Password?')}
// 						</Link>
// 					</div>
// 					<div className='flex justify-end mb-11'>
// 						<Button type='submit' variant='primary' text={t('Next')} className='w-36' />
// 					</div>
// 					<p className='paragraph text-subtitle text-center'>
// 						{t("Don't have an account?")}&nbsp;
// 						<Link to='/register' className='font-semibold text-primary'>
// 							{t('Sign up')}
// 						</Link>
// 					</p>
// 				</>
// 			</form >
// 		</Form >
// 	);
// }


import { Link } from 'react-router-dom';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import useIdentifierForm, { IdentifierFormProps } from './useIdentifierForm';
import { useTranslation } from 'react-i18next';

export default function IdentifierForm({
	setStep,
	onIdentifierChange,
	setEmail,
}: IdentifierFormProps) {
	const { formStore, onSubmit } = useIdentifierForm({
		setStep,
		onIdentifierChange,
		setEmail,
	});
	const { t } = useTranslation();

	return (
		<Form {...formStore}>
			<form className='w-full' onSubmit={onSubmit}>
				<>
					<FormField
						formStore={formStore}
						name='emailOrPhone'
						render={(field) => <Input {...field} placeholder={t('Email or phone')} />}
					/>
					<div className='flex  justify-end mt-2 mb-5'>
						<Link to='/forgot_password' className='paragraph text-primary'>
							{t('Forgot Password?')}
						</Link>
					</div>
					<div className='flex justify-end mb-11'>
						<Button type='submit' variant='primary' text={t('Next')} className='w-36' />
					</div>
					<p className='paragraph text-subtitle text-center'>
						{t("Don't have an account?")}&nbsp;
						<Link to='/register' className='font-semibold text-primary'>
							{t('Sign up')}
						</Link>
					</p>
				</>
			</form >
		</Form >
	);
}
