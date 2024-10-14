import { CheckIcon } from 'src/app/utils/icons';

/** @param {{ selectedOption?: string; onSelect?:(e:string)=>void; options: import('./optionInterface').option[]; }} props */

const Menu = (props) => {
	return (
		<ul className='rounded shadow-md py-2 flex flex-col min-w-[13rem]'>
			{props.options.map((option) => (
				<MenuItem
					key={option.id}
					text={option.text}
					icon={option?.icon}
					onClick={() => props?.onSelect && props.onSelect(option.text)}
					selected={props.selectedOption === option.text}
				/>
			))}
		</ul>
	);
};
export default Menu;

/**

 */
// export default function Menu(props) {
// 	return (
// 		<ul className='absolute top-[100%] z-10 rounded bg-white shadow-md py-2 flex flex-col w-48 md:w-[341px]'>
// 			{props.options.map((option, index) => (
// 				<MenuItem
// 					key={index}
// 					text={option}
// 					onClick={() => props.onSelect(option)}
// 					selected={props.selectedOption === option}
// 				/>
// 			))}
// 		</ul>
// 	);
// }

/**
 * @param {{
 *  text: string;
 *  onClick: () => void;
 *  selected: boolean;
 * icon?:React.ReactNode
 * }} props
 */
function MenuItem(props) {
	return (
		<li
			onClick={props.onClick}
			className={`flex text-title cursor-pointer justify-between items-center hover:bg-sec-light px-4 py-3 transition-all ${
				props.selected ? 'bg-sec-light' : ''
			}`}
		>
			<span
				className={`text-sm ${
					props.selected
						? 'text-sec-pressed flex gap-[.5rem] items-center'
						: 'flex gap-[.5rem] items-center'
				}`}
			>
				{props.icon}
				{props.text}
			</span>
			{props.selected && <CheckIcon className='fill-sec-pressed' />}
		</li>
	);
}
