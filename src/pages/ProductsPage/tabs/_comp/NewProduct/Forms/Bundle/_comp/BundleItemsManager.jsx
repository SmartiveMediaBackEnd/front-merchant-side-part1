import { useTranslation } from 'react-i18next';
import { Card, CardContent } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Button } from 'src/app/components/optimized';
import { useFieldArray } from 'react-hook-form';
import {
	SelectItem,
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import { TrashIcon } from 'lucide-react';


const bundleItemsExample = [
	{
		tempId: '1',
		quantity: 1,
		name: 'Product 1',
		imgUrl: 'https://via.placeholder.com/150',
	},
	{
		tempId: '2',
		quantity: 2,
		name: 'Product 2',
		imgUrl: 'https://via.placeholder.com/150',
	},
];

/**
 * @template TFormStore
 * @param {import('../types').Props<TFormStore>} props
 */
function BundleItemsManager(props) {
	const { t } = useTranslation();
	const { fields, append, remove } = useFieldArray({
		control: props.formStore.control,
		name: 'bundle.items',
	});

	const data = bundleItemsExample;

	const filteredData = data.filter(
		(item) => !fields.some((bundleItem) => bundleItem.tempId === item.tempId),
	);

	return (
		<>
			<div className='flex flex-col gap-4'>
				<FormField
					formStore={props.formStore}
					name='bundle.items'
					label={t('Products')}
					render={(field) => (
						<Select
							onValueChange={(value) => {
								const item = filteredData.find((item) => item.tempId === value);

								if (!item) return;

								append(item);
							}}
							value={''}
							required={field.required}
							name={field.name}
						>
							<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{filteredData.map((item) => (
									<SelectItem key={item.tempId} value={item.tempId}>
										<div className='flex gap-4'>
											<img
												src={item.imgUrl}
												alt={item.name}
												className='w-24 h-24 object-cover rounded-lg'
											/>
											<div className='flex flex-col gap-2 py-2'>
												<span>{item.name}</span>
											</div>
										</div>
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>

				{fields.map((item, index) => (
					<Card key={item.tempId} className='flex gap-4'>
						<CardContent className='flex gap-4 justify-between'>
							<div className='flex gap-4'>
								{item.imgUrl ? (
									<img
										src={item.imgUrl}
										alt={item.name}
										className='w-24 h-24 object-cover rounded-lg'
									/>
								) : (
									<div className='w-24 h-24 bg-gray-200 rounded-lg' />
								)}
								<div className='flex flex-col gap-2 py-2'>
									<span>{item.name}</span>
								</div>
							</div>

							{/* A button with a trash icon to remove the item */}
							<div className='py-2'>
								<Button
									variant='secondary'
									textClassName='flex gap-1.5 whitespace-nowrap w-fit h-fit'
									className='px-0 border-0'
									onClick={() => remove(index)}
								>
									<TrashIcon className='size-5' />
									<div className='sr-only'>{t('Remove')}</div>
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	);
}


export default BundleItemsManager;
