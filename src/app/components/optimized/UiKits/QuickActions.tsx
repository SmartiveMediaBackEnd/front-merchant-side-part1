import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import FormSwitchField from '../../ui/form/FormSwitchField';

interface QuickActionsProps<T extends FieldValues> {
	formStore: UseFormReturn<T>;

	data: { label: string; name: Path<T>; enable?: boolean }[];
	title: string;
}
export default function QuickActions<T extends FieldValues>({
	data,
	title,
	formStore,
}: QuickActionsProps<T>) {
	return (
		<div className='global-cards grid-right'>
			<h3 className='title'>{title}</h3>
			{data?.map((e, i) => (
				<div className='flex-row-global gap-2' key={i}>
					<FormSwitchField<T> formStore={formStore} name={e.name} enable={e.enable} />
					<p>{e.label}</p>
				</div>
			))}
		</div>
	);
}
