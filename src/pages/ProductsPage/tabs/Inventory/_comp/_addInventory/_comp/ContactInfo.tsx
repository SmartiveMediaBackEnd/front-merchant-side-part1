import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { AddInventoryInterface } from '../_hook/UseAddInventory';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
export const ContactInfo = ({ formStore }: { formStore: UseFormReturn<AddInventoryInterface> }) => {
	//     hooks
	const { t } = useTranslation();
	return (
		<div className='global-cards gap-[1.5rem]'>
			<h2 className='title'>{t('Contact Info')}</h2>
			<div className='flex-col-global gap-[1rem]'>
				<div className='md:flex-row-global flex-col-global md:gap-0 gap-[1rem] justify-between'>
					<div className='md:w-[48%] w-full'>
						<FormField
							formStore={formStore}
							name='contact_name'
							label={t('NAME')}
							render={(field) => <Input {...field} placeholder={''} />}
						/>
					</div>
					<div className='md:w-[48%] w-full'>
						<FormField
							formStore={formStore}
							name='contact_number'
							label={t('Phone Number')}
							render={(field) => (
								<CustomPhoneInput value={field.value} onHandleChange={field.onChange} />
							)}
						/>
					</div>
				</div>

				<div className='md:flex-row-global flex-col-global md:gap-0 gap-[1rem] justify-between'>
					<div className='md:w-[48%] w-full'>
						<FormField
							formStore={formStore}
							name='contact_fax'
							label={t('Fax')}
							render={(field) => <Input type='number' {...field} placeholder={''} />}
						/>
					</div>
					<div className='md:w-[48%] w-full'>
						<FormField
							formStore={formStore}
							name='contact_email'
							label={t('email')}
							render={(field) => <Input type='mail' {...field} placeholder={''} />}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
