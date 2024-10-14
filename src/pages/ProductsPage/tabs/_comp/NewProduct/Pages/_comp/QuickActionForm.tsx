import { UseFormReturn } from "react-hook-form"
import { AddProductSchemaSchemaValues } from "../Configurable/utils"
import FormSwitchField from "src/app/components/ui/form/FormSwitchField";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import Featured from "src/app/components/optimized/UiKits/Featured";

const QuickActionForm = ({ formStore }: { formStore: UseFormReturn<AddProductSchemaSchemaValues> }) => {
    const { t } = useTranslation();
    useMemo(() => {
        formStore.setValue('status', formStore.watch('status') ? 1 : 0);
    }, [formStore.watch('status')]);

    useMemo(() => {
        formStore.setValue('featured', formStore.watch('featured') ? 1 : 0);
    }, [formStore.watch('featured')]);
    return (
        <div className='global-cards h-fit gap-[1.5rem]'>
            <h2 className='title'>{t('Quick actions')}</h2>
            <div className='flex-col-global gap-[1rem]'>
                <div className='flex-row-global gap-4'>
                    <FormSwitchField<AddProductSchemaSchemaValues> formStore={formStore} name='status' enable />
                    <p>{t('Available on store')}</p>
                </div>

                <div className='flex-row-global gap-4 md:px-4'>
                    <Featured formStore={formStore} name='featured' />
                </div>
            </div>

        </div >
    )
}

export default QuickActionForm
