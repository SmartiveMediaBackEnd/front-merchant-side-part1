import useResponsive from "src/app/utils/hooks/useResponsive";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormField from "src/app/components/ui/form/field";
import { Input } from "src/app/components/ui/input";
import { IAddAttributeFamilies } from "../_hook/HookAddAttributeFamilies";


const FamilyInfo = ({ formStore }: { formStore: UseFormReturn<IAddAttributeFamilies> }) => {
    const { xs } = useResponsive();
    const { t } = useTranslation();

    return (
        <div className='global-cards gap-[1.2rem]'>
            <h3 className='title'>{t('Attribute Info')}</h3>
            <div className={`w-full ${xs ? 'flex-col-global' : 'flex gap-4'}`}>
                <div className='w-full lg:w-1/2'>
                    <FormField
                        formStore={formStore}
                        name='code'
                        label={t('Family Code')}
                        render={(field) => <Input {...field} placeholder={t('Enter group name')} />}
                    />
                </div>
                <div className='w-full lg:w-1/2'>
                    <FormField
                        formStore={formStore}
                        name='name'
                        label={t('Family Name')}
                        render={(field) => <Input {...field} placeholder={t('Enter code')} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default FamilyInfo;


