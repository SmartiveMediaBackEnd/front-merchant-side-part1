//? Unfinished task
//! ===============
// todo Integration <ImageUploader /> Component

import { UploadIcon } from 'src/app/utils/icons';

export default function MainUpload() {
	return (
		<div className='h-32 p-5 gap-[10px] rounded border grid place-items-center border-dashed border-hint'>
			<UploadIcon className='fill-pri-dark' />
			<p className='title'>Upload Image</p>
			<p className='subtitle'>Or just drag and drop</p>
		</div>
	);
}
