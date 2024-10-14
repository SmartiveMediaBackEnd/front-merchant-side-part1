import React, { useState } from 'react';
import { Button } from 'src/app/components/optimized';
import { IoAddCircle, IoClose } from 'react-icons/io5';
import OptionSwitcher from './OptionSwitcher';
import MoreOption from './MoreOption';

interface Option {
	value: string;
	priceDifference: number;
	path?: string;
}

const OptionsAndVariationsFull = () => {
	const [optionName, setOptionName] = useState('');
	const [optionValues, setOptionValues] = useState<{ value: string; priceDifference: string }[]>(
		[],
	);

	const [colorOptions, setColorOptions] = useState<Option[]>([
		{ value: 'red', priceDifference: 50 },
		{ value: 'blue', priceDifference: 50 },
	]);

	const [sizeOptions, setSizeOptions] = useState<Option[]>([
		{ value: 'Large', priceDifference: -50, path: '' },
		{ value: 'Medium', priceDifference: -50, path: '' },
	]);

	// moreOption - addOption - mainComp
	const [activeComp, setActiveComp] = useState('mainComp');

	const options = ['Size', 'Color', 'Add new'];

	const [types, setTypes] = useState({
		dropdown: '',
		radio: '',
		checkbox: [],
		text: '',
		image: '',
		color: '',
	});

	const handleAddValue = () => {
		if (optionName) {
			if (optionName === 'Color') {
				if (!optionValues.some((option) => option.value === 'blue')) {
					setOptionValues([...optionValues, { value: 'blue', priceDifference: '' }]);
				}
			} else if (optionName === 'Size') {
				const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
				const newSizes = sizes.filter(
					(size) => !optionValues.some((option) => option.value === size),
				);
				setOptionValues([
					...optionValues,
					...newSizes.map((size) => ({ value: size, priceDifference: '' })),
				]);
			} else {
				if (!optionValues.some((option) => option.value === optionName)) {
					setOptionValues([...optionValues, { value: optionName, priceDifference: '' }]);
				}
			}
		}
	};
	return (
		<div className='w-full mx-auto mt-10 p-6 bg-white border rounded shadow'>
			<h2 className='text-xl font-semibold mb-4'>Options & variations</h2>

			<p className='text-gray-600 mb-6'>
				Allow your customers to select from options such as Size and Color on your website.
			</p>

			{activeComp === 'mainComp' && (
				<Button
					onClick={() => {
						setActiveComp('addOption');
					}}
					variant='secondary'
					LeftIcon={<IoAddCircle size={25} />}
				>
					Add Option
				</Button>
			)}

			{activeComp === 'addOption' && (
				<div className='flex'>
					<div className='w-4/6'>
						<div className='mb-4 w-full'>
							<label className='block text-sm font-medium text-gray-700 mb-1' htmlFor='option-name'>
								Option name
							</label>
							<select
								id='option-name'
								value={optionName}
								onChange={(e) => setOptionName(e.target.value)}
								className='w-full px-3 py-2 border border-gray-300 rounded'
							>
								<option value='' disabled>
									Select Size, Color or add new
								</option>
								{options.map((option, index) => (
									<option key={index} value={option}>
										{option}
									</option>
								))}
							</select>
						</div>

						<div className='mb-4 w-full'>
							<label
								className='block text-sm font-medium text-gray-700 mb-1'
								htmlFor='option-value'
							>
								Option value
							</label>
							<div className='flex items-center relative'>
								<input
									id='option-value'
									type='text'
									value={optionName}
									onChange={(e) => setOptionName(e.target.value)}
									placeholder='Select or add new'
									className='flex-grow px-3 py-2 border border-gray-300 rounded capitalize'
								/>
								<button
									type='button'
									onClick={handleAddValue}
									className='ms-1 px-1 py-2 bg-blue-600 rounded'
								>
									<IoAddCircle size={30} />
								</button>
							</div>
							<div className='flex flex-wrap mt-2'>
								{optionValues.map((value, index) => (
									<span
										key={index}
										className='mr-2 mt-2 flex items-center bg-light-2 text-black px-3 py-1 rounded-sm'
									>
										<div className='flex-row-global'>
											<p>{value.value}</p>
										</div>
										<button
											type='button'
											onClick={() => setOptionValues(optionValues.filter((_, i) => i !== index))}
											className='ms-2'
										>
											<IoClose size={15} />
										</button>
									</span>
								))}
							</div>
						</div>
						<div className='flex justify-start gap-2'>
							<Button
								onClick={() => {
									setActiveComp('moreOption');
								}}
								variant='primary'
							>
								Add
							</Button>
							<Button onClick={() => setActiveComp('mainComp')} variant='secondary'>
								Discard
							</Button>
						</div>
					</div>

					<div className='w-3/6'>
						<OptionSwitcher types={types} setTypes={setTypes} />
					</div>
				</div>
			)}

			{activeComp === 'moreOption' && (
				<MoreOption
					colorOptions={colorOptions}
					setColorOptions={setColorOptions}
					sizeOptions={sizeOptions}
					setSizeOptions={setSizeOptions}
					setActiveComp={setActiveComp}
					activeComp={activeComp}
				/>
			)}
		</div>
	);
};

export default OptionsAndVariationsFull;
