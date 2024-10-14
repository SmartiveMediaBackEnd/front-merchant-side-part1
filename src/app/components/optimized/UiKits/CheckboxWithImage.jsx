import { MdDone } from 'react-icons/md';

/**
 * CheckboxWithImage component for customizable checkbox with optional image.
 * @param {{
 *  imageSrc: string;
 *  label: string;
 *  isChecked: boolean;
 *  handleToggleIsChecked: () => void;
 * }} props - Props for the CheckboxWithImage component.
 */
export default function CheckboxWithImage(props) {
	return (
		<div className='relative justify-center w-16 h-16 border border-blue-500 rounded cursor-pointer'>
			<img className='absolute w-full h-full rounded' src={props.imageSrc} />
			<div className='absolute flex items-center justify-center w-full h-full' onClick={props.handleToggleIsChecked}>
				{props.isChecked && <ImageOverly />}
			</div>
		</div>
	);
}

function ImageOverly() {
	return (
		<>
			<div className='absolute w-full h-full bg-blue-500 rounded opacity-20'></div>
			<span className='absolute'>
				<MdDone color='#fff' size={24} />
			</span>
		</>
	);
}
