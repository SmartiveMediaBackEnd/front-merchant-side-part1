import { UseFormReturn, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import HorizontalBox from 'src/app/components/ui/horizontal-box';
import { useEffect } from 'react';
import { AddProductSchemaSchemaValues } from '../../../Pages/Configurable/utils';


function ProfitField({ formStore }: { formStore: UseFormReturn<AddProductSchemaSchemaValues>; }) {
	const { t } = useTranslation();
	const price = useWatch({ name: 'price', control: formStore.control });
	const discountPrice = useWatch({ name: 'discount', control: formStore.control });
	const costPrice = useWatch({ name: 'cost', control: formStore.control });

	const profit = Number(price || 0) - Number(costPrice || 0) - Number(discountPrice || 0);

	useEffect(() => {
		formStore.setValue('profit', profit);
	}, [profit]);
	return (
		<FormField
			formStore={formStore}
			name='profit'
			label={t('Profit')}
			render={(field) => (
				<HorizontalBox start={<span className='pe-2'>{t("SAR")}</span>}>
					<Input
						{...field}
						type='number'
						disabled
						readOnly
						className='border-0 rounded-none grayscale brightness-[0.85]'
					/>
				</HorizontalBox>
			)}
		/>
	);
}

export default ProfitField;
