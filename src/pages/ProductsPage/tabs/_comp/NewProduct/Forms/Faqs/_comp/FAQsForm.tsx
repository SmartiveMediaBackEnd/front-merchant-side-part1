import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { AddProductSchemaSchemaValues } from '../../../Pages/Configurable/utils';
import TextFieldForm from './TextFieldForm';
import { FormMessage } from 'src/app/components/ui/form';

const FAQsForm = ({
	formStore,
	id,
}: {
	id?: string;
	formStore: UseFormReturn<AddProductSchemaSchemaValues>;
}) => {
	const { t } = useTranslation();
	const error = formStore?.formState?.errors?.faqs;
	return (
		<section id={id} className='global-cards gap-2'>
			{error && <FormMessage style={{ gridArea: 'error' }}>{error?.message}</FormMessage>}
			<h2 className='title'>{t('FAQs')}</h2>
			<p className='text-gray-400 text-sm opacity-80'>
				{t('Answer question people frequently ask about your product.')}
			</p>
			<section>
				<TextFieldForm formStore={formStore} />
			</section>
		</section>
	);
};

export default FAQsForm;
