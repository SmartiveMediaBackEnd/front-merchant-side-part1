import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useStepNavigator from 'src/app/components/optimized/Tabs/useStepNavigator';

import { LoginOptions } from './_comp/LoginOptions';
import AboutYourself from './_tabs/AboutYourself/AboutYourself';
import RegisterLayout from '../_comp/RegisterLayout';
import AboutYourBusiness from './_tabs/AboutYourBusiness/AboutYourBusiness';
import StepNavigator from 'src/app/components/optimized/Tabs/StepNavigator';
import { useNavigate } from 'react-router-dom';
import { getCookie } from 'src/app/utils';

export default function RegistrationPage() {
	const { t } = useTranslation();
	const [isLogin, setIsLogin] = useState<boolean>(false);
	const { goNext, activeStep, setActiveStep } = useStepNavigator();

	const handleFinish = () => {
		window.location.href = '/home';

	};

	const firstTab = isLogin ? (
		<AboutYourself onVerify={goNext} />
	) : (
		<LoginOptions setLogin={setIsLogin} />
	);

	const tabs = [
		{ title: t('Tell us about yourself'), content: firstTab },
		{
			title: t('Tell us about your business'),
			content: <AboutYourBusiness onFinish={handleFinish} />,
		},
	];

	return (
		<RegisterLayout>
			<div className='flex-col-global gap-7 h-full w-full'>
				<h2 className='title md:text-[1.375rem]'>{t('Create your online store in two steps')}</h2>
				<StepNavigator steps={tabs} activeStep={activeStep} setActiveStep={setActiveStep} />
			</div>
		</RegisterLayout>
	);
}
