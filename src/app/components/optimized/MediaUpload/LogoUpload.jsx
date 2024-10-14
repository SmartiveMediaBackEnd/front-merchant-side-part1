import { getImageUrl } from 'src/app/utils';
import { AddBgIcon, MoreIcon, UploadIcon } from 'src/app/utils/icons';
// ! ///////////////////
// ! ///////////////////
// ! ///////////////////
// ! ///////////////////
//?  this file for test
// ! ///////////////////
// ! ///////////////////
// ! ///////////////////
// ! ///////////////////

/**
 *
 * @param {{
 *  isUploading?: boolean;
 *  loaded?: boolean;
 * }} props
 */
export default function LogoUpload(props) {
	// ! ///////////////////
	// ! ///////////////////
	// ! ///////////////////
	// ! ///////////////////
	//?  this file for test
	// ! ///////////////////
	// ! ///////////////////
	// ! ///////////////////
	// ! ///////////////////

	const loaded = props.loaded ?? true;
	return (
		<div
			className={`p-3 size-[100px] rounded border text-center grid place-items-center relative cursor-pointer ${
				props.isUploading || loaded
					? 'border-solid	bg-light-1 border-borders-lines'
					: 'border-dashed border-hint'
			}`}
		>
			{!props.isUploading ||
				(!loaded && (
					<div>
						<UploadIcon className='fill-pri-dark' />
						<p className='paragraph text-title'>Upload Image</p>
					</div>
				))}

			{props.isUploading && !loaded && <p className='text-primary'>Loading...</p>}

			{!props.isUploading && loaded && (
				<div>
					<img src={getImageUrl('brand/cloud.svg')} alt='logo' />
					<MoreIcon className='absolute top-1 left-1 fill-hint ' />
					<AddBgIcon className='absolute rotate-45 border-2 border-white rounded-full top-1 right-1 fill-primary' />
					<span className='absolute bottom-1 left-1 paragraph px-[6px]  text-[13px] text-subtitle border rounded-full'>
						Main
					</span>
					<span className='absolute text-xs leading-5 text-white border-2 border-white rounded-full bottom-1 right-1 size-6 bg-secondary'>
						8
					</span>
				</div>
			)}
		</div>
	);
}
// ! ///////////////////
// ! ///////////////////
// ! ///////////////////
// ! ///////////////////
//?  this file for test
// ! ///////////////////
// ! ///////////////////
// ! ///////////////////
// ! ///////////////////
