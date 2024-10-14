import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import DropDownMenu from 'src/app/components/optimized/DropDownMenu';

function valuetext(value: number) {
    return `${value}°C`;
}

const ProductFilterPrice = ({ formStore }: { formStore: UseFormReturn<IProductFilters>}) => {
    //  hooks
    const { t } = useTranslation();

    const sliderValue = [
		formStore.watch('min_price') || 20,
		formStore.watch('max_price') || 37,
	];

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		const [min, max] = newValue as number[];
		formStore.setValue('min_price', min);
		formStore.setValue('max_price', max);
	};

    return (
        <DropDownMenu title={t('Price')}>
           	<Slider
				getAriaLabel={() => 'Price range'}
				value={sliderValue}
				onChange={handleSliderChange}
				valueLabelDisplay='auto'
				getAriaValueText={valuetext}
				min={0}
				max={100} 
			/>
        </DropDownMenu>
    )
}

export default ProductFilterPrice;
