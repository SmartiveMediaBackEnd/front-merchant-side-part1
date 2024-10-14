

interface props{
	options:string[]
	setSelected:(e:string)=>void
	selected:string
	type?:string
	icon?:React.ReactNode
}

export default function SingleChoiceChips(props:props) {
	return (
		<div className='flex flex-wrap gap-2  '>
			{/* Render each option as a chip */}
			{props.options.map((option, index) => (
				<Chip
					key={index}
					isSelected={option === props.selected}
					icon={props.icon}
					onSelect={props.setSelected}
					label={option}
				/>
			))}
		</div>
	);
}



interface ChipProps{
	label:string
	isSelected:boolean
	icon?:React.ReactNode
	onSelect:(e:string)=>void
}
function Chip(props:ChipProps) {
	// Base styles for the chip
	const baseStyle =
		'flex items-center border py-1.5 px-3 min-w-fit rounded-full cursor-pointer transition-all';
	const notSelectedStyle = 'bg-white border-borders-lines text-subtitle hover:bg-gray-100';
	const selectedStyle = 'bg-secondary border-secondary text-white';

	return (
		<div
			className={`${baseStyle} ${props.isSelected ? selectedStyle : notSelectedStyle}`}
			onClick={() => props.onSelect(props.label)}
		>
			{props.icon && <div className='mr-1'>{props.icon}</div>}
			<span className={`paragraph ${props.isSelected ? 'text-white' : 'text-subtitle'} `}>
				{props.label}
			</span>
		</div>
	);
}

// SingleChoiceChips.defaultProps = {
// 	icon: null,
// 	type: 'array',
// };
/**

 *
 * @description
 *
 * Usage Example:
 *
 * ```jsx
 * import { useState } from "react";
 * import SingleChoiceChips from "./SingleChoiceChips";
 * import { LocationIcon } from "src/app/utils/icons";
 *
 * const MyComponent = () => {
 *   const [selectedOption, setSelectedOption] = useState("");
 *
 *   const handleOptionSelect = (option) => {
 *     setSelectedOption(option);
 *   };
 *
 *   const simpleOptions = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
 *
 *   return (
 *     <div>
 *       <SingleChoiceChips
 * 			   options={simpleOptions}
 * 			   setSelected={handleOptionSelect}
 * 			   selected={selectedOption}
 *         icon={<LocationIcon />} // Optional icon
 *       />
 *    </div>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */