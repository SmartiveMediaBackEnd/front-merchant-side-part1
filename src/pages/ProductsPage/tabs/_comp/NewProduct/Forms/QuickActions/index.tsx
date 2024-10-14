import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Props } from './types';
import { Switch } from 'src/app/components/ui/switch';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormQuickActionsSection<TFormStore>(props: Props<TFormStore>) {
	const { t } = useTranslation();

	return (
		<Card id={props.id}>
			<CardHeader>
				<CardTitle>{t('Quick actions')}</CardTitle>
			</CardHeader>
			<CardContent className='gap-4 flex flex-col'>
				<FormField
					formStore={props.formStore}
					name='isAvailableOnStore'
					label={t('Available on store')}
					render={(field) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
					layout='inline-reversed'
					container={{ className: 'gap-2' }}
				/>

				{/* <FormField
					formStore={props.formStore}
					name='isFeaturedOnTheFrontPage'
					label={t('Featured on the front page')}
					render={(field) => (
						<button
							type='button'
							onClick={() => {
								field.onChange(!field.value);
							}}
						>
							<span
								className={field.value ? 'text-primary' : 'text-gray-400'}
								style={{
									color: field.value ? 'gold' : 'gray',
								}}
							>
								&#x2606;{' '}
							</span>
						</button>
					)}
					layout='inline-reversed'
				/> */}
			</CardContent>
		</Card>
	);
}
