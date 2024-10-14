import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InternalchatIcon, MessengerIcon, WhatsappIcon } from 'src/app/utils/icons';
import { getImageUrl, useClickOutsideWithId } from 'src/app/utils';
// import ConversationCard from './ConversationCard';

import useLanguage from '../../../utils/hooks/useLanguage';
import Chat from './Chat';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const data = [
	{
		id: 1,
		title: 'salem',
		details: 'Thanks!',
		time: 'Yesterday',
		src: getImageUrl('images/profile.png'),
	},
	{
		id: 2,
		title: 'walied sayed',
		fName: 'walied',
		lName: 'sayed',
		details: 'Thanks!',
		time: '4:30 AM',
	},
	{
		id: 3,
		title: 'salem',
		details: 'Thanks!',
		time: 'Yesterday',
		src: getImageUrl('images/profile.png'),
	},
];

/**
 * ChatCard component displays a card with vertical tabs for different chat platforms.
 * Each tab contains a Chat component.
 *
 * @param {object} props - Props for the ChatCard component.
 * @param {Function} props.onClose - Function to handle the close action.
 * @returns {JSX.Element} ChatCard component.
 */

const ChatCard = ({ menu }: { menu?: boolean }) => {
	const { language } = useLanguage();

	const id = 'chat-card';

	return (
		<div
			id={id}
			className={`bg-white ${
				menu ? 'h-full w-full' : 'pb-5 shadow-lg z-30 h-[32rem] overflow-y-auto'
			}  ${
				language === 'ar'
					? 'rounded-tr-md rounded-br-md left-10'
					: 'rounded-tl-md rounded-bl-md right-10'
			} `}
			style={{ overflowY: 'auto' }}
		>
			<VerticalTabs />
		</div>
	);
};

export default ChatCard;

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{}}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

function VerticalTabs() {
	const [value, setValue] = React.useState(0);
	const { t } = useTranslation();
	const { language } = useLanguage();
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: 'background.paper',
				display: 'flex',
				width: '22rem',
			}}
		>
			{language === 'ar' ? (
				<Tabs
					className='w-12'
					orientation='vertical'
					value={value}
					onChange={handleChange}
					aria-label='Vertical tabs example'
					sx={{ borderLeft: 1, borderColor: 'divider' }}
				>
					<Tab label={<InternalchatIcon className='fill-hint ms-10' />} {...a11yProps(0)} />
					<Tab label={<WhatsappIcon className='fill-hint ms-10' />} {...a11yProps(1)} />
					<Tab label={<MessengerIcon className='fill-hint ms-10' />} {...a11yProps(2)} />
				</Tabs>
			) : (
				<Tabs
					className='w-12'
					orientation='vertical'
					value={value}
					onChange={handleChange}
					aria-label='Vertical tabs example'
					sx={{ borderRight: 1, borderColor: 'divider' }}
				>
					<Tab label={<InternalchatIcon className='fill-hint mr-10' />} {...a11yProps(0)} />
					<Tab label={<WhatsappIcon className='fill-hint mr-10' />} {...a11yProps(1)} />
					<Tab label={<MessengerIcon className='fill-hint mr-10' />} {...a11yProps(2)} />
				</Tabs>
			)}
			<TabPanel value={value} index={0}>
				<Chat data={data} title={t('Chat')} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Chat data={data} title={t('WhatsApp')} />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Chat data={data} title={t('Messenger')} />
			</TabPanel>
		</Box>
	);
}
