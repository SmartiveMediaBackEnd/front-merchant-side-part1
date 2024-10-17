import React, { useState } from 'react';
import AdvancedFields from './AdvancedFields';
import { RemoveIcon } from 'src/app/utils/icons';
import { cn } from 'src/app/utils';

type Props = {
	index: number;
	variation: any;
	formStore: any;
	remove: (index: number) => void;
};

const VariantRow = ({ index, variation, formStore, remove }: Props) => {
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const error = formStore?.formState?.errors?.variants?.[index];
	return (
		<>
			<li
				className={cn(
					'cardDetails-sharedClass cursor-pointer flex justify-between items-center py-3 px-5',
					error && 'border-red-500 border-2',
				)}
				onClick={() => {
					setOpenDialog(!openDialog);
				}}
			>
				<p className='text-title cursor-pointer'>{variation.code}</p>

				<button
					type='button'
					onClick={(e) => {
						e.stopPropagation();
						remove(index);
					}}
				>
					<RemoveIcon className='fill-error' />
				</button>
			</li>

			<AdvancedFields
				index={index}
				formStore={formStore}
				openDialog={openDialog}
				handleClose={() => setOpenDialog(false)}
			/>
		</>
	);
};

export default VariantRow;
