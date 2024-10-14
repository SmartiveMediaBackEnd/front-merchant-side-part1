import { Checkbox } from '@mui/material';
import { MdIndeterminateCheckBox } from 'react-icons/md';

export default function CustomTableHeaderCheckbox({
	array,
	mainArray,
	setArray,
}: {
	array: string[];
	mainArray: string[];
	setArray: (e: string[]) => void;
}) {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
	return array?.length > 0 && array?.length !== mainArray?.length ? (
		<Checkbox
			{...label}
			icon={<MdIndeterminateCheckBox className='text-blue text-[1.5rem]' />}
			checkedIcon={<MdIndeterminateCheckBox className='text-blue text-[1.5rem]' />}
			checked={array?.length > 0 && array?.length !== mainArray?.length}
			onChange={() => {
				if (array?.length !== mainArray?.length) {
					setArray([]);
				} else {
					setArray([]);
				}
			}}
		/>
	) : (
		<Checkbox
			checked={array?.length === mainArray?.length}
			onChange={() => {
				if (array?.length !== mainArray?.length) {
					setArray(mainArray);
				} else {
					setArray([]);
				}
			}}
		/>
	);
}
