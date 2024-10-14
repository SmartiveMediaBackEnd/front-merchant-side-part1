
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import OtherProductShippingOptions from './_comp/OtherProductShippingOptions';
import { CheckBox } from 'src/app/components/optimized';
import { useEffect } from 'react';
import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';

export default function ProductFormShippingSection({ formStore, id }: {
	formStore: UseFormReturn<AddProductSchemaSchemaValues>;
	id?: string;
}) {
	const { t } = useTranslation();

	useEffect(() => {
		formStore.watch('is_shipped')
			? formStore.setValue('is_shipped', 1)
			: formStore.setValue('is_shipped', 0);
	}, [formStore.watch('is_shipped')]);

	return (
		<section className='global-cards' id={id}>
			<p className="title">{t('Shipping')}</p>
			<section className='flex flex-col gap-4'>
				<div className='flex flex-row gap-2 items-start'>
					<FormField
						formStore={formStore}
						name='is_shipped'
						render={(field) => (
							<CheckBox
								checked={formStore.watch('is_shipped') > 0 ? true : false}
								handleOnChange={field.onChange}
							/>
						)}
					/>
					<div className='flex-col-global gap-1 '>
						<p className="title">{t("Is this product require shipping or pickup?")}</p>
						<p className="sub-title opacity-80">{t("Enable this option if the product needs to be physically delivered to customers either via shipping or by self-pickup. If this product is a service or a downloadable item that doesn’t require delivery, keep this option disabled.")}</p>
					</div>
				</div>

				<OtherProductShippingOptions formStore={formStore} />
			</section>
		</section>
	);
}
