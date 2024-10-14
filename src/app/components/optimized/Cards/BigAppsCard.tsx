import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LabelIcon } from 'src/app/components/optimized';

interface BigAppsCardProps {
	image: string;
	name: string;
	description: string;
	url: string;
	status: 'free' | 'installed' | string;
	country?: string;
	count?: number;
	title?: string;
	percentage?: string | number;
}

const BigAppsCard: React.FC<BigAppsCardProps> = ({
	image,
	name,
	description,
	url,
	status,
	country,
	count,
	title,
	percentage,
}) => {
	let backgroundColor: string, textColor: string;
	switch (status) {
		case 'free':
			backgroundColor = '#EEF9F5';
			textColor = '#49A882';
			break;
		case 'installed':
			backgroundColor = '#F3F7FF';
			textColor = '#0B47D9';
			break;
		default:
			backgroundColor = 'gray';
			textColor = 'white';
			break;
	}
	return (
		<Link to={url} rel='noopener noreferrer'>
			<div className='cursor-pointer border border-border-color p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white min-h-[379px]'>
				<div className='flex-col-global items-start gap-[1rem]'>
					<div className='border border-border-color w-full h-[213px] grid place-content-center rounded-lg relative'>
						<img src={image} alt={name} className='h-[180px]' />
						{percentage && (
							<p className='absolute bg-secondary rounded text-sm text-white px-2 py-1 right-2 top-2'>
								% {percentage}
							</p>
						)}
					</div>
					<div className='flex-col-global items-start gap-2'>
						<h2 className='title'>{name}</h2>

						{country && (
							<p className='text-title text-xs capitalize'>
								{country} <span className='text-primary'>({count + ' ' + title})</span>
							</p>
						)}
						<p className=' text-subtitle text-xs'>{description}</p>
						<LabelIcon
							text={status}
							backgroundColor={backgroundColor}
							textColor={textColor}
							icon={status === 'installed' ? <FaCheck size={10} color='#0B47D9' /> : null}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BigAppsCard;
