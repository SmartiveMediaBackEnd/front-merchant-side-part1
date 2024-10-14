import { Checkbox } from '@mui/material';

export default function CustomTableBodyCheckbox({
	array,
	setArray,
	id,
}: {
	array: string[];
	setArray: (e: string[]) => void;
	id: string;
}) {
	return (
		<Checkbox
			onChange={() => {
				if (array.includes(id)) {
					// formStore && formStore.setValue('storePermissions', array);
					setArray(array.filter((el) => el !== id));
				} else {
					// formStore && formStore.setValue('storePermissions', array);
					setArray([id, ...array]);
				}
			}}
			checked={array.includes(id)}
		/>
	);
}
