import { FAQs } from '../_hook/hookForFaqs';
import { FaCirclePlus } from 'react-icons/fa6';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { useFieldArray, UseFormReturn } from 'react-hook-form';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';
import Textarea from 'src/app/components/optimized/InputsFields/Textarea';
import DropDownMenu from 'src/app/components/optimized/DropDownMenu';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { LiaTrashAlt } from 'react-icons/lia';
import { AddProductSchemaSchemaValues } from '../../../Pages/Configurable/utils';

const TextFieldForm = ({
	formStore,
}: {
	formStore: UseFormReturn<AddProductSchemaSchemaValues>;
}) => {
	const { t } = useTranslation();

	const [titles, setTitles] = useState<{ [key: number]: string }>({});
	const { fields, append, remove } = useFieldArray({
		control: formStore.control,
		name: 'faqs',
	});

	const faqs = () => {
		append({
			question_ar: '',
			answer_ar: '',
			question_en: '',
			answer_en: '',
		});
	};

	useEffect(() => {
		const subscription = formStore.watch((value) => {
			const newTitles = fields.reduce((acc, _, index) => {
				const questionEn = value?.faqs?.[index]?.question_en || 'Q&A';
				return { ...acc, [index]: questionEn };
			}, {});
			setTitles(newTitles);
		});

		return () => subscription.unsubscribe();
	}, [fields, formStore]);

	return (
		<div className='flex-col-global'>
			{fields?.length > 0 &&
				fields.map((field, index) => (
					<div className='global-cards p-0' key={field.id}>
						<DropDownMenu
							addCompo={
								<LiaTrashAlt
									onClick={() => {
										remove(index);
									}}
									className='iconClass text-title'
								/>
							}
							variant
							title={titles[index] || 'Q&A'}
						>
							<div className='flex-col-global '>
								<TabbedFormField
									formStore={formStore}
									keys={[
										{
											name: `faqs.${index}.question_en`,
											label: 'En',
										},
										{
											name: `faqs.${index}.question_ar`,
											label: 'عربي',
										},
									]}
									label={t('Question')}
									renderer={(field) => <Input {...field} />}
								/>

								<TabbedFormField
									formStore={formStore}
									keys={[
										{
											name: `faqs.${index}.answer_en`,
											label: 'En',
										},
										{
											name: `faqs.${index}.answer_ar`,
											label: 'عربي',
										},
									]}
									label={t('Answer')}
									renderer={(field) => <Textarea {...field} />}
								/>
							</div>
							{formStore.watch(`faqs.${index}.question_en`) && (
								<div className='mt-2'>
									<Button
										variant='tertiary'
										onClick={() => {
											formStore.setValue(`faqs.${index}.question_ar`, '');
											formStore.setValue(`faqs.${index}.answer_ar`, '');
											formStore.setValue(`faqs.${index}.question_en`, '');
											formStore.setValue(`faqs.${index}.answer_en`, '');
										}}
									>
										{t('discard')}
									</Button>
								</div>
							)}
						</DropDownMenu>
					</div>
				))}

			{/* {
                fields?.length > 0 &&
                <div>
                    <Button variant='primary' onClick={onSubmit}>
                        {t('save')}
                    </Button>
                </div>
            } */}

			<div className='mt-2'>
				<Button variant='secondary' LeftIcon={FaCirclePlus} type='button' onClick={faqs}>
					{fields.length > 0 ? t('add more questions') : t('add question')}
				</Button>
			</div>
		</div>
	);
};
export default TextFieldForm;
