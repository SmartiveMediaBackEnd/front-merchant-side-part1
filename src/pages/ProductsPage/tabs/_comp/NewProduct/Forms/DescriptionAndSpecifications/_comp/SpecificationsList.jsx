import { useTranslation } from 'react-i18next';
import { useFieldArray } from 'react-hook-form';
import { Accordion } from 'src/app/components/ui/accordion';
import CustomAccordionItem from 'src/app/components/ui/accordion/custom-item';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Textarea } from 'src/app/components/ui/textarea';
import { Input } from 'src/app/components/ui/input';
import { TrashIcon } from 'lucide-react';

/**
 * @template TFormStore
 *
 * @param {import('../types.ts').Props<TFormStore>} props
 */
function SpecificationsList(props) {
	const { t } = useTranslation();
	const { fields, remove } = useFieldArray({
		control: props.formStore.control,
		name: 'specifications',
	});

	return (
		<Accordion type='multiple' defaultValue={[fields[0]?.tempId]} className='flex flex-col gap-4'>
			{fields.map((item, index) => (
				<CustomAccordionItem
					start={{ trigger: item.specNameEn }}
					end={{
						before: (
							<button
								type='button'
								onClick={() => {
									remove(index);
								}}
							>
								<TrashIcon />
							</button>
						),
					}}
					key={item.tempId}
					value={item.tempId}
				>
					<div className='flex flex-col gap-4 md:w-1/2'>
						<TabbedFormField
							formStore={props.formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `specifications.${index}.specNameEn`, label: 'En' },
								{ name: `specifications.${index}.specNameAr`, label: 'عربي' },
							]}
							label={t('Specification')}
							renderer={(field) => <Input {...field} />}
						/>
						<TabbedFormField
							formStore={props.formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `specifications.${index}.specValueEn`, label: 'En' },
								{ name: `specifications.${index}.specValueAr`, label: 'عربي' },
							]}
							label={t('Answer')}
							renderer={(field) => <Textarea {...field} />}
						/>
					</div>
				</CustomAccordionItem>
			))}
		</Accordion>
	);
}
export default SpecificationsList;
