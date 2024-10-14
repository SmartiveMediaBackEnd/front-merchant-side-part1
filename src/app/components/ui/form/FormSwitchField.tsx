import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FieldValues, Path } from 'react-hook-form';
import FormField from 'src/app/components/ui/form/field';
import { Switch } from 'src/app/components/ui/switch';

interface FormSwitchFieldProps<T extends FieldValues> {
	formStore: UseFormReturn<T>;
	description?: string;
	label?: string;
	name: Path<T>;
	enable?: boolean;
	fieldLabel?: string;
}

export default function FormSwitchField<T extends FieldValues>({
	formStore,
	name,
	label,
	description,
	enable,
	fieldLabel,
}: FormSwitchFieldProps<T>) {
	const { t } = useTranslation();
	return (
		<div className='flex md:flex-row md:justify-between md:items-center col-span-2 flex-col items-start gap-3'>
			{(label || description) && (
				<div className='grid gap-1'>
					{label && <h3 className='title '>{t(label as any)}</h3>}
					{description && <p className='paragraph text-subtitle'>{t(description as any)}</p>}
				</div>
			)}
			<FormField
				label={fieldLabel}
				formStore={formStore}
				name={name}
				render={(field) => (
					<div className='flex gap-2 items-center'>
						<Switch checked={field.value} onCheckedChange={field.onChange} />
						{!enable && <p className='paragraph mt-[.1rem]'>{t('Enabled')}</p>}
					</div>
				)}
			/>
		</div>
	);
}
