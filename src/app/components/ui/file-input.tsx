import { ChangeEvent, useEffect, useState } from 'react';
import ImageCard from '../optimized/Cards/ImageCard';
import toast from 'react-hot-toast';
import { useRef } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaCirclePlus, FaCheck } from 'react-icons/fa';
import { TfiUpload } from 'react-icons/tfi';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

export function getDefaultFileInputOptions({ setError, onFileLoad, ...params }) {
	return {
		onError: (error) => setError({ message: error.message, type: 'error' }),
		onDropRejected: (rejectedFiles) => {
			setError({ message: 'file is not supported', type: 'drop-rejected' });
		},
		onDrop: (acceptedFiles) => {
			acceptedFiles.forEach((file) => {
				const reader = new FileReader();

				reader.onabort = () => setError({ message: 'file reading was aborted', type: 'abort' });
				reader.onerror = () => setError({ message: 'file reading has failed', type: 'file-error' });
				reader.onload = () => {
					onFileLoad({ file, reader });
				};
				reader.readAsArrayBuffer(file);
			});
		},
		multiple: true,
		...params,
	};
}

/////////////////////////////////////////////

type Props = {
	// error: string;
	onImageSubmit: (file: File) => void;
	children: React.ReactNode;
	label?: string;
	id: string;
};

const FileInput = ({ onImageSubmit, children, label, id }: Props) => {
	const [preview, setPreview] = useState<string>('');

	const onImageSelected = (e: ChangeEvent<HTMLInputElement>): void => {
		if (!e.target.files || !e.target.files[0]) {
			return;
		}

		const imageFile = e.target.files[0];
		const reader = new FileReader();

		reader.onload = () => {
			if (reader.readyState === FileReader.DONE) {
				setPreview(reader.result as string);
				onImageSubmit(imageFile);
			}
		};

		reader.readAsDataURL(imageFile);
	};

	return (
		<div className='flex-col-global'>
			{label && <p className='title'>{label}</p>}
			<div className='flex-row-global w-[6.25rem] h-[6.25rem] '>
				<input
					accept='image/*'
					id={id}
					onChange={onImageSelected}
					type='file'
					name='photo'
					hidden
				/>
				<label
					htmlFor={id}
					className='cursor-pointer flex-row-global h-full w-full rounded-sm border-2 border-dashed'
				>
					{preview ? (
						<ImageCard preview={preview} />
					) : (
						<div className='flex-col-global items-center justify-center w-full h-full'>
							{children}
						</div>
					)}
				</label>
			</div>

		</div>
	);
};

export default FileInput;

interface PropsImage {
	onImageSubmit: (images: File[]) => void;
	children: React.ReactNode;
	label?: string;
	id: string;
}

const allowedFileTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/bmp'];

const validateFiles = (files: File[]): boolean => {
	return files.every(file => allowedFileTypes.includes(file.type));
};

export const FileInputImage = ({ onImageSubmit, children, label, id }: PropsImage) => {
	const [previews, setPreviews] = useState<string[]>([]);

	const onImagesSelected = (e: ChangeEvent<HTMLInputElement>): void => {
		if (!e.target.files || e.target.files.length === 0) {
			return;
		}

		const imageFiles = Array.from(e.target.files);

		if (!validateFiles(imageFiles)) {
			console.error('Some files are of invalid type');
			return;
		}

		const readerPromises = imageFiles.map((file) => {
			return new Promise<void>((resolve) => {
				const reader = new FileReader();
				reader.onload = () => {
					if (reader.readyState === FileReader.DONE) {
						setPreviews((prev) => [...prev, reader.result as string]);
						resolve();
					}
				};
				reader.readAsDataURL(file);
			});
		});

		Promise.all(readerPromises).then(() => {
			onImageSubmit(imageFiles);
		});
	};

	return (
		<div className='flex-col-global'>
			{label && <p className='title'>{label}</p>}
			<div className='flex-row-global w-full h-auto'>
				<input
					accept='image/*'
					id={id}
					onChange={onImagesSelected}
					type='file'
					name='photos'
					multiple
					hidden
				/>
				<label
					htmlFor={id}
					className='cursor-pointer flex-row-global h-full w-full rounded-sm border-2 border-dashed'
				>
					{previews.length > 0 ? (
						<div className='grid grid-cols-3 gap-2'>
							{previews.map((preview, index) => (
								<div key={index} className='w-[6.25rem] h-[6.25rem]'>
									<img
										src={preview}
										alt={`Preview ${index}`}
										className='object-cover w-full h-full'
									/>
								</div>
							))}
						</div>
					) : (
						<div className='flex-col-global items-center justify-center w-full h-full'>
							{children}
						</div>
					)}
				</label>
			</div>
		</div>
	);
};


