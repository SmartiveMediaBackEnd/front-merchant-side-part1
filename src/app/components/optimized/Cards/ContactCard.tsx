interface Data {
	id: string | number;
	icon?: React.ReactNode;
	contact?: string | number;
	name?: string;
	value?: number | string;
}

interface IData {
	data: Data[];
	title: string;
	contacts: boolean;
	isLocation?: React.ReactNode;
	children?: React.ReactNode;
	form?: boolean;
	contain?: React.ReactNode;
}

const ContactCard: React.FC<IData> = ({
	data,
	title,
	contacts,
	isLocation,
	children,
	form,
	contain,
}) => {
	return (
		<div className='cardDetails-sharedClass  flex-col-global gap-4 p-5'>
			<div className='flex-row-global justify-between '>
				<h3 className='title'>{title}</h3>
				{form ? ' ' : children}
			</div>

			{form ? (
				contain
			) : contacts ? (
				<div className='flex-col-global gap-3 '>
					{data.map((e) => (
						<div className='flex-row-global gap-2' key={e.id}>
							{e.icon}
							<p className='text-title text-sm'>{e.contact}</p>
						</div>
					))}
				</div>
			) : (
				<div className='flex-col-global gap-1.5 '>
					{data.map((e) => (
						<p className='flex-col-global justify-between flex-row' key={e.id}>
							<span className='text-subtitle text-sm'>{e.name}:</span>
							<span className='text-title text-sm'>{e.value}</span>
						</p>
					))}
					{isLocation}
				</div>
			)}
		</div>
	);
};

export default ContactCard;
