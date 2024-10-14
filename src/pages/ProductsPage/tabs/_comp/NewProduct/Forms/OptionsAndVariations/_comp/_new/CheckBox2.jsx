import { MdDone } from 'react-icons/md';

const Checkbox2 = ({ label, value, isChecked, onChange }) => {
	const handleInputChange = () => {
		console.log(value);
		onChange(value, !isChecked);
	};

	return (
		<label className='inline-flex items-center cursor-pointer mx-2'>
			<input
				type='checkbox'
				className='hidden peer'
				value={value}
				checked={isChecked}
				onChange={handleInputChange}
			/>
			<div className='w-6 h-6 border border-gray-300 rounded-md peer-checked:bg-blue-500 peer-checked:bg-[#2F1E66] relative '>
				<div className='absolute inset-0 flex items-center justify-center'>
					<MdDone size='1em' color='white' />
				</div>
			</div>
			<span className='ms-2'>{label}</span>
		</label>
	);
};

export default Checkbox2;
