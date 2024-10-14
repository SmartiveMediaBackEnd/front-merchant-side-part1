import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdExpandMore } from "react-icons/md";

import Fade from '@mui/material/Fade';
import { useState } from 'react';
export default function DropDownMenu({
	children,
	title,
	component,
	variant,
	addCompo
}: {
	title?: string;
	children: React.ReactNode;
	component?: React.ReactNode
	variant?: boolean
	addCompo?: React.ReactNode
}) {
	const [expanded, setExpanded] = useState(false);

	const handleExpansion = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};
	const titleClass = variant ? "title" : 'text-title font-normal text-[.8rem]';
	return (
		<Accordion
			expanded={expanded}
			onChange={handleExpansion}
			slots={{ transition: Fade as AccordionSlots['transition'] }}
			slotProps={{ transition: { timeout: 400 } }}
			sx={{
				'& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
				'& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
				boxShadow: "none", background: '#F9FAFC'
			}}
		>
			<AccordionSummary
				expandIcon={<MdExpandMore />}
				aria-controls='panel1-content'
				id='panel1-header'
			>
				<div className=" flex flex-row justify-between w-[97%] items-center">
					{title && <p className={titleClass}>{title}</p>}
					{addCompo && addCompo}

				</div>

				{component && component}
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
}
