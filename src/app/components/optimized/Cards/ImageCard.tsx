type property = {
	preview: string;
};

function ImageCard({ preview }: property) {
	return (
		<img
			className=' w-full h-full rounded-[.4rem]'
			src={preview ? preview : ''}
			alt={'img'}
			loading='lazy'
		/>
	);
}

export default ImageCard;
