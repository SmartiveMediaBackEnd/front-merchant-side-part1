import Button from '../Buttons/Button';

interface IProceed {
	onProceed: () => void;
	isOpen: boolean;
	onCancel: () => void;
	title: string;
	subTitle: string;
	children?: React.ReactNode;
	cancelBtnText: string;
	proceedBtnText: string;
	color?: string;
}

export default function PopupProceed({
	onProceed,
	isOpen,
	onCancel,
	title,
	subTitle,
	children,
	cancelBtnText,
	color,
	proceedBtnText,
}: IProceed) {
	function handleProceed() {
		onProceed();
	}

	if (!isOpen) {
		return null;
	}

	return (
		<div className='fixed inset-0 z-30 flex items-center justify-center p-3'>
			{/* Overlay */}
			<div className='fixed inset-0 bg-black opacity-50' onClick={onCancel}></div>

			{/* Popup Content */}
			<div className='relative flex flex-col gap-4 content-between p-5 cardDetails-sharedClass w-[90%] lg:w-[60%]'>
				<div className='flex flex-col gap-2'>
					<h3 className='font-semibold text-title text-xl'>{title}</h3>
					<p className='text-sm text-subtitle'>{subTitle}</p>
				</div>

				<div>{children}</div>

				<div className='flex items-center justify-end gap-2'>
					<button className='px-4 py-2 text-sm font-semibold text-title' onClick={onCancel}>
						{cancelBtnText}
					</button>
					<Button
						style={{ backgroundColor: color }}
						className={`text-white p-2 rounded-md`}
						onClick={handleProceed}
					>
						{proceedBtnText}
					</Button>
				</div>
			</div>
		</div>
	);
}
