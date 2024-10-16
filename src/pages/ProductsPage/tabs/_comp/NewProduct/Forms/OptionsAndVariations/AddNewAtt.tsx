import React, { useState } from 'react';
import { Button } from 'src/app/components/optimized';
import { GlobalDialog } from 'src/app/components/shared';

import { Autocomplete } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type Props = {
	openDialog: boolean;
	setOpenDialog: any;
	attributes: any;
	formStore: any;
};

const AddNewAtt = ({ openDialog, setOpenDialog, attributes, formStore }: Props) => {
	const { t } = useTranslation();

	const [selectedAtt, setSelectedAtt] = useState<any>(null);
	const [value, setValue] = useState<string[] | undefined>(undefined);
	const [inputValue, setInputValue] = React.useState('');

	const { append } = useFieldArray({
		control: formStore.control,
		name: 'chosen_variants_options',
	});
	const chosen_variants_options = formStore.watch(`chosen_variants_options`);

	return (
		<GlobalDialog
			openDialog={openDialog}
			handleClose={() => setOpenDialog(false)}
			style={{
				width: {
					lg: '50%',
					md: '70%',
					xs: '90%',
				},
				height: { md: '400px', xs: '400px' },
			}}
		>
			<div className='flex-col-global  h-full'>
				<div>
					<div>
						<FormControl fullWidth>
							<InputLabel id='demo-simple-select-label'>Select Attrbuite</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={selectedAtt}
								label='Select Attrbuite'
								onChange={(e: SelectChangeEvent) => {
									setValue([]);
									setSelectedAtt(e.target.value);
								}}
							>
								{attributes
									?.filter((att) => !chosen_variants_options?.find((va) => va?.code === att?.code))
									?.map((e) => (
										<MenuItem key={e.code} value={e?.code}>
											{e.name}
										</MenuItem>
									))}
							</Select>
						</FormControl>
					</div>
					<div className='mt-2'></div>
				</div>
				<Autocomplete
					key={selectedAtt}
					multiple
					value={value}
					onChange={(event: any, newValue: any) => {
						setValue(newValue);
					}}
					inputValue={inputValue}
					onInputChange={(event, newInputValue) => {
						setInputValue(newInputValue);
					}}
					id='controllable-states-demo'
					options={attributes?.find((e) => e.code === selectedAtt)?.options || []}
					renderInput={(params) => (
						<TextField {...params} label={t('Attribute value')} placeholder='Favorites' />
					)}
				/>
				<div className='flex-end'>
					<Button
						variant='primary'
						type='button'
						onClick={() => {
							setOpenDialog(false);
							setSelectedAtt('');
							setValue([]);
							append({
								code: selectedAtt,
								attributeValues:
									value?.map((e) => {
										return {
											id: e?.id,
											name: e?.label,
										};
									}) || [],
							});

							// handleSaveSelections33({
							// 	code: selectedAtt,
							// 	attributeValues:
							// 		value?.map((e) => {
							// 			return {
							// 				id: e?.id,
							// 				name: e?.label,
							// 			};
							// 		}) || [],
							// 	sku: '',
							// 	en: {
							// 		name: '',
							// 	},
							// 	ar: {
							// 		name: '',
							// 	},
							// 	price: 0,
							// 	discount: 0,
							// 	color: '',
							// 	size: '',
							// 	status: 1,
							// 	quantity: 0,
							// 	inventories: [
							// 		{
							// 			id: 0,
							// 			quantity: 0,
							// 		},
							// 	],
							// });
						}}
					>
						{t('add')}
					</Button>
				</div>
			</div>
		</GlobalDialog>
	);
};

export default AddNewAtt;
