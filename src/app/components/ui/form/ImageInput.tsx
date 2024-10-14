// import React from 'react';
// import FileInput from '../file-input';

// import { UseFormReturn, Path, FieldValues, PathValue } from 'react-hook-form';
// import FormField from './field';
// interface ImageInputProps<T extends FieldValues> {
// 	formStore: UseFormReturn<T>;
// 	name: Path<T>;
// 	children: React.ReactNode;
// }
// export default function ImageInput<T extends FieldValues>({
// 	children,

// 	formStore,
// 	name,
// }: ImageInputProps<T>) {
// 	const onImageSubmit = (option: File) => {
// 		formStore.setValue(name, option as PathValue<T, Path<T>>);
// 		formStore.setError(name, { message: '', type: 'drop-rejected' });
// 	};
// 	return (
// 		<FormField
// 			formStore={formStore}
// 			name={name}
// 			render={(field) => (
// 				<FileInput id={field.name} onImageSubmit={onImageSubmit}>
// 					{children}
// 				</FileInput>
// 			)}
// 		/>
// 	);
// }


////////////////////////////////////////////

//****************************** */
import React from 'react';
import { UseFormReturn, Path, FieldValues, PathValue } from 'react-hook-form';

import { ChangeEvent } from 'react';
import FormField from './field';



interface ImageInputProps<T extends FieldValues> {
	formStore: UseFormReturn<T>;
	name: Path<T>;
	children: React.ReactNode;
}

export default function ImageInput<T extends FieldValues>({
	children,
	formStore,
	name,
}: ImageInputProps<T>) {
	const onImageSubmit = (files: File[]) => {
		const imageFiles = Array.from(files).filter((file) => file.type.startsWith('image/'));

		formStore.setValue(name, imageFiles as PathValue<T, Path<T>>);
		formStore.clearErrors(name);
	};

	return (
		<FormField
			formStore={formStore}
			name={name}
			render={(field) => (
				<FileInput id={field.name} onImageSubmit={onImageSubmit} multiple>
					{children}
				</FileInput>
			)}
		/>
	);
}




interface FileInputProps {
	onImageSubmit: (files: File[]) => void;
	id: string;
	multiple?: boolean; // To allow multiple files
}

const FileInput: React.FC<FileInputProps> = ({ onImageSubmit, id, multiple }) => {
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			// Pass the selected images (FileList -> Array)
			onImageSubmit(Array.from(e.target.files));
		}
	};

	return (
		<input
			id={id}
			type="file"
			accept="image/*" // Accept only image files
			multiple={multiple} // Allow multiple selection
			onChange={handleFileChange}
		/>
	);
};


///////////////

