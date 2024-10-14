import { useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { FaCirclePlus } from 'react-icons/fa6';
import { TrashIcon } from 'lucide-react';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { nanoid } from 'nanoid';
import { IoClose } from 'react-icons/io5';

/**
 * @template TFormStore
 *
 * @param {import('../types').Props<TFormStore>} props
 */
function BulkPricesManager(props) {
	const { t } = useTranslation();
	const { fields, append, remove } = useFieldArray({
		control: props.formStore.control,
		name: 'bulkPrices',
	});

	if (fields.length === 0) {
		return (
			<div>
				<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
				className='px-0 border-0 rounded-none'
				onClick={() =>
					append({
						tempId: nanoid(),
						from: 0,
						to: 10,
						currency: 'SAR',
					})
				}
			>
				<FaCirclePlus className='size-5' />
				{t('Add Bulk Pricing')}
			</Button>
			</div>

		);
	}

	return (
		<>
			<div className='flex flex-col gap-4 w-fit'>
				<p className='font-medium'>{t('Bulk pricing')}</p>

				{fields.map((field, index) => (
					<div key={field.tempId} className='flex flex-wrap gap-4 items-center'>
						<div className='grid grid-cols-2'>
							<FormField
								formStore={props.formStore}
								name={`bulkPrices.${index}.from`}
								label={t('From')}
								render={(field) => <Input {...field} type='number' className='w-fit' />}
							/>
							<FormField
								formStore={props.formStore}
								name={`bulkPrices.${index}.to`}
								label={t('To')}
								render={(field) => <Input {...field} type='number' className='w-fit' />}
							/>
						</div>
						<FormField
							formStore={props.formStore}
							name={`bulkPrices.${index}.currency`}
							label={t('Price')}
							render={(field) => <Input {...field} className='w-fit' />}
						/>
						<Button
							variant='secondary'
							textClassName='flex items-end justify-center gap-1.5 whitespace-nowrap'
							className='px-0 border-0 rounded-none'
							onClick={() => remove(index)}
						>
							<TrashIcon className='size-5' />
							<span className='sr-only'>{t('Remove')}</span>
						</Button>
					</div>
				))}
				<Button
					variant='secondary'
					textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
					className='px-0 border-0 rounded-none'
					onClick={() =>
						append({
							tempId: nanoid(),
							from: 0,
							to: 10,
							currency: 'SAR',
						})
					}
				>
					<FaCirclePlus className='size-5' />
					{t('Add More')}
				</Button>
			</div>
			<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
				className='px-0 border-0 rounded-none'
				onClick={() => {
					props.formStore.setValue('bulkPrices', []);
				}}
			>
				<IoClose />
				{t('Remove bulk pricing')}
			</Button>
		</>
	);
}
export default BulkPricesManager;
