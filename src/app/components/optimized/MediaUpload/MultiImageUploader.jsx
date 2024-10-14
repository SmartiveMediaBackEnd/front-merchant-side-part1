import { nanoid } from 'nanoid';
import { useState } from 'react';
import ImageUploader from './ImageUploader';

/**
 * @description
 * MultiImageUploader component allows users to upload multiple images.
 */
export default function MultiImageUploader() {
	const [uploaders, setUploaders] = useState([{ id: nanoid() }]); // Initial state with one uploader

	/**
	 * @description
	 * Handles the image upload event for a specific uploader.
	 *
	 * If the last uploader is being used, adds a new uploader.
	 *
	 * @param {string} uploaderId - The ID of the uploader.
	 */
	function handleImageUpload(uploaderId) {
		if (uploaders[uploaders.length - 1].id === uploaderId) {
			setUploaders([...uploaders, { id: nanoid() }]);
		}
	}

	/**
	 * @description
	 * Handles the image delete event for a specific uploader.
	 *
	 * Removes the uploader from the list of uploaders.
	 *
	 * @param {string} uploaderId - The ID of the uploader.
	 */
	function handleImageDelete(uploaderId) {
		const filteredUploaders = uploaders.filter((uploader) => uploader.id !== uploaderId);
		setUploaders(filteredUploaders);
	}

	return (
		<div className='flex gap-4'>
			{uploaders.map((uploader) => (
				<ImageUploader
					key={uploader.id}
					onImageUpload={() => handleImageUpload(uploader.id)}
					onImageDelete={() => handleImageDelete(uploader.id)}
				/>
			))}
		</div>
	);
}
