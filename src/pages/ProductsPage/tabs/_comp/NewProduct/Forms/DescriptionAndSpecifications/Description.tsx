import { useTranslation } from 'react-i18next';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Textarea } from 'src/app/components/ui/textarea';
import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import Tabs from 'src/app/components/optimized/Tabs/Tabs';

import { UseFormReturn } from 'react-hook-form';
import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';
import { useState } from 'react';
import SpecificationsForm from 'src/pages/ProductsPage/tabs/_comp/NewProduct/Forms/Specifications/_comp/SpecificationsForm';
import { FormMessage } from 'src/app/components/ui/form';

export default function ProductFormDescriptionAndSpecificationsSection({
	formStore,
	id,
}: {
	formStore: UseFormReturn<AddProductSchemaSchemaValues>;
	id: string;
}) {
	const { t } = useTranslation();
	const [value, setValue] = useState(1);
	const error = formStore?.formState?.errors?.specifications;

	return (
		<section id={id} className='global-cards'>
			<p className='title'>{t('Description')}</p>
			{error && <FormMessage style={{ gridArea: 'error' }}>{error?.message}</FormMessage>}

			{/* <TabbedFormField
				label={t('Description')}
				formStore={formStore}
				keys={[
					{ name: 'en.description', label: 'En' },
					{ name: 'ar.description', label: 'عربي' },
				]}
				renderer={(field) => <Textarea {...field} />}
			/> */}

			<Tabs
				body={
					<>
						<TabPanel value='1'>
							<TabbedFormField
								label={t('Description')}
								formStore={formStore}
								keys={[
									{ name: 'en.description', label: 'En' },
									{ name: 'ar.description', label: 'عربي' },
								]}
								renderer={(field) => <Textarea {...field} />}
							/>
						</TabPanel>
						<TabPanel value='2'>
							<SpecificationsForm formStore={formStore} />
						</TabPanel>
					</>
				}
			>
				<Tab onClick={() => setValue(1)} label={t('Description')} value='1' />
				<Tab onClick={() => setValue(2)} label={t('Specifications')} value='2' />
			</Tabs>
		</section>
	);
}
