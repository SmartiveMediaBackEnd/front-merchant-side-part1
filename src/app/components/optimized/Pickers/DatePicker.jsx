import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { capitalize } from 'src/app/utils';

/**
 * @param {{
 *  label: string;
 *  value?: import("dayjs").Dayjs | null;
 *  handleOnChange?: (date: import("dayjs").Dayjs | null) => void;
 * }} props
 */
export default function DatePicker(props) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer
				components={['DatePicker', 'MobileDatePicker', 'DesktopDatePicker', 'StaticDatePicker']}
			>
				<DemoItem>
					<span className='text-sm text-pri-dark'>{capitalize(props.label)}</span>
					<MobileDatePicker
						onChange={props.handleOnChange}
						defaultValue={props.value ? undefined : dayjs('2022-04-17')}
						value={props.value}
					/>
				</DemoItem>
			</DemoContainer>
		</LocalizationProvider>
	);
}
