import { useState } from 'react';
import { getImageUrl } from 'src/app/utils';
import Checkbox2 from './CheckBox2';

const OptionSwitcher = ({ types, setTypes }) => {
	const [optionType, setOptionType] = useState('dropdown');

	const handleDropdownChange = (e) => {
		setTypes((prevValues) => ({
			...prevValues,
			dropdown: e.target.value,
		}));
	};

	const handleRadioChange = (e) => {
		setTypes((prevValues) => ({
			...prevValues,
			radio: e.target.value,
		}));
	};

	const handleCheckboxChange = (value, isChecked) => {
		if (isChecked) {
			setTypes((prevValues) => ({
				...prevValues,
				checkbox: [...prevValues.checkbox, value],
			}));
		} else {
			setTypes((prevValues) => ({
				...prevValues,
				checkbox: prevValues.checkbox.filter((item) => item !== value),
			}));
		}
	};
	const handleTextChange = (value) => {
		setTypes((prevValues) => ({
			...prevValues,
			text: value,
		}));
	};

	const handleImageChange = (value) => {
		setTypes((prevValues) => ({
			...prevValues,
			image: value,
		}));
	};

	const handleColorChange = (value) => {
		setTypes((prevValues) => ({
			...prevValues,
			color: value,
		}));
	};

	return (
		<div className='p-4 w-full'>
			<div className='mb-4'>
				<label className='block text-gray-700'>Option type</label>
				<select
					value={optionType}
					onChange={(e) => setOptionType(e.target.value)}
					className='mt-1 block w-full p-2 border border-inactive rounded-md'
				>
					<option value='dropdown'>Dropdown</option>
					<option value='radio'>Radio button</option>
					<option value='checkbox'>Checkbox</option>

					<option value='text'>Text option</option>
					<option value='image'>Image</option>
					<option value='color'>Color</option>
				</select>
			</div>

			{optionType === 'dropdown' && (
				<OptionContainer>
					<div className='p-4 border border-inactive rounded-md '>
						<label className='block text-gray-700'>Dropdown</label>
						<select
							value={types.dropdown}
							onChange={handleDropdownChange}
							className='mt-1 block w-full p-2 border border-inactive rounded-md'
						>
							<option value=''>Select option</option>
							<option value='option1'>Option 1</option>
							<option value='option2'>Option 2</option>
							<option value='option3'>Option 3</option>
						</select>
					</div>
				</OptionContainer>
			)}

			{optionType === 'radio' && (
				<OptionContainer>
					<div className='p-4 border border-inactive rounded-md '>
						<label className='block text-gray-700'>Radio button</label>
						<div className='mt-2'>
							<label className='inline-flex items-center'>
								<input
									type='radio'
									name='option'
									className='form-radio'
									value='charger'
									checked={types.radio === 'charger'}
									onChange={handleRadioChange}
								/>
								<span className='ml-2'>Charger</span>
							</label>
							<label className='inline-flex items-center ms-6'>
								<input
									type='radio'
									name='option'
									className='form-radio'
									value='mouse'
									checked={types.radio === 'mouse'}
									onChange={handleRadioChange}
								/>
								<span className='ml-2'>Mouse</span>
							</label>
							<label className='inline-flex items-center ms-6'>
								<input
									type='radio'
									name='option'
									className='form-radio'
									value='earphone'
									checked={types.radio === 'earphone'}
									onChange={handleRadioChange}
								/>
								<span className='ml-2'>Earphone</span>
							</label>
						</div>
					</div>
				</OptionContainer>
			)}

			{optionType === 'checkbox' && (
				<OptionContainer>
					<div className='p-4 border border-gray-300 rounded-md'>
						<label className='block text-gray-700'>Checkbox</label>
						<div className='mt-2'>
							<Checkbox2
								label='Charger'
								value='charger'
								isChecked={types?.checkbox?.includes('charger')}
								onChange={handleCheckboxChange}
							/>

							<Checkbox2
								label='Mouse'
								value='mouse'
								isChecked={types?.checkbox?.includes('mouse')}
								onChange={handleCheckboxChange}
							/>
							<Checkbox2
								label='Earphone'
								value='earphone'
								isChecked={types?.checkbox?.includes('earphone')}
								onChange={handleCheckboxChange}
							/>
						</div>
					</div>
				</OptionContainer>
			)}

			{optionType === 'text' && (
				<OptionContainer>
					<div className='p-4 border border-inactive rounded-md '>
						<label className='block text-gray-700'>Text Option</label>
						<div className='mt-2 flex space-x-4'>
							{['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
								<button
									key={size}
									className={`px-4 py-2 border rounded-md ${
										types.text === size ? 'bg-primary text-white' : ''
									}`}
									onClick={() => types.text !== size && handleTextChange(size)}
								>
									{size}
								</button>
							))}
						</div>
					</div>
				</OptionContainer>
			)}

			{optionType === 'image' && (
				<OptionContainer>
					<div className='p-4 border border-inactive rounded-md '>
						<label className='block text-gray-700'>Image Option</label>
						<div className='mt-2 flex space-x-4'>
							{['product.png', 'product1.png', 'product2.png'].map((img) => (
								<img
									key={img}
									src={getImageUrl('images/' + img)}
									alt={img}
									className={`w-16 h-16 border cursor-pointer ${
										types.image === img ? 'border-primary' : 'border-inactive'
									}`}
									onClick={() => handleImageChange(img)}
								/>
							))}
						</div>
					</div>
				</OptionContainer>
			)}

			{optionType === 'color' && (
				<OptionContainer>
					<div className='p-4 border border-inactive rounded-md '>
						<label className='block text-gray-700'>Color Option</label>
						<div className='mt-2 flex space-x-4'>
							{['red', 'black', 'blue', 'green'].map((color) => (
								<div
									key={color}
									className={`w-8 h-8 rounded-full cursor-pointer ${
										types.color === color ? 'ring-2 ring-offset-2 ring-primary' : ''
									}`}
									style={{ backgroundColor: color }}
									onClick={() => handleColorChange(color)}
								></div>
							))}
						</div>
					</div>
				</OptionContainer>
			)}
		</div>
	);
};

export default OptionSwitcher;

const OptionContainer = ({ children }) => {
	return (
		<div className='bg-light-2 p-3 flex-col-global'>
			<p>How it’ll look like</p>
			<div className='bg-white'>{children}</div>
		</div>
	);
};
