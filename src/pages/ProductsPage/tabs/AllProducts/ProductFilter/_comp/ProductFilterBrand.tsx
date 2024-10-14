import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import DropDownMenu from 'src/app/components/optimized/DropDownMenu'
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getBrandsTable } from 'src/app/store/slices/productsPage/brands/brandsAsyncThunks';
import { IProductFilters } from '../_hook/HookProductFilters';
import { UseFormReturn } from 'react-hook-form';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';

const ProductFilterBrand = ({ formStore }: { formStore: UseFormReturn<IProductFilters> }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { brands } = useAppSelector((state) => state.brands);
    useEffect(() => {
		dispatch(getBrandsTable());
	}, [dispatch]);
  return (
    <DropDownMenu title={t('Brands')}>
      <SelectFormField
        name='brand_id'
        label={t('Brands')}
        formStore={formStore}
        options={brands.map((e: IProductFilters) => ({
          label: e.name,
          value: e.id.toString(),
        }))}
        placeholder={t('Select brands')}
      />
    </DropDownMenu>
  )
}

export default ProductFilterBrand;
