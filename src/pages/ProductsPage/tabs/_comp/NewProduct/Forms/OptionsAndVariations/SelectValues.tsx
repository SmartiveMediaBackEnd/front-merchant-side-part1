import { Autocomplete } from '@mui/material';
import React, { useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';

type Props = {
	attributes: any;
	code: string;
	values: string[] | undefined;
	formStore: any;
	index: number;
};

const SelectValues = ({ index, attributes, code, values, formStore }: Props) => {
	const { t } = useTranslation();
	const [inputValue, setInputValue] = React.useState('');

	const { update, remove } = useFieldArray({
		control: formStore.control,
		name: 'chosen_variants_options',
	});
	const chosen_variants_options = formStore.watch(`chosen_variants_options`);

	const chosenIds = chosen_variants_options[index]?.attributeValues?.map((item) => item.id);

	const chosenItems = attributes
		?.find((e) => e.code === code)
		?.options.filter((item) => !chosenIds.includes(item.id))
		?.map((e) => {
			return {
				id: e.id,
				name: e.label,
			};
		});

	return (
		<div className='flex-col-global mt-4  h-full'>
			<Autocomplete
				key={code}
				multiple
				value={chosen_variants_options[index]?.attributeValues || []}
				onChange={(event: any, newValue: string | null) => {
					if (newValue) {
						update(index, { code: code, attributeValues: newValue });
						if (newValue?.length < 1) remove(index);
					}
				}}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
				getOptionLabel={(option) => option.name || option.label}
				options={chosenItems || []}
				renderInput={(params) => <TextField {...params} label={code} placeholder='Favorites' />}
			/>
		</div>
	);
};

export default SelectValues;
