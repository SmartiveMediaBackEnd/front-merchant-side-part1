import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import DropDownMenu from 'src/app/components/optimized/DropDownMenu'
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { IProductFilters } from '../_hook/HookProductFilters';
import { UseFormReturn } from 'react-hook-form';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';
import { getCategoriesTable } from 'src/app/store/slices/productsPage/categories/categoriesTable/categoriesTableAsyncThunks';

const ProductFilterCategories = ({ formStore }: { formStore: UseFormReturn<IProductFilters> }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { categoriesTable } = useAppSelector((state) => state.categoriesTable);
    
    useEffect(() => {
		dispatch(getCategoriesTable());
	}, [dispatch]);
  return (
    <DropDownMenu title={t('Categories')}>
       <SelectFormField
                name='category_id'
                label={t('Categories')}
                formStore={formStore}
                options={categoriesTable.map((e: IProductFilters) => ({
                    label: e.name,
                    value: e.id.toString(),
                }))}
                placeholder={t('Select categories')}
            />
    </DropDownMenu>
  )
}

export default ProductFilterCategories;
