import { DownIcon } from 'src/app/utils/icons';
import { ClientBox } from '../../optimized';
import Avatar from '../../optimized/UiKits/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ManageAccountCard from '../../optimized/Cards/ManageAccountCard';

export default function Profile({}) {
	return (
		<div className=' bg-light-2'>
			<Accordion>
				<AccordionSummary
					expandIcon={<DownIcon className='fill-hint' />}
					aria-controls='panel1-content'
					id='panel1-header'
				>
					<Typography>
						<ClientBox
							avatar={<Avatar variant='user' firstName='John' />}
							title='Fan Al Taalouq'
							details='Mohamed Samy'
						/>
					</Typography>
				</AccordionSummary>
				<AccordionDetails className='bg-light-2'>
					<Typography>
						<ManageAccountCard onClose={() => console.log('s')} menu={true} />
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
