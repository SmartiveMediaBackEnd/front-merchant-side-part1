import { Box } from '@mui/material';
import { useState } from 'react';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

// tabs componenet is global for using in customers page
export default function Tabs({
	body,
	children,
}: {
	body: React.ReactNode;
	children: React.ReactNode;
}) {
	//  hooks
	const [value, setValue] = useState('1');

	//  function handel tabs clickable
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList
						scrollButtons
						allowScrollButtonsMobile
						aria-label='scrollable force tabs example'
						variant='scrollable'
						onChange={handleChange}
						
					>
						{children}
					</TabList>
				</Box>
				{body}
			</TabContext>
		</Box>
	);
}
