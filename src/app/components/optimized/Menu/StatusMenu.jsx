import { productStatus } from 'src/app/utils/constants';

export default function StatusMenu() {
	return (
		<div className='rounded bg-white shadow-md border-b border-light-2 py-2 px-3 flex flex-col w-[300px]'>
			{productStatus.map((menuItem) => {
				const { id, text, Icon, description, detailed } = menuItem;
				return (
					<button
						key={id}
						className='flex flex-col justify-between py-3 border-b  text-title border-light-2 last-of-type:border-none'
					>
						<div className='flex items-center gap-2'>
							<span className='font-semibold'>{text}</span>

							{detailed && (
								<span className='flex text-xs items-center px-1 py-0.5 justify-center bg-secondary text-white rounded '>
									<Icon className='p-0.5 pl-0 fill-white' /> Shipped
								</span>
							)}
						</div>

						<p className='text-[13px] text-subtitle'>{description}</p>
					</button>
				);
			})}
		</div>
	);
}
