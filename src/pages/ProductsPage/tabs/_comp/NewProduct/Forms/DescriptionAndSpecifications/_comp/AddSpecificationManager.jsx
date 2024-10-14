import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { Button } from 'src/app/components/optimized';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Textarea } from 'src/app/components/ui/textarea';
import { Input } from 'src/app/components/ui/input';
import { productSpecificationsRawSchema } from '../utils.js';
import { useForm } from 'src/app/utils/hooks/form';

/**
 * @param {{
* 	handleSubmit: (values: import('src/app/utils/hooks/form').InferredZodSchema<typeof productSpecificationsRawSchema>) => void;
* }} props
*/

function AddSpecificationManager(props) {
	const { t } = useTranslation();
	const [isAdding, setIsAdding] = useState(false);
	const { formStore, onSubmit } = useForm({
		schema: productSpecificationsRawSchema.specification,
		handleSubmit: props.handleSubmit,
		defaultValues: {
			specification: {
				tempId: Date.now().toString() + Math.random().toString(),
			},
		},
	});

	if (!isAdding) {
		return (
			<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap bg-transparent border-title px-4 py-3 rounded-lg border'
				className='px-0 border-0'
				onClick={() => setIsAdding(true)}
			>
				<FaCirclePlus className='size-5' />
				{t('Add Specification')}
			</Button>
		);
	}

	return (
		<div onSubmit={onSubmit} className='flex flex-col gap-4'>
			<Card>
				<CardHeader>
					<CardTitle>{t('Add Specification')}</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<div className='flex flex-col gap-4 md:w-1/2'>
						<TabbedFormField
							formStore={formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `specification.specNameEn`, label: 'En' },
								{ name: `specification.specNameAr`, label: 'عربي' },
							]}
							label={t('Specification')}
							renderer={(field) => <Input {...field} />}
						/>
						<TabbedFormField
							formStore={formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `specification.specValueEn`, label: 'En' },
								{ name: `specification.specValueAr`, label: 'عربي' },
							]}
							label={t('Answer')}
							renderer={(field) => <Textarea {...field} />}
						/>
					</div>
					<div className='flex gap-4'>
						<Button
							type='button'
							variant='primary'
							onClick={() => {
								// if (!formStore.formState.isValid) {
								// 	return;
								// }

								const values = formStore.getValues();
								props.handleSubmit(values);
								formStore.reset();
							}}
						>
							{t('Save & add another')}
						</Button>
						<Button
							type='button'
							variant='secondary'
							onClick={() => {
								// if (!formStore.formState.isValid) {
								// 	return;
								// }

								const values = formStore.getValues();
								props.handleSubmit(values);
								formStore.reset();
								setIsAdding(false);
							}}
						>
							{t('Save')}
						</Button>
						<Button
							variant='text'
							onClick={() => {
								setIsAdding(false);
								formStore.reset();
							}}
						>
							{t('Discard')}
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default AddSpecificationManager;
