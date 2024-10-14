import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { capitalize } from 'src/app/utils';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
/**
 * @param {{
 *  label: string;
 *  value?: import("dayjs").Dayjs | null;
 *  handleOnChange?: (date: import("dayjs").Dayjs | null) => void;
 * }} props
 */
export default function TimePickerMui(props) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer
				components={['TimePicker', 'MobileTimePicker', 'DesktopTimePicker', 'StaticTimePicker']}
			>
				<DemoItem>
					<span className='text-sm text-pri-dark'>{capitalize(props.label)}</span>
					<TimePicker value={props.value} onChange={props.handleOnChange} />
				</DemoItem>
			</DemoContainer>
		</LocalizationProvider>
	);
}
