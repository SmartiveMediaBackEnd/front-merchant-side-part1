import { useTranslation } from 'react-i18next';
import { Button, SubHeader } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import {
    SubHeaderDefaultBtns,
    SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useEffect, useState } from 'react';
import FamilyInfo from './FamilyInfo';
import AddGroups from './AddGroups';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import useCustomHookAttributeFamily, { IAddAttributeFamilies } from '../_hook/HookAddAttributeFamilies';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import { getAttributeFamiliesShow, postAttributeFamilies, putAttributeFamilies } from 'src/app/store/slices/Attributes/AttributeFamilies/attributeFamiliesAsyncThunks';
import { useFieldArray } from 'react-hook-form';
import { AddFillIcon } from 'src/app/utils/icons';

const AttributeFamilyForm = () => {
    // Hooks
    const [initialGroup, setInitialGroup] = useState<any>({});
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    // Custom hook
    const { handleDefaultValue, AttributeFamilySchema } = useCustomHookAttributeFamily();
    const dispatch = useAppDispatch();
    const { isLoadingAddOrUpdate, attributeFamiliesShow } = useAppSelector((state) => state.attributesFamilies);

    const handleSubmit = (values: IAddAttributeFamilies) => {
        console.log(values);
        const groupsFormatted = values.attribute_groups?.reduce((acc: any, option: any, index: number) => {
            acc[`group_${(index += 1)}`] = option;
            return acc;
        }, {});
        let SendingData = { ...values, attribute_groups: groupsFormatted };

        id
            ? dispatch(putAttributeFamilies({ data: SendingData, id })).then((promiseResponse) => {
                if (promiseResponse.payload.code === 200) {
                    navigate(-1);
                }
            })
            : dispatch(postAttributeFamilies(SendingData)).then((promiseResponse) => {
                if (promiseResponse.payload.code === 200) {
                    navigate(-1);
                }
            });
    };

    const { formStore, onSubmit } = useForm({
        schema: AttributeFamilySchema,
        handleSubmit: handleSubmit,
        defaultValues: handleDefaultValue(),
    });

    useEffect(() => {
        if (id) {
            dispatch(getAttributeFamiliesShow(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (id) {
            formStore.setValue('code', attributeFamiliesShow?.code || '');
            formStore.setValue('name', attributeFamiliesShow?.name || '');

            if (attributeFamiliesShow.attribute_groups) {
                const updatedGroups = attributeFamiliesShow.attribute_groups.reduce((acc, opt, index) => {
                    acc[`group_${index}`] = {
                        name: opt.name || '',
                        position: opt.position || '',
                        is_user_defined: opt.is_user_defined > 0 ? 1 : 0,
                        custom_attributes: opt.custom_attributes || '',
                    };
                    return acc;
                }, {});
                setInitialGroup(updatedGroups);
            }
        }
    }, [id, attributeFamiliesShow, formStore]);

    // const { fields, append, remove } = useFieldArray({
    //     control: formStore.control,
    //     name: 'attribute_groups',
    // });

  

    return (
        <Form {...formStore}>
            <form onSubmit={onSubmit} className='flex-col-global'>
                <SubHeader title={t('Add Family')}>
                    <SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
                </SubHeader>
                <div className='custom_container custom-grid-parent'>
                    <div className=' flex-col-global grid-left'>
                        <FamilyInfo formStore={formStore} />
                        <AddGroups
                            onSubmit={onSubmit}
                            formStore={formStore}
                            label={formStore.watch('attribute_groups')?.length > 0 ? t('Add More Group') : t('Add Group')}
                        />
                    </div>
                    <div>
                        <Button variant='secondary' LeftIcon={AddFillIcon}>{t('Add Attribute')}</Button>
                    </div>
                </div>
                <div className='flex-btn-end px-5'>
                    <SubHeaderMobileBtns onSubmit={onSubmit} />
                </div>
            </form>
        </Form>
    );
}

export default AttributeFamilyForm;

