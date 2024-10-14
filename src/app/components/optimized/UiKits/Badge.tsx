// import { CheckIcon } from 'src/app/utils/icons';
// import  useLanguage  from '../../CustomHook/LanguageHook';
// import { useTranslation } from 'react-i18next';

// export default function Badge({ status }: { status: string }) {

// 	const { language } = useLanguage();
// 	const { t } = useTranslation();
// 	const installStyle = 'text-pri-hover bg-pri-top-light pl-1.5';
// 	const freeStyle = 'bg-sec-light text-sec-hover';
// 	const classes = status === 'installed' ? installStyle : status === 'free' ? freeStyle : '';
// 	const term = status === 'installed' ? t('Installed') : t('Free');
// 	return (
// 		<div
// 			className={`flex items-center w-fit py-[3px] px-[13px] paragraph rounded-full capitalize ${classes} ${language === 'ar' ? "flex-row-reverse" : ""}`}
// 		>

// 	const installStyle = 'text-pri-hover bg-light-3 ';
// 	const freeStyle = 'bg-sec-light text-sec-hover';
// 	const mainClass = `flex justify-center items-center w-fit py-[3px] px-[13px] paragraph rounded-full capitalize ${handelStatusClass()}`;

// 	//  handel style of div related to status case
// 	function handelStatusClass() {
// 		let style = '';
// 		switch (status) {
// 			case 'installed':
// 				{
// 					style = installStyle;
// 				}
// 				break;
// 			case 'free': {
// 				style = freeStyle;
// 			}
// 		}
// 		return style;
// 	}

// 	return (
// 		<div className={mainClass}>

// 			{status === 'installed' && <CheckIcon className='fill-pri-hover' />}
// 			<p>{term}</p>
// 		</div>
// 	);
// }
// // flex-row-reverse

import { CheckIcon } from 'src/app/utils/icons';
import useLanguage from '../../../utils/hooks/useLanguage';
import { useTranslation } from 'react-i18next';

export default function Badge({ status }: { status: string }) {
	const { language } = useLanguage();
	const { t } = useTranslation();
	const installStyle = 'text-pri-hover bg-pri-top-light pl-1.5';
	const freeStyle = 'bg-sec-light text-sec-hover';
	const classes = status === 'installed' ? installStyle : status === 'free' ? freeStyle : '';
	const term = status === 'installed' ? t('Installed') : t('Free');
	return (
		<div
			className={`flex items-center w-fit py-[3px] px-[13px] paragraph rounded-full capitalize ${classes} ${
				language === 'ar' ? 'flex-row-reverse' : ''
			}`}
		>
			{status === 'installed' && <CheckIcon className='fill-pri-hover' />}
			<p>{term}</p>
		</div>
	);
}
// flex-row-reverse
