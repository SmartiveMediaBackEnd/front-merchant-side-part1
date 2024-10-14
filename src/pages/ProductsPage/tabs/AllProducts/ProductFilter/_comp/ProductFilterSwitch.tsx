import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import { IProductFilters } from '../_hook/HookProductFilters';
import { UseFormReturn } from 'react-hook-form';
import DropDownMenu from 'src/app/components/optimized/DropDownMenu';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const ProductFilterSwitch = ({ formStore }: { formStore: UseFormReturn<IProductFilters> }) => {
    const { t } = useTranslation();

    useEffect(() => {
        const fields = [
            'shipped',
            'taxable',
            'out_of_stock',
            'best_reviews',
            'less_reviews',
            'best_selling',
            'less_selling',
            'most_viewed',
            'less_viewed',
        ];

        fields.forEach((field) => {
            formStore.setValue(field, formStore.watch(field) ? 1 : 0);
        });
    }, [formStore]);

    const filterFields = [
        { name: 'shipped', description: 'shipped' },
        { name: 'taxable', description: 'taxable' },
        { name: 'out_of_stock', description: 'out of stock' },
        { name: 'best_reviews', description: 'best reviews' },
        { name: 'less_reviews', description: 'less reviews' },
        { name: 'best_selling', description: 'best selling' },
        { name: 'less_selling', description: 'less selling' },
        { name: 'most_viewed', description: 'most viewed' },
        { name: 'less_viewed', description: 'less viewed' },
    ];

    return (
        <DropDownMenu title={t('Product Status')}>
            {filterFields.map((field) => (
                <div className='flex-row-global gap-4 mb-4'>
                    <FormSwitchField<IProductFilters>
                        key={field.name}
                        formStore={formStore}
                        name={field.name}

                        enable
                    />
                    <p className='text-title text-sm'>{t(field.description)}</p>
                </div>
            ))}
        </DropDownMenu>
    )
}

export default ProductFilterSwitch;
