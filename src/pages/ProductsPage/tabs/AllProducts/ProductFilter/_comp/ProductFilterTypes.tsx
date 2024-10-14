import { useTranslation } from 'react-i18next';
import DropDownMenu from 'src/app/components/optimized/DropDownMenu';
import { IProductFilters } from '../_hook/HookProductFilters';
import { UseFormReturn } from 'react-hook-form';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';

const ProductFilterTypes = ({ formStore }: { formStore: UseFormReturn<IProductFilters> }) => {
    const { t } = useTranslation();

    const types = [
        { id: 1, name: t('simple product') },
        { id: 2, name: t('configurable product') }, // Updated id to 2 to ensure uniqueness
    ];

    return (
        <DropDownMenu title={t('Type')}>
            <SelectFormField
                name='type'
                label={t('Type')}
                formStore={formStore}
                options={types.map(type => ({
                    label: type.name,
                    value: type.id.toString(),
                }))}
                placeholder={t('Select type')}
            />
        </DropDownMenu>
    );
};

export default ProductFilterTypes;

