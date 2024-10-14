import { z } from 'zod';
import { GlobalDialog } from '../../shared';
import { InferredZodSchema, useForm } from 'src/app/utils/hooks/form';
import { Form } from '../../ui/form';
import Button from 'src/app/components/optimized/Buttons/Button';
import { useTranslation } from 'react-i18next';
import FormField from '../../ui/form/field';
import ImportFileInput from '../../ui/Import_file-input';
import { PathValue } from 'react-hook-form';
import { Path } from 'react-router-dom';

const ImportDataSchema = {
	file: z.instanceof(File),
};
export type FormSchema = InferredZodSchema<typeof ImportDataSchema>;
export default function PopupImportData({
	onClose,

	open,
	handelSubmit,
}: {
	onClose: () => void;

	open: boolean;
	handelSubmit: (e: FormSchema) => void;
}) {
	const { t } = useTranslation();
	const style = {
		width: { md: '40rem', xs: '25rem' },
		height: { md: '10.8rem', xs: '10.5rem' },
	};

	const { formStore, onSubmit } = useForm({
		schema: ImportDataSchema,
		handleSubmit: (values: FormSchema) => {
			handelSubmit(values);
		},
		defaultValues: {
			file: undefined,
		},
	});

	const onImageSubmit = (option: File) => {
		formStore.setValue('file', option);
		formStore.setError('file', { message: '', type: 'drop-rejected' });
	};
	return (
		<GlobalDialog openDialog={open} handleClose={onClose} style={style}>
			<Form {...formStore}>
				<form onSubmit={onSubmit} className='flex-col-global h-full justify-between'>
					<FormField
						formStore={formStore}
						name={'file'}
						render={(field) => <ImportFileInput onImageSubmit={onImageSubmit} />}
					/>
					<div className='flex justify-end items-center gap-4'>
						<Button onClick={onClose} variant='tertiary'>
							{t('cancel')}
						</Button>
						<Button onClick={onSubmit} variant='primary'>
							{t('Save')}
						</Button>
					</div>
				</form>
			</Form>
		</GlobalDialog>
	);
}
