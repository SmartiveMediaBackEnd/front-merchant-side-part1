
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';


/**
 * @template TFormStore
 *
 * @param {import('../types').Props<TFormStore>} props
 */
export default function VirtualProductShippingOptions(props) {
	const { t } = useTranslation();

	return (
		<FormField
			formStore={props.formStore}
			name='shipping.downloadLink'
			render={(field) => <Input {...field} type='url' />}
			label={{ children: `${t('Download link')} (${t('Optional')})` }}
			container={{ className: 'md:w-1/2 gap-1' }}
			layout='inline-reversed'
		/>
	);
}
