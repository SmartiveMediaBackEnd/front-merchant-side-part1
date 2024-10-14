import { ChangeEvent } from 'react';

type Props = {
	// error: string;
	onImageSubmit: (file: File) => void;
};

const ImportFileInput = ({ onImageSubmit }: Props) => {
	const onImageSelected = (e: ChangeEvent<HTMLInputElement>): void => {
		if (!e.target.files || !e.target.files[0]) {
			return;
		}

		const imageFile = e.target.files[0];
		const reader = new FileReader();

		reader.onload = () => {
			if (reader.readyState === FileReader.DONE) {
				onImageSubmit(imageFile);
			}
		};

		reader.readAsDataURL(imageFile);
	};

	return (
		<input

			accept='.pdf,application/pdf,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
			onChange={onImageSelected}
			type='file'
			name='file'
		/>
	);
};

export default ImportFileInput;
