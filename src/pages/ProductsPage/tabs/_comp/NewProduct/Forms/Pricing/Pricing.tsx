import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import HorizontalBox from 'src/app/components/ui/horizontal-box';
import ProfitField from './_comp/ProfitField';
import BulkPricesManager from './_comp/BulkPricesManager';
import { CheckBox } from 'src/app/components/optimized';
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';
import { AiFillQuestionCircle } from 'react-icons/ai';

export default function ProductFormPricingSection({ formStore, id }: { formStore: UseFormReturn<AddProductSchemaSchemaValues>; id: string; }) {
	const { t } = useTranslation();
	useEffect(() => {
		formStore.watch('taxable')
			? formStore.setValue('taxable', 1)
			: formStore.setValue('taxable', 0);
	}, [formStore.watch('taxable')]);

	return (
		<section className='global-cards' id={id}>
			<p className='title'>{t('Pricing')}</p>

			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				<FormField
					formStore={formStore}
					name='price'
					label={t('Price')}
					render={(field) => (
						<HorizontalBox start='SAR' startSeparator>
							<Input {...field} type='number' className='border-0 rounded-none' />
						</HorizontalBox>
					)}
				/>
				<FormField
					formStore={formStore}
					name='discount'
					label={`${t('Discount price')} (${t('Optional')})`}
					render={(field) => (
						<HorizontalBox start='SAR' startSeparator>
							<Input {...field} type='number' className='border-0 rounded-none' />
						</HorizontalBox>
					)}
				/>
				<div>
					<div className='flex-row-global gap-2 mb-1'>
						<p className='text-title text-sm'>{t('Cost price')} {t('Optional')}</p>
						<AiFillQuestionCircle size={20} color='#55C397' />
					</div>
					<FormField
						formStore={formStore}
						name='cost'
						render={(field) => (
							<HorizontalBox start='SAR'>
								<Input {...field} type='number' className='border-0 rounded-none' />
							</HorizontalBox>
						)}
					/>
				</div>
				<ProfitField formStore={formStore} />
				<div className='flex-col-global'>
					<FormField
						formStore={formStore}
						name='taxable'
						render={(field) => (
							<CheckBox
								label={t('Taxable product')}
								checked={formStore.watch('taxable') > 0 ? true : false}
								handleOnChange={field.onChange}
							/>
						)}
					/>

				</div>
			</div>
			<BulkPricesManager formStore={formStore} />
			{/* </CardContent> */}
		</section >
	);
}


//////////////////////////////////////////////

// import { useTranslation } from 'react-i18next';
// import FormField from 'src/app/components/ui/form/field';
// import { Input } from 'src/app/components/ui/input';
// import { Props } from './types';
// import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
// import { useAppDispatch, useAppSelector } from 'src/app/store';
// import SelectFormField from 'src/app/components/ui/form/SelectFormField';
// import { getAttributesFamilies } from 'src/app/store/slices/Attributes/AttributeFamilies/attributeFamiliesAsyncThunks';
// import { useEffect } from 'react';

// export default function ProductFormPricingSection<TFormStore>(props: Props<TFormStore>) {
// 	const { t } = useTranslation();
// 	const dispatch = useAppDispatch();
// 	const { attributesFamilies } = useAppSelector((state) => state.attributesFamilies);


// 	useEffect(() => {
// 		dispatch(getAttributesFamilies());
// 	}, [dispatch])
// 	return (
// 		<section className='global-cards' id={props.id}>
// 			<p className='title'>{t('Pricing')}</p>

// 			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
// 				<TabbedFormField
// 					formStore={props.formStore}
// 					keys={[
// 						{ name: 'en.short_description', label: 'En' },
// 						{ name: 'ar.short_description', label: 'عربي' },
// 					]}
// 					label={t('Short Description')}
// 					renderer={(field) => <Input {...field} />}
// 				/>
// 				<FormField
// 					formStore={props.formStore}
// 					name='url_key'
// 					label={t('url_key')}
// 					render={(field) => (
// 						<Input {...field} />
// 					)}
// 				/>

// 				<SelectFormField
// 					name='attribute_family_id'
// 					formStore={props.formStore}
// 					options={attributesFamilies?.map((e: any) => {
// 						return {
// 							label: e?.name,
// 							value: e?.id?.toString(),
// 						};
// 					})}
// 					placeholder={t('Select attribute family')}
// 				/>

// 				{/* <div className='flex-col-global'>
// 					<FormField
// 						formStore={props.formStore}
// 						name='taxable'
// 						render={(field) => (
// 							<CheckBox
// 								label={t('Taxable product')}
// 								checked={props.formStore.watch('taxable') > 0 ? true : false}
// 								handleOnChange={field.onChange}
// 							/>
// 						)}
// 					/>

// 				</div> */}
// 			</div>

// 		</section >
// 	);
// }
