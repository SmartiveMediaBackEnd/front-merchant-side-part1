import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { Textarea } from 'src/app/components/ui/textarea';
import MetaKeywordsFormField from './_comp/MetaKeywordsFormField';
import SearchResultsPreview from './_comp/SearchResultsPreview';
import { UseFormReturn } from 'react-hook-form';
import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';

export default function SeoFormFaqsSection({ formStore, id }: { formStore: UseFormReturn<AddProductSchemaSchemaValues>; id: string }) {
	const { t } = useTranslation();

	return (
		<section className="global-cards" id={id}>
			<p className="title">{t('SEO (Search engine listing preview)')}</p>

			<section className='flex-col-global'>
				<SearchResultsPreview formStore={formStore} />
				<section className='flex-col-global md:w-[50%]'>
					<FormField
						formStore={formStore}
						name='page_title'
						label={t('page Title')}
						render={(field) => <Input {...field} placeholder={t('e.g., T-Shirt')} />}
					/>

					<FormField
						formStore={formStore}
						name='link'
						label={t('Link')}
						render={(field) => <Input {...field} placeholder='e.g., https://artisan.dookan.net/t-shirt' />}
					/>


					{/* <FormField
						formStore={formStore}
						name='meta_keywords'
						label={t('meta keywords')}
						render={(field) => <Input {...field} placeholder='Type and add' />}
					/> */}
					< MetaKeywordsFormField formStore={formStore} />

					<FormField
						formStore={formStore}
						name='meta_description'
						label={t('Meta Description')}
						render={(field) => <Textarea {...field} placeholder={t('Short description')} />}
					/>

				</section>
			</section>
		</section>
	);
}
