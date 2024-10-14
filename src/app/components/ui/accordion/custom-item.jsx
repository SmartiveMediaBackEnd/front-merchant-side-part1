import { AccordionContent, AccordionItem } from 'src/app/components/ui/accordion';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from 'src/app/utils';
import { ChevronDown, TrashIcon } from 'lucide-react';

/**
 * @param {{
 * 	start: {
 * 		trigger: import('react').ReactNode;
 * 		after?: import('react').ReactNode;
 * 	}
 *  end: {
 *  	before?: import('react').ReactNode;
 *  }
 * 	children: import('react').ReactNode;
 * } & Parameters<typeof AccordionItem>[0]} props
 */
export default function CustomAccordionItem({ start, end, children, ...props }) {
	return (
		<AccordionItem
			{...props}
			className={cn(
				'data-[state=open]:bg-[#F9FAFC] border-gray/50 p-2 rounded-xl border data-[state=open]:px-4',
				props.className,
			)}
		>
			<AccordionPrimitive.Header className='flex py-2 justify-between'>
				<div className='flex items-center gap-2'>
					<AccordionPrimitive.Trigger className='flex items-center gap-2'>
						{start.trigger}
					</AccordionPrimitive.Trigger>
					{start.after}
				</div>

				<div className='flex items-center gap-2'>
					{end.before}
					<AccordionPrimitive.Trigger className='[&[data-state=open]>svg]:rotate-180'>
						<ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
					</AccordionPrimitive.Trigger>
				</div>
			</AccordionPrimitive.Header>
			<AccordionContent className='pt-6'>{children}</AccordionContent>
		</AccordionItem>
	);
}
