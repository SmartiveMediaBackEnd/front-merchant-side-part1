import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { IconProps } from 'src/app/utils/icons';

interface LinkCardsProps {
	path: string;
	title: string;
	Icon: FC<IconProps>;
	description?: string;
	close?: () => void;
}
const LinkCards = ({ path, title, Icon, description, close }: LinkCardsProps) => {
	return (
		<Link to={path} onClick={close} relative='path' className='rounded-lg bg-brand-gradient p-px'>
			<div
				className={`rounded-[calc(0.5rem-1px)] p-3 bg-white ${
					description ? 'flex items-start' : 'flex flex-col'
				}  gap-3 min-h-24 h-full`}
			>
				<div className='size-11 flex-none rounded-full bg-title/5 flex justify-center items-center'>
					<Icon className='fill-pri-dark' />
				</div>
				<div className='flex-col-global gap-[.25rem]'>
					<h2 className='title '>{title}</h2>
					{description && <p className='text-subtitle paragraph'>{description}</p>}
				</div>
			</div>
		</Link>
	);
};

export default LinkCards;
