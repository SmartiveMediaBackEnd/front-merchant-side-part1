import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import ProductInventoryBranches from './_comp/ProductInventoryBranches';
import { useEffect } from 'react';
import { CheckBox } from 'src/app/components/optimized';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getInventoryTable } from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';
import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';
import { UseFormReturn } from 'react-hook-form';

export default function ProductFormStockSection({ formStore, id }: { formStore: UseFormReturn<AddProductSchemaSchemaValues>; id: string }) {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const { inventory } = useAppSelector((state) => state.inventory);

	useEffect(() => {
		dispatch(getInventoryTable())
	}, [dispatch])

	useEffect(() => {
		formStore.watch('continue_selling')
			? formStore.setValue('continue_selling', 1)
			: formStore.setValue('continue_selling', 0);
	}, [formStore.watch('continue_selling')]);

	return (
		<section className='global-cards' id={id}>
			<p className='title'>{t('Stock')}</p>
			<div className='md:w-[70%] flex-col-global gap-6'>
				<FormField
					formStore={formStore}
					name='base_qty'
					label={t('Quantity')}
					render={(field) => <Input {...field} type='number' />}
				/>

				<FormField
					formStore={formStore}
					name='continue_selling'
					render={(field) => (
						<CheckBox
							label={t('Can continue selling when out of stock')}
							checked={formStore.watch('continue_selling') > 0 ? true : false}
							handleOnChange={field.onChange}
						/>
					)}
				/>

			</div>

			<ProductInventoryBranches formStore={formStore} />
		</section>
	);
}
