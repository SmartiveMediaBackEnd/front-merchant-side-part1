import { CopyIcon, EditIcon, MoreIcon, NextIcon, ViewIcon } from 'src/app/utils/icons';

/** @param {{ variant?: "edit" | "copy" | "view", onClick?: Function }} props */
export default function GroupIcons(props) {
	const { variant, onClick } = props;

	const handleEditClick = () => {
		if (onClick) onClick('edit');
	};

	const handleViewClick = () => {
		if (onClick) onClick('view');
	};

	const handleCopyClick = () => {
		if (onClick) onClick('copy');
	};

	const handleMoreClick = () => {
		if (onClick) onClick('more');
	};

	const handleNextClick = () => {
		if (onClick) onClick('next');
	};
	return (
		<div
			className={`flex items-center gap-4 ${
				variant === 'edit' || variant === 'view' ? '' : 'gap-3'
			}`}
		>
			{variant === 'view' ? (
				<>
					<ViewIcon className='cursor-pointer fill-pri-dark' onClick={handleViewClick} />
					<MoreIcon className='cursor-pointer fill-pri-dark' onClick={handleMoreClick} />
				</>
			) : variant === 'edit' ? (
				<>
					<EditIcon className='fill-subtitle p-0.5 cursor-pointer' onClick={handleEditClick} />
					<MoreIcon className='mt-1 cursor-pointer fill-subtitle' onClick={handleMoreClick} />
					<NextIcon className='mt-1 cursor-pointer fill-subtitle' onClick={handleNextClick} />
				</>
			) : (
				<>
					<ViewIcon className='cursor-pointer fill-pri-dark' onClick={handleViewClick} />
					<CopyIcon className='cursor-pointer fill-pri-dark' onClick={handleCopyClick} />
					<MoreIcon className='cursor-pointer fill-pri-dark' onClick={handleMoreClick} />
				</>
			)}
		</div>
	);
}
