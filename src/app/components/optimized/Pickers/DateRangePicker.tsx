// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

// export default function DateRange() {
// 	return (
// 		<LocalizationProvider dateAdapter={AdapterDayjs}>
// 			<DemoContainer components={['DateRangePicker']}>
// 				<DemoItem
// 				>
// 					<DateRangePicker
// 						localeText={{
// 							start: '',
// 							end: '',
// 						}}
// 					/>
// 				</DemoItem>
// 			</DemoContainer>
// 		</LocalizationProvider>
// 	);
// }

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function DateRange() {
	const [value, setValue] = React.useState<DateRange<Dayjs>>([dayjs(), dayjs()]);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={['DateRangePicker']}>
				<DemoItem component='DateRangePicker'>
					<DateRangePicker value={value} onChange={(newValue) => setValue(newValue)} />
				</DemoItem>
			</DemoContainer>
		</LocalizationProvider>
	);
}
