import { useTranslation } from 'react-i18next';
import Slider from '@mui/material/Slider';
import DropDownMenu from 'src/app/components/optimized/DropDownMenu';
import { IProductFilters } from '../_hook/HookProductFilters';
import { UseFormReturn } from 'react-hook-form';

function valuetext(value: number) {
	return `${value}°C`;
}

export default function ProductFilterQuantity({ formStore }: { formStore: UseFormReturn<IProductFilters>}) {
	// Hooks
	const { t } = useTranslation();

	const sliderValue = [
		formStore.watch('min_qty') || 20,
		formStore.watch('max_qty') || 37,
	];

	// Handle slider value change and update the form store
	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		const [min, max] = newValue as number[];
		formStore.setValue('min_qty', min);
		formStore.setValue('max_qty', max);
	};

	return (
		<DropDownMenu title={t('Quantity')}>
			<Slider
				getAriaLabel={() => 'Quantity range'}
				value={sliderValue}
				onChange={handleSliderChange}
				valueLabelDisplay='auto'
				getAriaValueText={valuetext}
				min={0}
				max={100} 
			/>
		</DropDownMenu>
	);
}
