import { useEffect, useState } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaCirclePlus } from 'react-icons/fa6';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import FormChoiceChips from 'src/app/components/ui/form/FormChoiceChips';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getShippingList } from 'src/app/store/slices/settingsPage/shipping/shippingAsyncThunks';
import { AddProductSchemaSchemaValues } from '../../../Pages/Configurable/utils';
import { FaCheck } from 'react-icons/fa';

export default function AdvancedShippingOptionsManager({ formStore }: {
	formStore: UseFormReturn<AddProductSchemaSchemaValues>;

}) {
	const { shippingList } = useAppSelector((state) => state.shippingSettings);
	const { t } = useTranslation();
	const [isActive, setIsActive] = useState(false);
	const dispatch = useAppDispatch();

	const isFixedRate = useWatch({
		control: formStore.control,
		name: 'shipping_rate_type',
	}) === 'Fixed';



	// useEffect(() => {
	// 	dispatch(getShippingList());
	// }, [dispatch]);

	if (!isActive) {
		return (
			<div>
				<Button
					variant='secondary'
					textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
					className='px-0 border-0'
					onClick={() => setIsActive(true)}
				>
					<FaCirclePlus className='size-5' />
					{t('Add more advanced shipping options')}
				</Button>
			</div>
		);
	}

	return (
		<>
			<h3 className='title'>{t('States of the product')}</h3>
			<FormChoiceChips<AddProductSchemaSchemaValues>
				formStore={formStore}
				name='state'
				options={['Fragile', 'Food', 'Solid', 'Needs lower temperature']}
			/>
			<h3 className='title'>{t('Shipping Rate')}</h3>
			<FormChoiceChips<AddProductSchemaSchemaValues>
				formStore={formStore}
				name='shipping_rate_type'
				options={['Fixed', 'Free shipping']}
			/>
			{isFixedRate && (
				<FormField
					formStore={formStore}
					name='shipping_rate'
					render={(field) => <Input {...field} type='number' />}
					label={{ children: t('Shipping Rate') }}
					container={{ className: 'md:w-1/2' }}
				/>
			)}
			<FormField
				formStore={formStore}
				name='shipping_method'
				label={{ children: t('Shipping Method'), className: 'font-medium text-[1.1rem]' }}
				render={(field) => {
					return (
						<div className='flex flex-wrap gap-2'>
							{['Dhl (main)', 'Aramex'].map((rate) => (
								<button
									type='button'
									key={rate}
									value={rate}
									className={`flex items-center gap-2 cursor-pointer rounded-full py-1.5 px-3.5 ${rate === field.value
										? 'bg-success text-white'
										: 'border border-success text-green bg-success/10'
										}`}
									onClick={() => {
										field.onChange(rate);
									}}
								>
									<span>{rate !== rate ? <FaCheck /> : <>+</>}</span>
									<span className='capitalize'>{rate}</span>
								</button>
							))}
						</div>
					);
				}}
			/>
			<div>
				<Button variant='tertiary' onClick={() => setIsActive(false)}>
					{t('Less Advanced Options')}
				</Button>
			</div>
		</>
	);
}