/////////////////////////////////////////////////////


interface PropsV {
	onImageSubmit: (files: File[]) => void;
	children: React.ReactNode;
	label?: string;
	id: string;
	accept: string;
}

export const FileInputVideo = ({ onImageSubmit, children, label, id, accept }: PropsV) => {
	const [previews, setPreviews] = useState<{ url: string; type: string }[]>([]);

	const onFilesSelected = (e: ChangeEvent<HTMLInputElement>): void => {
		console.log("e.target.files:", e.target.files);
		if (!e.target.files || e.target.files.length === 0) {
			console.log("No files selected");
			return;
		}

		const selectedFiles = Array.from(e.target.files);
		console.log("Selected files array:", selectedFiles);
		const validFiles = selectedFiles.filter((file) => file instanceof File);

		// Check if the files are instance of File
		// const validFiles = selectedFiles.filter((file) => {
		// 	const isValid = file instanceof File;
		// 	console.log(`File: ${file.name}, isValid: ${isValid}`); // Logging if each file is valid
		// 	return isValid;
		// });

		if (validFiles.length > 0) {
			const filteredFiles = validFiles.filter((file) => {
				return accept.split(',').some(type => file.type.includes(type.trim()));
			});

			if (filteredFiles.length > 0) {
				const filePreviews = filteredFiles.map((file) => {
					const url = URL.createObjectURL(file);
					return { url, type: file.type };
				});

				setPreviews((prevPreviews) => [
					...prevPreviews,
					...filePreviews
				]);
				onImageSubmit(filteredFiles);
			}
		}
	};

	return (
		<div className='flex-col-global'>
			{label && <p className='title'>{label}</p>}
			<div className='flex-row-global w-full h-auto'>
				<input
					accept={accept}
					id={id}
					onChange={onFilesSelected}
					type='file'
					name='files'
					multiple
					hidden
				/>
				<label
					htmlFor={id}
					className='cursor-pointer flex-row-global h-full w-full rounded-sm border-2 border-dashed'
				>
					{previews.length > 0 ? (
						<div className='grid grid-cols-3 gap-2'>
							{previews.map((preview, index) => (
								<div key={index} className='w-[6.25rem] h-[6.25rem]'>
									{preview.type.startsWith('video/') ? (
										<video controls className='object-cover w-full h-full'>
											<source src={preview.url} type={preview.type} />
											Your browser does not support the video tag.
										</video>
									) : (
										<img
											src={preview.url}
											alt={`Preview ${index}`}
											className='object-cover w-full h-full'
										/>
									)}
								</div>
							))}
						</div>
					) : (
						<div className='flex-col-global items-center justify-center w-full h-full'>
							{children}
						</div>
					)}
				</label>
			</div>
		</div>
	);
};

///////////////////////////////////////////////////////////  UPLOAD IMAGES OR IMAGE




