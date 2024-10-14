import React from 'react';
import { DownIcon } from 'src/app/utils/icons';

interface PaymentAccordionProps {
	icon: React.ReactNode;
	title: string;
	isOpen: boolean;
	onToggle: () => void;
	children: React.ReactNode;
}

export default function PaymentAccordion({
	icon,
	title,
	isOpen,
	onToggle,
	children,
}: PaymentAccordionProps) {
	return (
		<div className={`cardDetails-sharedClass  ${isOpen ? 'bg-light-1' : 'bg-white'}`}>
			<button
				type='button'
				className='flex items-center justify-between w-full p-4 text-left focus:outline-none'
				onClick={onToggle}
			>
				<div className='flex items-center gap-2'>
					{icon}
					<h2 className='title'>{title}</h2>
				</div>
				<DownIcon className={`transition-all fill-hint ${isOpen ? 'rotate-180' : 'bg-white'}`} />
			</button>
			<div className={`p-4 ${!isOpen && 'hidden'}`}>{children}</div>
		</div>
	);
}
