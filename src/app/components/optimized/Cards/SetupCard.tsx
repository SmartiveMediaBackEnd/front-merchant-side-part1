import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'src/app/components/optimized';
import { SuccessIcon } from 'src/app/utils/icons';

interface SetupCardProps {
	title: string;
	description: string;
	buttonText: string;
	classes?: string;
	Icon: React.ComponentType<{ className?: string }>;
	onButtonClick: () => void;
}

export default function SetupCard({
	title,
	description,
	buttonText,
	classes = '',
	Icon,
	onButtonClick,
}: SetupCardProps) {
	const { t } = useTranslation();
	const [isStepCompleted, setIsStepCompleted] = useState(false);

	const handleStepCompletion = () => {
		setIsStepCompleted(true);
		onButtonClick();
	};

	return (
		<div
			className={`flex flex-col justify-between p-3 rounded-xl w-full ${classes} ${
				isStepCompleted ? 'bg-brand-gradient' : 'bg-white border-2 border-light-3'
			}`}
		>
			<div>
				<div
					className={`size-[42px] rounded-full mb-1 grid place-content-center ${
						isStepCompleted ? 'bg-white/10' : 'bg-pri-top-light'
					}`}
				>
					<Icon className={`w-8 h-8 ${isStepCompleted ? 'fill-white' : 'fill-primary'}`} />
				</div>
				<div className='w-full mb-3'>
					<h5
						className={`font-semibold mb-1 text-sm ${
							isStepCompleted ? 'text-white' : 'text-title'
						}`}
					>
						{t(title)}
					</h5>
					<p className={`font-normal text-sm ${isStepCompleted ? 'text-white' : 'text-title'}`}>
						{t(description)}
					</p>
				</div>
			</div>
			<div>
				{isStepCompleted ? (
					<SuccessIcon className='fill-white' />
				) : (
					<Button
						className='text-sm place-self-start'
						onClick={handleStepCompletion}
						variant='link'
						text={t(buttonText)}
					/>
				)}
			</div>
		</div>
	);
}

/**
 *
 * ```jsx
 * import { PagesIcon, PaymentIcon, PhoneIcon } from "src/app/utils/icons";
 * const ParentComponent = () => {
 *   const method = [
 *     {
 *       title: "Payment",
 *       description:
 *         "Add payment method for your store, so your customers can pay you online",
 *       buttonText: "Activate",
 *     },
 *     {
 *       title: "Pages",
 *       description: "Add a refund policy and terms of service",
 *       buttonText: "Add",
 *     },
 *   ];
 *   const iconMap = {
 *     Payment: PaymentIcon,
 *     Contact: PhoneIcon,
 *     Pages: PagesIcon,
 *   };
 *   return (
 *     <div className="flex gap-4">
 *       {method.map((item, index) => (
 *         <MobileSetupCard
 *           key={index}
 *           Icon={iconMap[item.title]} // Pass the corresponding icon component based on the title
 *           {...item}
 *         />
 *       ))}
 *     </div>
 *   );
 * };
 * ```
 */