export const MultiFileInput: React.FC<MultiFileInputProps> = ({ label, name, formStore, array }) => {
	const [imageSrc, setImageSrc] = useState<File[]>(() => formStore.getValues(name) || []);
	const inputRef = useRef<HTMLInputElement>(null);
	const { t } = useTranslation();

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(event.target.files || []);
		if (files.length > 0) {
			setImageSrc(files);
			onImageSubmit(files);
		}
	};

	const onImageSubmit = (files: File[]) => {
		const imageFiles = files.filter((file) =>
			['image/jpeg', 'image/png', 'image/jpg', 'image/bmp'].includes(file.type)
		);

		if (imageFiles.length === 0) {
			toast.error(t('Please upload only jpeg, jpg, bmp, or png files.'));
			return;
		}

		formStore.setValue(name, imageFiles);
		formStore.clearErrors(name);
	};

	const renderImagePreviewArray = () => {
		return imageSrc.map((file, index) => {
			const imageUrl = URL.createObjectURL(file);
			return (
				<div key={index} className="image-preview">
					<img src={imageUrl} alt={`Selected file ${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
				</div>
			);
		});
	};

	const renderImagePreviewSingle = () => {
		if (imageSrc.length > 0) {
			const firstFile = imageSrc[0];
			const imageUrl = URL.createObjectURL(firstFile);
			return (
				<div className="image-preview">
					<img src={imageUrl} alt="Selected file" style={{ maxWidth: '100%', height: 'auto' }} />
				</div>
			);
		}
		return null;
	};

	useEffect(() => {
		formStore.setValue(name, imageSrc);
	}, [imageSrc, formStore, name]);

	useEffect(() => {
		// Clean up the created object URLs to avoid memory leaks
		return () => {
			imageSrc.forEach((file) => URL.revokeObjectURL(URL.createObjectURL(file)));
		};
	}, [imageSrc]);

	const hasImages = imageSrc.length > 0;

	return (
		<FormField
			formStore={formStore}
			name={name}
			render={({ onChange, value = [], ...field }) => (
				<div className={`flex-row-global ${array ? '' : 'size-40'} rounded-sm border-2 border-dashed p-2 cursor-pointer`}>
					<input
						type="file"
						ref={inputRef}
						multiple
						onChange={handleFileChange}
						aria-label={label}
						style={{ position: 'absolute', opacity: 0, width: '0', height: '0', overflow: 'hidden' }}
					/>
					<label className="h-full w-full flex items-center justify-center cursor-pointer" onClick={() => inputRef.current?.click()}>
						{hasImages ? (
							array ? renderImagePreviewArray() : renderImagePreviewSingle()
						) : (
							<div className="flex-col-global gap-2">
								<div className="text-center mx-auto">
									<TfiUpload className="fill-title" />
								</div>
								<div className="text-center">
									<p className="text-title text-xs mb-1">
										<strong>{t('Upload Images')}</strong>
									</p>
									<p className="text-subtitle text-xs">{t('Or')}</p>
									<p className="text-subtitle text-xs">{t('drag & drop')}</p>
								</div>
							</div>
						)}
					</label>
				</div>
			)}
		/>
	);
};
/////////***************************************** */

// import { TfiUpload } from 'react-icons/tfi';
// import { useTranslation } from 'react-i18next';
// import FormField from './form/field';

// interface MultiFileInputProps {
// 	label?: string;
// 	name?: string;
// 	formStore: any;
// 	array?: boolean;
// }

// export const MultiFileInput: React.FC<MultiFileInputProps> = ({ label, name, formStore, array }) => {
// 	// const [imageSrc, setImageSrc] = useState<File[]>([]);
// 	const [imageSrc, setImageSrc] = useState<File[]>(() => formStore.getValues(name) || []);
// 	const { t } = useTranslation();



// 	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		const files = Array.from(event.target.files || []);
// 		if (files.length > 0) {
// 			setImageSrc(files);
// 			onImageSubmit(files);
// 		}
// 	};

// 	const onImageSubmit = (files: File[]) => {
// 		const imageFiles = files.filter((file) =>
// 			['image/jpeg', 'image/png', 'image/jpg', 'image/bmp'].includes(file.type)
// 		);

// 		if (imageFiles.length === 0) {
// 			toast.error('Please upload only jpeg, jpg, bmp, or png files.');
// 			return;
// 		}

// 		formStore.setValue(name, imageFiles);
// 		formStore.clearErrors(name);
// 	};

// 	const renderImagePreviewArray = () => {
// 		return imageSrc.map((file, index) => {
// 			const imageUrl = URL.createObjectURL(file);
// 			return (
// 				<div key={index} className="image-preview">
// 					<img src={imageUrl} alt={`Selected file ${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
// 				</div>
// 			);
// 		});
// 	};

// 	const renderImagePreviewSingle = () => {
// 		if (imageSrc.length > 0) {
// 			const firstFile = imageSrc[0];
// 			const imageUrl = URL.createObjectURL(firstFile);
// 			return (
// 				<div className="image-preview">
// 					<img src={imageUrl} alt="Selected file" style={{ maxWidth: '100%', height: 'auto' }} />
// 				</div>
// 			);
// 		}
// 		return null;
// 	};

// 	const hasImages = imageSrc.length > 0;

// 	useEffect(() => {
// 		formStore.setValue(name, imageSrc);
// 	}, [imageSrc, formStore, name]);

// 	return (
// 		<FormField
// 			formStore={formStore}
// 			name={name}
// 			render={({ onChange, value = [], ...field }) => (
// 				<div className={`flex-row-global ${array ? '' : 'size-40'} rounded-sm border-2 border-dashed p-2 cursor-pointer`}>
// 					<input
// 						type="file"
// 						multiple
// 						onChange={handleFileChange}
// 						aria-label={label}
// 						style={{ position: 'absolute', opacity: 0, width: '0', height: '0', overflow: 'hidden' }}
// 					/>
// 					<label className="h-full w-full flex items-center justify-center cursor-pointer" onClick={() => document.querySelector('input[type="file"]')?.click()}>
// 						{hasImages ? (
// 							array ? renderImagePreviewArray() : renderImagePreviewSingle()
// 						) : (
// 							<div className="flex-col-global gap-2">
// 								<div className="text-center mx-auto">
// 									<TfiUpload className="fill-title" />
// 								</div>
// 								<div className="text-center">
// 									<p className="text-title text-xs mb-1">
// 										<strong>{t('Upload Images')}</strong>
// 									</p>
// 									<p className="text-subtitle text-xs">{t('Or')}</p>
// 									<p className="text-subtitle text-xs">{t('drag & drop')}</p>
// 								</div>
// 							</div>
// 						)}
// 					</label>
// 				</div>
// 			)}
// 		/>
// 	);
// };
//////////////////////////////////// UPLOAD VIDEOS 


interface MultiVideoInputProps {
	label?: string;
	name?: string;
	formStore: any;
	array?: boolean;
}

export const MultiVideoInput: React.FC<MultiVideoInputProps> = ({ label, name, formStore, array }) => {
	// const [videoSrc, setVideoSrc] = useState<File[]>([]);
	const [videoSrc, setVideoSrc] = useState<File[]>(() => formStore.getValues(name) || []);

	const { t } = useTranslation();



	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(event.target.files || []);
		if (files.length > 0) {
			setVideoSrc(files);
			onVideoSubmit(files);
		}
	};

	const onVideoSubmit = (files: File[]) => {
		const videoFiles = files.filter((file) =>
			['video/mp4', 'video/avi', 'video/mov', 'video/mkv'].includes(file.type)
		);

		if (videoFiles.length === 0) {
			toast.error('Please upload only mp4, avi, mov, or mkv files.');
			return;
		}

		formStore.setValue(name, videoFiles);
		formStore.clearErrors(name);
	};

	const renderVideoPreviewArray = () => {
		return videoSrc.map((file, index) => {
			const videoUrl = URL.createObjectURL(file);
			return (
				<div key={index} className="video-preview">
					<video src={videoUrl} controls style={{ maxWidth: '100%', height: 'auto' }} />
				</div>
			);
		});
	};

	const renderVideoPreviewSingle = () => {
		if (videoSrc.length > 0) {
			const firstFile = videoSrc[0];
			const videoUrl = URL.createObjectURL(firstFile);
			return (
				<div className="video-preview">
					<video src={videoUrl} controls style={{ maxWidth: '100%', height: 'auto' }} />
				</div>
			);
		}
		return null;
	};

	const hasVideos = videoSrc.length > 0;

	useEffect(() => {
		formStore.setValue(name, videoSrc);
	}, [videoSrc, formStore, name]);

	return (
		<FormField
			formStore={formStore}
			name={name}
			render={({ onChange, value = [], ...field }) => (
				<div className={`flex-row-global ${array ? '' : 'size-40'} rounded-sm border-2 border-dashed p-2 cursor-pointer`}>
					<input
						type="file"
						accept="video/*"
						multiple
						onChange={handleFileChange}
						aria-label={label}
						style={{ position: 'absolute', opacity: 0, width: '0', height: '0', overflow: 'hidden' }}
					/>
					<label className="h-full w-full flex items-center justify-center cursor-pointer" onClick={() => document.querySelector('input[type="file"]')?.click()}>
						{hasVideos ? (
							array ? renderVideoPreviewArray() : renderVideoPreviewSingle()
						) : (
							<div className="flex-col-global gap-2">
								<div className="text-center mx-auto">
									<TfiUpload className="fill-title" />
								</div>
								<div className="text-center">
									<p className="text-title text-xs mb-1">
										<strong>{t('Upload Videos')}</strong>
									</p>
									<p className="text-subtitle text-xs">{t('Or')}</p>
									<p className="text-subtitle text-xs">{t('drag & drop')}</p>
								</div>
							</div>
						)}
					</label>
				</div>
			)}
		/>
	);
};
