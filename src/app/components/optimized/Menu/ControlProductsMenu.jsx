import { controlProductsMenus } from 'src/app/utils/constants';

export default function ControlProductsMenu() {
	return (
		<div className='rounded bg-white shadow-md py-2 flex flex-col w-[341px] gap-0.5'>
			{controlProductsMenus.map((menuItem) => {
				const { id, text, Icon } = menuItem;
				return (
					<button
						key={id}
						className='flex items-center gap-2 px-4 py-3 transition-all duration-300  text-title group hover:bg-sec-light focus:bg-sec-light'
					>
						<Icon className='w-6 h-6' />
						<span className='text-[13px]'>{text}</span>
					</button>
				);
			})}
		</div>
	);
}
