import { Checkbox } from '@mui/material';
import { TrashIcon } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaCirclePlus } from 'react-icons/fa6';
import { Accordion } from 'src/app/components/ui/accordion';
import CustomAccordionItem from 'src/app/components/ui/accordion/custom-item';
import FormField from 'src/app/components/ui/form/field';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';
import { updateVariations } from './updateVariations';

/**
 * @template TFormStore
 *
 * @param {import('../types').Props<TFormStore>} props
 */
export default function OptionsList(props) {
	const { t } = useTranslation();
	const { fields, remove, update } = useFieldArray({
		control: props.formStore.control,
		name: 'options',
	});

	return (
		<>
			<Accordion type='multiple' className='flex flex-col gap-4'>
				{fields.map((option, index) => (
					<CustomAccordionItem
						start={{ trigger: option.name }}
						end={{
							before: (
								<button
									type='button'
									onClick={() => {
										remove(index);
										updateVariations(props.formStore);
									}}
								>
									<TrashIcon />
								</button>
							),
						}}
						key={option.tempId}
						value={option.tempId}
					>
						<div className='flex flex-col gap-4'>
							<div className='flex items-center justify-between gap-4'>
								{/* <button type='button' className='flex gap-2 items-center'>
									<FaCirclePlus className='size-5' />
									{t('Add Another Value')}
								</button> */}

								<FormField
									formStore={props.formStore}
									name={`options.${index}.isRequired`}
									label={t('Required')}
									render={({ value, ...field }) => (
										<Checkbox
											{...field}
											checked={value}
											onChange={(e) => {
												const oldItem = fields[index];
												update(index, { ...oldItem, isRequired: e.target.checked });
												updateVariations(props.formStore);
											}}
											style={{ gridArea: 'input', padding: 0 }}
											className='justify-self-start'
										/>
									)}
									layout='inline-reversed'
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<strong>{t('In stock')}</strong>
							</div>
							<div className='flex flex-col '>
								<div className='grid grid-cols-6 grid-col-[3fr_1fr_1fr] items-end md:gap-8 gap-4 pb-4'>
									<p className='col-span-3 md:text-sm text-[.6rem]'>{t('Option Values')}</p>
									<p className='col-span-2 md:text-sm text-[.6rem]'>{t('Difference in price')}</p>
									<p className='md:text-sm text-[.6rem]'>{t('Actions')}</p>
								</div>
								{option.values.map((value, valueIndex) => (
									<div
										key={value.tempId}
										className='grid grid-cols-6 grid-col-[3fr_1fr_1fr] items-end md:gap-8 gap-10'
									>
										<div className='flex items-center gap-4 col-span-3 pb-4'>
											<div
												className='size-4  rounded-full flex translate-y-3/4   '
												style={{ backgroundColor: value.value }}
											/>
											<TabbedFormField
												formStore={props.formStore}
												container={{ className: 'flex-grow  -translate-x-[13px]' }}
												keys={[
													{ name: `options.${index}.values.${valueIndex}.nameEn`, label: 'En' },
													{
														name: `options.${index}.values.${valueIndex}.nameAr`,
														label: 'عربي',
													},
												]}
												renderer={(field) => <Input {...field} />}
											/>
										</div>
										<div className='pb-4 col-span-2'>
											<FormField
												formStore={props.formStore}
												name={`options.${index}.values.${valueIndex}.differentInPrice`}
												container={{ className: 'flex-grow' }}
												render={(field) => (
													<Input {...field} value={field.value ?? 0} type='number' />
												)}
											/>
										</div>
										<div className='pb-7 flex'>
											<button
												type='button'
												onClick={() => {
													const newValues = option.values.filter(
														(item) => item.tempId !== value.tempId,
													);
													update(index, { ...option, values: newValues });
												}}
											>
												<TrashIcon />
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</CustomAccordionItem>
				))}
			</Accordion>
		</>
	);
}
