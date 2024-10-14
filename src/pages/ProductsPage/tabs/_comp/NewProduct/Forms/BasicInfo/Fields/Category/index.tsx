import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	SelectItem,
} from 'src/app/components/ui/select';
import AddCategoryForm from '../../../../../../Categories/_comp/AddCategoryForm';
import { Button } from 'src/app/components/optimized';
import { useState } from 'react';

function CategoryDialog() {
	const { t } = useTranslation();
	const [openDialog, setOpenDialog] = useState<boolean>(false);

	return (
		<>
			<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
				className='border-input border-s-0 rounded-s-none'
				onClick={() => setOpenDialog(true)}
			>
				{t('Add New')}
			</Button>

			<AddCategoryForm
				openDialog={openDialog}
				handleClose={() => setOpenDialog(false)}
				handleSubmit={(values) => {
					// console.log(values);
				}}
			/>
		</>
	);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormCategoryField(props) {
	const { t } = useTranslation();

	return (
		<FormField
			formStore={props.formStore}
			name='category'
			label={t('Category')}
			render={(field) => (
				<div className='flex'>
					<Select
						onValueChange={field.onChange}
						value={field.value}
						required={field.required}
						name={field.name}
					>
						<SelectTrigger
							className='border-e-0 rounded-e-none rtl:border-e rtl:rounded-e rtl:border-s-0 rtl:rounded-s-none'
							onBlur={field.onBlur}
							disabled={field.disabled}
							id={field.value}
						>
							<SelectValue placeholder='Theme' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='light'>Light</SelectItem>
							<SelectItem value='dark'>Dark</SelectItem>
							<SelectItem value='system'>System</SelectItem>
						</SelectContent>
					</Select>
					<CategoryDialog />
				</div>
			)}
		/>
	);
}
