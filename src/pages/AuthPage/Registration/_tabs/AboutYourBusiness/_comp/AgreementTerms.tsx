import { UseFormReturn } from 'react-hook-form';
import { AboutYourBusinessInterface } from '../_hook/useAboutYourBusiness';
import { Link } from 'react-router-dom';
import { CheckBox } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import { useMemo } from 'react';
interface AgreementCheckboxProps {
	formStore: UseFormReturn<AboutYourBusinessInterface>;
}

export function AgreementTerms({ formStore }: AgreementCheckboxProps) {
	const className = 'text-primary';
	useMemo(() => {
		if (!formStore.watch('agreementTerms')) {
			formStore.setError('agreementTerms', { message: 'You Must agree' });
		} else {
			formStore.setError('agreementTerms', { message: '' });
		}
	}, [formStore.watch('agreementTerms')]);
	return (
		<FormField
			formStore={formStore}
			name='agreementTerms'
			render={(field) => (
				<CheckBox
					label={
						<span className='md:paragraph md:text-subtitle  text-[.65rem]'>
							I agree to&nbsp;
							<Link to='' className={className}>
								Terms and Conditions
							</Link>
							,&nbsp;
							<Link to='' className={className}>
								Privacy Policy
							</Link>
							&nbsp; and &nbsp;
							<Link to='' className={className}>
								Selling policy
							</Link>
						</span>
					}
					checked={field.value}
					handleOnChange={(option: boolean) => {
						formStore.setValue('agreementTerms', option);
					}}
				/>
			)}
		/>
	);
}
