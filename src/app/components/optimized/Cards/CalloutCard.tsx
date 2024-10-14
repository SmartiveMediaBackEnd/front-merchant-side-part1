
interface CalloutCardProps {
	title: string;
	videoUrl: string;
	description: string;
}

export default function CalloutCard({ videoUrl, title, description }: CalloutCardProps) {

	return (
		<div className='grid grid-cols-12 gap-3 w-[23.5rem] h-[5.7rem]'>
			<div className='col-span-5 relative min-w-[7.56rem] max-w-[160rem]'>
				<iframe
					className='absolute top-0 left-0 w-full h-full'
					src={videoUrl}
					title={title}
					allowFullScreen
				/>
			</div>
			<div className='flex flex-col gap-2 col-span-7'>
				<h2 className='title'>{title}</h2>
				<p className='paragraph text-subtitle'>{description}</p>
			</div>
		</div>
	);
}
