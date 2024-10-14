import { useState } from 'react';
import CheckOtpCode from './_comp/CheckOtpCode/CheckOtpCode';
import CreateNewPassword from './_comp/CreateNewPassword/CreateNewPassword';
import ForgotPasswordForm from './_comp/ForgotPasswordForm/ForgotPasswordForm';
import RegisterLayout from '../_comp/RegisterLayout';

export default function ForgotPassword() {
	const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
	const [usePhone, setUsePhone] = useState<boolean>(false);
	const [isVerified, setIsVerified] = useState<boolean>(false);

	return (
		<RegisterLayout>
			{!isCodeSent ? (
				<ForgotPasswordForm
					setIsCodeSent={setIsCodeSent}
					setUsePhone={setUsePhone}
					usePhone={usePhone}
				/>
			) : isVerified ? (
				<CreateNewPassword />
			) : (
				<CheckOtpCode usePhone={usePhone} setIsVerified={setIsVerified} />
			)}
		</RegisterLayout>
	);
}
