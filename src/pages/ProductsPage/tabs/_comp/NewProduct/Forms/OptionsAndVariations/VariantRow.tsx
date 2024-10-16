import React, { useState } from 'react';
import AdvancedFields from './AdvancedFields';
import { RemoveIcon } from 'src/app/utils/icons';

type Props = {
	index: number;
	variation: any;
	formStore: any;
};

const VariantRow = ({ index, variation, formStore }: Props) => {
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	return (
		<li className='cardDetails-sharedClass flex justify-between items-center py-3 px-5'>
			<p
				onClick={() => {
					setOpenDialog(!openDialog);
				}}
				className='text-title cursor-pointer'
			>
				{variation.code}
			</p>

			<button
				type='button'
				// onClick={() => removeVariation(index)}
			>
				<RemoveIcon className='fill-error' />
			</button>

			{/* <AdvancedFields
				index={index}
				formStore={formStore}
				openDialog={openDialog}
				handleClose={() => setOpenDialog(false)}
			/> */}
		</li>
	);
};

export default VariantRow;
