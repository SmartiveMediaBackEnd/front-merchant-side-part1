import { MouseEvent, useState } from 'react';
import { Popover } from '@mui/material';

import { DownIcon } from 'src/app/utils/icons';
import CheckMenu from '../Menu/CheckMenu';
import Button from './Button';

// How TO USE

// const Component = () => {
// 	const [selectedItem, setSelectedItem] = useState<string[]>([]);
// 	const options: string[] = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
// 	return (
// 		<div>
// 			<CheckMenuButton
// 				text={'Title'}
// 				options={options}
// 				setSelected={setSelectedItem}
// 				selected={selectedItem}
// 			/>
// 		</div>
// 	);
// };

interface Props {
	text: string;
	options: string[];
	selected: string[];
	setSelected: (options: string[]) => void;
}

export default function CheckMenuButton({ text, options, selected, setSelected }: Props) {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
	};
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<div>
			<Button
				variant='secondary'
				RightIcon={DownIcon}
				text={text}
				aria-describedby={id}
				onClick={handleClick}
			/>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={() => setAnchorEl(null)}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<CheckMenu options={options} selected={selected} setSelected={setSelected} />
			</Popover>
		</div>
	);
}
