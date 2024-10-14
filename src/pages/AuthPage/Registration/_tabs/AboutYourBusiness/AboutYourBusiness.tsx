import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { Button } from 'src/app/components/optimized';
import useAboutYourBusiness from './_hook/useAboutYourBusiness';
import SelectFormField from '../../../../../app/components/ui/form/SelectFormField';
import { AgreementTerms } from './_comp/AgreementTerms';

export default function AboutYourBusiness({ onFinish }: { onFinish: () => void }) {
	const { formStore, onSubmit, industryOptions, isLoading } = useAboutYourBusiness({ onFinish });

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='grid grid-cols-1 gap-4'>
				<FormField
					formStore={formStore}
					name='name'
					render={(field) => <Input {...field} id='name' type='text' placeholder='Store name' />}
				/>
				<FormField
					formStore={formStore}
					name='username'
					render={(field) => (
						<div className='flex'>
							<Input
								{...field}
								id='username'
								type='text'
								placeholder='Store link (in English)'
								className='flex-grow'
							/>
							<span className='inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm'>
								.dookan.net
							</span>
						</div>
					)}
				/>
				<SelectFormField
					formStore={formStore}
					name='industry'
					placeholder='industry'
					options={industryOptions}
				/>
				<AgreementTerms formStore={formStore} />
				<div className='flex justify-end'>
					<Button
						loading={isLoading}
						variant='primary'
						type='submit'
						text='Create Store'
						className='w-36'
					/>
				</div>
			</form>
		</Form>
	);
}
