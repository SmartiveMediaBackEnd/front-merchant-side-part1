/**
 * @param {{
 *  handleToggle: () => void;
 *  checked: boolean;
 * }} props
 */
function ToggleSwitch(props) {
	return (
		<label dir="ltr" className='flex items-center  cursor-pointer ' onClick={props.handleToggle}>
			<span
				className={`relative rounded-full w-8 h-[17px] mr-2 flex items-center px-1 ${
					props.checked ? 'bg-secondary' : 'bg-inactive'
				}`}
			>
				<span
					className={`absolute block w-[13px] h-[13px] rounded-full bg-white shadow-sm transition-transform ${
						props.checked ? 'translate-x-3' : ''
					}`}
				></span>
			</span>
			<span className='text-sm text-title'>{props.checked ? 'On' : 'Off'}</span>
		</label>
	);
}

export default ToggleSwitch;
