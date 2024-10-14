import { useNavigate } from 'react-router-dom';
import { BackIcon, LinkIcon, LoadUpdateIcon, MoreIcon, PrintIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';
import useLanguage from '../../../utils/hooks/useLanguage';
import { IoIosArrowForward } from 'react-icons/io';
import { PrevNextBtn } from '..';

/**
 *
 * @param {{
 *  variant?: 'settingIcons' | 'settingOrder' | 'settingOneBtn' | 'settingTwoBtns' | 'settingThreeBtns' | 'settingWithIcons' |'customerInfowithIcons' |'settingBtnAndIcon';
 *  title: string | null;
 *  btn1?: { text?: string; onClick?: () => void };
 *  btn2?: { text?: string; onClick?: () => void };
 *  btn3?: { text?: string; onClick?: () => void };

 *  btn4?: { onClickPrev: () => void; onClickNext: () => void };
 * onClickPrev?:{ onClick: () => void};
 * onClickNext?:  { onClick: () => void};
 * 	groupIcons?: any;
 * icon?: React.ReactNode;
 * 	to?: number;
 * onClick?:()=>void
 * children?:React.ReactNode
 * submit?:boolean
 * }} props
 */
export default function HeaderSettings(props) {
	//  hooks
	const { t } = useTranslation();
	const { language } = useLanguage();
	const navigate = useNavigate();
	return (
		<div className='flex md:flex-row flex-col md:gap-0 gap-[1rem] md:items-center items-start justify-between  bg-white py-[1rem] custom_container'>
			<div className='flex items-center gap-1' onClick={props.onClick}>
				<p className='cursor-pointer' onClick={() => navigate(-1)}>
					{language === 'ar' ? <IoIosArrowForward /> : <BackIcon />}
				</p>
				<h2 className='title capitalize '>{props.title}</h2>
			</div>

			<div className='flex items-center gap-6'>
				{props.variant === 'settingIcons' && (
					<>
						{props.btn1 && (
							<IconButton onClick={props.btn1.onClick}>
								<LinkIcon className='p-1 mb-2 fill-title' />
							</IconButton>
						)}
						{props.btn2 && (
							<IconButton onClick={props.btn2.onClick}>
								<MoreIcon className='fill-pri-dark' />
							</IconButton>
						)}
					</>
				)}

				{props.variant === 'settingOrder' && (
					<>
						{props.btn1 && (
							<ButtonWithIcon
								onClick={props.btn1.onClick}
								icon={<LoadUpdateIcon className='p-0.5 fill-pri-dark' />}
							>
								{t('Update Status')}
							</ButtonWithIcon>
						)}
						{props.btn2 && (
							<ButtonWithIcon
								onClick={props.btn2.onClick}
								icon={<PrintIcon className='p-0.5 fill-pri-dark' />}
							>
								{t('Print Invoice')}
							</ButtonWithIcon>
						)}
						<div className='flex items-center gap-4'>
							{props.btn3 && (
								<IconButton onClick={props.btn3.onClick}>
									<MoreIcon />
								</IconButton>
							)}
							{props.btn4 && (
								<PrevNextBtn
									onClickPrev={props.btn4.onClickPrev}
									onClickNext={props.btn4.onClickNext}
								/>
							)}
						</div>
					</>
				)}
				{props.variant === 'settingOneBtn' && props.btn1 && (
					<Button onClick={props.btn1.onClick} variant='pri'>
						{props.btn1.text}
					</Button>
				)}
				{props.variant === 'settingTwoBtns' && (
					<>
						{props.btn1 && (
							<Button
								type={props.submit ? 'submit' : 'button'}
								onClick={props.btn1.onClick}
								variant='sec'
							>
								{props.btn1.text}
							</Button>
						)}
						{props.btn2 && (
							<Button onClick={props.btn2.onClick} variant='pri'>
								{props.btn2.text}
							</Button>
						)}
					</>
				)}
				{props.variant === 'settingBtnAndIcon' && (
					<>
						{props.icon}
						{props.btn1 && (
							<Button
								type={props.submit ? 'submit' : 'button'}
								onClick={props.btn1.onClick}
								variant='sec'
							>
								{props.btn1.text}
							</Button>
						)}
					</>
				)}
				{props.variant === 'settingThreeBtns' && (
					<>
						{props.btn1 && (
							<Button onClick={props.btn1.onClick} variant='ter'>
								{props.btn1.text}
							</Button>
						)}
						{props.btn2 && (
							<Button onClick={props.btn2.onClick} variant='sec'>
								{props.btn2.text}
							</Button>
						)}
						{props.btn3 && (
							<Button onClick={props.btn3.onClick} variant='pri'>
								{props.btn3.text}
							</Button>
						)}
					</>
				)}
				{props.variant === 'settingWithIcons' && (
					<>
						{props.groupIcons}

						{props.btn1 && (
							<Button onClick={props.btn1.onClick} variant='sec'>
								{props.btn1.text}
							</Button>
						)}
						{props.btn2 && (
							<Button
								type={props.submit ? 'submit' : 'button'}
								onClick={props.btn2.onClick}
								variant='pri'
							>
								{props.btn2.text}
							</Button>
						)}
					</>
				)}
				{props.variant === 'customerInfowithIcons' && <>{props.children}</>}
			</div>
		</div>
	);
}

/**
 * @param {import("react").ButtonHTMLAttributes<HTMLButtonElement>} props
 */
function IconButton({ ...props }) {
	return (
		<button {...props} className='p-1'>
			{props.children}
		</button>
	);
}

/**
 * @param {{
 *  icon: import("react").ReactNode
 * } & import("react").ButtonHTMLAttributes<HTMLButtonElement>} props
 */
function ButtonWithIcon({ ...props }) {
	return (
		<button {...props} className='flex items-center gap-2'>
			{props.icon}
			<span className='text-sm font-semibold text-title'>{props.children}</span>
		</button>
	);
}

/**
 * @param {{
 *  variant?: "pri" | "sec" | "ter"
 * } & import("react").ButtonHTMLAttributes<HTMLButtonElement>} props
 */
function Button({ ...props }) {
	return (
		<button {...props} className={`btn-${props.variant}`}>
			{props.children}
		</button>
	);
}
