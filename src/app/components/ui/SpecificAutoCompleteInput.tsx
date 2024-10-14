import { FieldValues, UseFormReturn, Path } from 'react-hook-form';

import CustomAutoComplete from 'src/app/components/ui/AutoCompleteMultiple';
import FormField from 'src/app/components/ui/form/field';

interface selectItemsInterface {
	id: string;
	name: string;
}

interface FormAutoCompleteFieldProps<T extends FieldValues> {
	formStore: UseFormReturn<T>;
	label?: string;
	name: Path<T>;
	array: { id: string; name: string }[];
}
export default function SpecificAutoCompleteInput<T extends FieldValues>({
	formStore,
	name,
	label,
	array,
}: FormAutoCompleteFieldProps<T>) {
	return (
		<FormField
			formStore={formStore}
			name={name}
			label={label}
			render={(field) => (
				<CustomAutoComplete<selectItemsInterface>
					placeholder={label}
					getvalue={(value: any) => {
						formStore.setError(name, { message: '', type: '' });
						formStore.setValue(name, value)
					}}
					name={name}
					array={array}
					MainValue={field.value}
				/>
			)}
		/>
	);
}
