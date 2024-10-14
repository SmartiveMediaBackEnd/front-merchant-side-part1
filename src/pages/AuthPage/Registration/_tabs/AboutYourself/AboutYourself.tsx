import { useState } from 'react';
import UserInfo from './_comp/UserInfo';
import OtpVerification from './_comp/OtpVerification';
import LoginSteps from './_comp/LoginSteps';

export default function AboutYourself({ onVerify }: { onVerify: () => void }) {
	const [currentStep, setCurrentStep] = useState(1);
	const [phone, setPhone] = useState('');

	const handlePhoneChange = (newPhone: string) => {
		setPhone(newPhone);
	};

	const handleNext = () => {
		if (currentStep < 2) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleResend = () => {
		// this function will make resend the OTP code to the user
		// console.log(123);
	};

	return (
		<LoginSteps
			stepsContent={[
				<UserInfo onNext={handleNext} onPhoneChange={handlePhoneChange} />,
				<OtpVerification
					onVerify={onVerify}
					phone={phone}
					setCurrentStep={setCurrentStep}
					onResend={handleResend}
				/>,
			]}
			setCurrentStep={setCurrentStep}
			currentStep={currentStep}
		/>
	);
}
