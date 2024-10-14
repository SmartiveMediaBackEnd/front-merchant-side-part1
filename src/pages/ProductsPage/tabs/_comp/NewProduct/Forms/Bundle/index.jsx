import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import BundleItemsManager from './_comp/BundleItemsManager';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormBundleSection(props) {
	const { t } = useTranslation();

	return (
		<Card id={props.id}>
			<CardHeader>
				<CardTitle>{t('Products in bundle (at least 2)')}</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<BundleItemsManager formStore={props.formStore} />
				<div>
					<FormField
						formStore={props.formStore}
						name='bundle.isSelectedProductsUnlisted'
						container={{ className: 'gap-x-2 max-w-[14rem] items-center' }}
						label={{
							children: t('Un list selected products'),
							className: 'whitespace-nowrap',
						}}
						render={({ value, ...field }) => (
							<Checkbox
								{...field}
								checked={value}
								style={{ gridArea: 'input', padding: 0 }}
								className='justify-self-start'
							/>
						)}
						layout='inline-reversed'
					/>
					<p className='ps-8 text-gray'>
						<small>{t('Hide all selected products from showing in store individually')}</small>
					</p>
				</div>
			</CardContent>
		</Card>
	);
}