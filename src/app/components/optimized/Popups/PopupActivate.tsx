import { useTranslation } from 'react-i18next';
import { InputRow } from '..';
import { useState } from 'react';

interface Platform {
	id: number;
	imageUrl: string;
	platformName: string;
	description: string;
}
interface Platform {
	platform: Platform;
	onClose: () => void;
	onActivate: (platformId: number) => void;
}

export default function PopupActivate({ platform, onActivate, onClose }: Platform) {
	const { t } = useTranslation();

	const [pixelId, setPixelId] = useState<string>('');

	const handleActivate = () => {
		if (platform) {
			onActivate(platform.id);
			onClose();
		}
	};

	return (
		<div className='fixed inset-0 z-30 flex items-center justify-center'>
			{/* Overlay */}
			<div
				className='fixed inset-0 bg-black opacity-50'
				// onClick={onClose}
			></div>

			{/* Popup Content */}
			<div className='relative flex flex-col content-between rounded-md  w-[35rem] p-5 bg-white'>
				<h3 className='font-semibold text-title capitalize mb-5'>
					{t('Activate')} {platform.platformName} {t('Pixel')}
				</h3>
				<div className='w-96'>
					<InputRow
						label={t('Pixle ID')}
						value={pixelId}
						onChange={(e) => setPixelId(e.target.value)}
					/>
				</div>
				<p className='mt-2 text-sm text-title'>
					{t('You can copy it from')} <span className='capitalize'>{platform.platformName}</span>{' '}
					{t('ads manager')}
				</p>

				<div className='flex items-center justify-end gap-2 mt-5'>
					<button className='btn-ter' onClick={onClose}>
						{t('Cancel')}
					</button>

					<button className='btn-pri' onClick={handleActivate}>
						{t('Activate')}
					</button>
				</div>
			</div>
		</div>
	);
}
/*
const [platform, setPlatform] = useState({
	id: 1,
	imageUrl: 'example-image-url',
	platformName: 'Example Platform',
	description: 'Example Description',
});

const handleActivate = (platformId) => {
	// Implement your logic for activating the platform
	console.log(`Platform with ID ${platformId} activated`);
};

const handleClose = () => {
	// Implement your logic for closing the popup
	console.log('Popup closed');
};

<div className='App'>
	<PopupActivate platform={platform} onActivate={handleActivate} onClose={handleClose} />
</div>;
*/
