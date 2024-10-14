
import { FaCirclePlus } from 'react-icons/fa6';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from "react-i18next";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import TabbedFormField from "src/app/components/ui/form/tabbed-field";
import { Input } from "src/app/components/ui/input";
import DropDownMenu from 'src/app/components/optimized/DropDownMenu';
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { LiaTrashAlt } from 'react-icons/lia';
import { SpecificationsInterface } from '../_hook/hookForSpecifications';
import { AddProductSchemaSchemaValues } from '../../../Pages/Configurable/utils';

const TextFieldForm = ({ formStore }: { formStore: UseFormReturn<AddProductSchemaSchemaValues>; }) => {
    const { t } = useTranslation();
    const [titles, setTitles] = useState<{ [key: number]: string }>({});
    const { fields, append, remove } = useFieldArray({
        control: formStore.control,
        name: 'specifications',
    });

    const specificationsAppend = () => {
        append({
            name_ar: '',
            value_ar: '',
            name_en: '',
            value_en: '',
        });
    };

    useEffect(() => {
        const subscription = formStore.watch((value) => {
            const newTitles = fields.reduce((acc, _, index) => {
                const nameEn = value?.specifications?.[index]?.name_en || 'Specifications';
                const valueEn = value?.specifications?.[index]?.value_en || '';
                return { ...acc, [index]: `${nameEn}: ${valueEn}` };
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
                            title={titles[index] || 'Specifications'}
                        >
                            <div className='flex-col-global '>
                                <TabbedFormField
                                    formStore={formStore}
                                    keys={[
                                        {
                                            name: `specifications.${index}.name_en`, label: 'En'
                                        },
                                        {
                                            name: `specifications.${index}.name_ar`, label: 'عربي'
                                        },
                                    ]}
                                    label={t('Specifications Name')}
                                    renderer={(field) => <Input {...field} />}
                                />

                                <TabbedFormField
                                    formStore={formStore}
                                    keys={[
                                        {
                                            name: `specifications.${index}.value_en`, label: 'En'
                                        },
                                        {
                                            name: `specifications.${index}.value_ar`, label: 'عربي'
                                        },
                                    ]}
                                    label={t('Specifications Value')}
                                    renderer={(field) => <Input {...field} />}
                                />
                            </div>
                            {formStore.watch(`specifications.${index}.name_en`) && (
                                <div className='mt-2'>
                                    <Button
                                        variant='tertiary'
                                        onClick={() => {
                                            formStore.setValue(`specifications.${index}.name_ar`, '');
                                            formStore.setValue(`specifications.${index}.name_en`, '');
                                            formStore.setValue(`specifications.${index}.value_en`, '');
                                            formStore.setValue(`specifications.${index}.value_ar`, '');
                                        }}
                                    >
                                        {t('discard')}
                                    </Button>
                                </div>
                            )}
                        </DropDownMenu>
                    </div>
                ))
            }

            {/* {fields?.length > 0 &&
                <div>
                    <Button variant='primary' onClick=>
                    {t('save')}
                </Button>
                </div>
            } */}
            <div className='mt-2'>
                <Button variant='secondary' LeftIcon={FaCirclePlus} type="button" onClick={specificationsAppend}>
                    {fields.length > 0 ? t('add more specifications') : t('add specification')}
                </Button>
            </div>
        </div >
    );
}
export default TextFieldForm;