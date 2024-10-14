import { Autocomplete, AutocompleteValue, TextField } from '@mui/material';
import { SyntheticEvent } from 'react';

type props<T> = {
	array: T[];
	// errors: string;
	// isLoading: boolean;
	getvalue: (value: any[]) => void;
	name: string;
	MainValue: string | any;
	placeholder?: string
};

interface item {
	name: string;
}

function CustomAutoComplete<T extends item>({
	array,
	// isLoading,
	// errors,
	getvalue,
	name,
	MainValue,
	placeholder
}: props<T>) {
	return (
		<Autocomplete
			size='small'
			multiple
			disablePortal
			id='combo-box-demo'
			options={array}
			fullWidth
			getOptionLabel={(option: string | T) => (option as T).name}
			freeSolo
			onChange={(
				_: SyntheticEvent,
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				value: AutocompleteValue<T | any, T[], false, false>,
			) => {
				getvalue(value);
			}}
			value={MainValue}
			renderInput={(params) => (
				<TextField
					variant='outlined'
					{...params}
					id={name}
					placeholder={placeholder}
				// error={hasError(errors, name)}
				// helperText={getError(errors, name)}
				// disabled={isLoading}
				/>
			)}
		/>
	);
}

export default CustomAutoComplete;
