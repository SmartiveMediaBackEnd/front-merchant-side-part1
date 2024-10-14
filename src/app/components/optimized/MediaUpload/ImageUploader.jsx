//? Unfinished tasks
//! =================
// todo store uploaded image
// todo Actions buttons

import { useState } from 'react';
import { AddBgIcon, UploadIcon } from 'src/app/utils/icons';

/**
 * ImageUploader component allows users to upload images by clicking on the uploader or dragging and dropping images onto it.
 * @param {object} props - Props for the ImageUploader component.
 * @param {() => void} props.onImageUpload - Callback function invoked when an image is successfully uploaded.
 * @param {() => void} props.onImageDelete - Callback function invoked when the uploaded image is deleted.
 */
export default function ImageUploader({ onImageUpload, onImageDelete }) {
	const [selectedImage, setSelectedImage] = useState(/** @type {string | null} */ (null));
	const [dragActive, setDragActive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	/**
	 * Handles the file change event when an image is selected.
	 * @param {import("react").ChangeEvent<HTMLInputElement>} event - The file change event.
	 */
	function handleFileChange(event) {
		const selectedFile = event.target.files?.[0];
		if (selectedFile && /\.(jpe?g|png|gif)$/.test(selectedFile.name)) {
			setIsLoading(true);
			const reader = new FileReader();
			reader.onload = (e) => {
				const result = e.target?.result;
				if (result) {
					if (typeof result === 'string') {
						setSelectedImage(result);
					} else {
						const buffer = new Uint8Array(result);
						const blob = new Blob([buffer], { type: selectedFile.type });
						const url = URL.createObjectURL(blob);
						setSelectedImage(url);
					}
				}
				setIsLoading(false);
			};
			reader.readAsDataURL(selectedFile);
			onImageUpload && onImageUpload();
		} else {
			setSelectedImage(null);
			alert('Please select a valid image file (JPEG, PNG, or GIF)');
		}
	}

	/**
	 * Handles the drag event when an image is dragged over the uploader.
	 * @param {import("react").DragEvent<HTMLDivElement>} event - The drag event.
	 */
	function handleDrag(event) {
		event.preventDefault();
		setDragActive(event.type === 'dragenter');
	}

	/**
	 * Handles the drag over event when an image is dragged over the uploader.
	 * @param {import("react").DragEvent<HTMLDivElement>} event - The drag over event.
	 */
	function handleDragOver(event) {
		event.preventDefault();
	}

	/**
	 * Handles the drop event when an image is dropped onto the uploader.
	 * @param {import("react").DragEvent<HTMLDivElement>} event - The drop event.
	 */
	function handleDrop(event) {
		event.preventDefault();
		setDragActive(false);
		const droppedFile = event.dataTransfer.files[0];
		if (droppedFile && /\.(jpe?g|png|gif)$/.test(droppedFile.name)) {
			setSelectedImage(URL.createObjectURL(droppedFile));
			onImageUpload && onImageUpload();
		} else {
			alert('Please drop a valid image file (JPEG, PNG, or GIF)');
		}
	}

	/**
	 * Handles the delete image event when the delete button is clicked.
	 */
	const handleDeleteImage = () => {
		setSelectedImage(null);
		onImageDelete && onImageDelete();
	};

	return (
		<div
			className={`relative size-[100px] rounded border overflow-hidden flex justify-center items-center ${
				dragActive ? 'bg-gray-100' : 'bg-white'
			} ${
				isLoading || selectedImage
					? 'border-solid	bg-light-1 border-borders-lines'
					: 'border-dashed border-hint'
			}`}
			onDragOver={handleDragOver}
			onDragEnter={handleDrag}
			onDragLeave={handleDrag}
			onDrop={handleDrop}
		>
			{isLoading ? (
				<div className='absolute inset-0 flex items-center justify-center'>
					<p className='text-primary'>Loading...</p>
				</div>
			) : selectedImage ? (
				<>
					<img src={selectedImage} alt='Product Image' className='object-cover w-full h-full' />
					<button
						type='button'
						className='absolute rounded-full top-1 right-1 focus:outline-none'
						onClick={handleDeleteImage}
					>
						<AddBgIcon className='rotate-45 border-2 border-white rounded-full fill-primary' />
					</button>
					<span className='absolute bottom-1 left-1 paragraph px-[6px]  text-[13px] text-subtitle border rounded-full'>
						Main
					</span>
					<span className='absolute text-xs leading-5 text-white border-2 border-white rounded-full bottom-1 right-1 size-6 bg-secondary'>
						8
					</span>
				</>
			) : (
				<div className='flex flex-col items-center justify-center space-y-2 text-center'>
					<UploadIcon className='fill-pri-dark' />
					<label htmlFor='fileInput' className='cursor-pointer paragraph text-title'>
						Upload Image
					</label>
					<input
						type='file'
						id='fileInput'
						accept='image/jpeg, image/png, image/gif'
						className='hidden'
						onChange={handleFileChange}
					/>
				</div>
			)}
		</div>
	);

	/*
	return (
			<div
					className={`relative size-[100px] rounded border overflow-hidden flex justify-center items-center ${
							dragActive ? 'bg-gray-100' : 'bg-white'
					} ${isLoading || selectedImage ? 'border-solid bg-light-1 border-borders-lines' : 'border-dashed border-hint'}`}
					onDragOver={handleDragOver}
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDrop={handleDrop}
			>
					{isLoading ? (
							<div className='absolute inset-0 flex items-center justify-center'>
									<p className='text-primary'>Loading...</p>
							</div>
					) : selectedImage ? (
							<>
									<img src={selectedImage} alt='Product Image' className='object-cover w-full h-full' />
									<button
											type='button'
											className='absolute rounded-full top-1 right-1 focus:outline-none'
											onClick={handleDeleteImage}
									>
											<AddBgIcon className='rotate-45 border-2 border-white rounded-full fill-primary' />
									</button>
							</>
					) : (
							<div className='flex flex-col items-center justify-center space-y-2 text-center'>
									<UploadIcon className='fill-pri-dark' />
									<label htmlFor='fileInput' className='cursor-pointer paragraph text-title'>
											Upload Image
									</label>
									<input
											type='file'
											id='fileInput'
											accept='image/jpeg, image/png, image/gif'
											className='hidden'
											onChange={handleFileChange}
									/>
							</div>
					)}
			</div>
	);
	*/
}
