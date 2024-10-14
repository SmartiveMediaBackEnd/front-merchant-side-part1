import { sortMenus } from 'src/app/utils/constants';
import { CheckIcon } from 'src/app/utils/icons';

export default function SortMenu({ options, onSelect, selectedOption }) {
	return (
		<div className='rounded bg-white shadow-md py-2 flex flex-col w-48 md:w-[341px] gap-0.5'>
			{sortMenus.map((menuItem) => {
				const { id, text } = menuItem;
				return (
					<button
						key={id}
						className='flex items-center justify-between px-4 py-3 transition-all duration-300  text-title group hover:bg-sec-light focus:bg-sec-light'
					>
						<span className='text-sm group-focus:text-sec-pressed'>{text}</span>
						<CheckIcon className='hidden mt-1 group-focus:fill-sec-pressed group-focus:block' />
					</button>
				);
			})}
		</div>
	);
}
