import { useEffect, useState } from 'react';
import AuthForm from './_comp/IdentifierForm/IdentifierForm';
import RegisterLayout from '../_comp/RegisterLayout';
import PasswordForm from './_comp/PasswordForm/PasswordForm';
import { BackIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
	const [step, setStep] = useState(1);
	const [identifier, setIdentifier] = useState('');
	const [email, setEmail] = useState('');
	const { t } = useTranslation();

	useEffect(() => {
		localStorage.setItem("email", email);
	}, [email]);
	
	const handleIdentifierChange = (identifier: string) => {
		setIdentifier(identifier);
	};

	return (
		<RegisterLayout>
			<div className='flex flex-col w-full'>
				{step === 2 && <Identifier setStep={setStep} identifier={identifier} />}
				<h2 className='title text-2xl mt-2 mb-6'>{t('Sign in')}</h2>
				{step === 1 ? (
					<AuthForm
						setEmail={setEmail}
						setStep={setStep}
						onIdentifierChange={handleIdentifierChange}
					/>
				) : (
					<PasswordForm email={email} />
				)}
			</div>
		</RegisterLayout>
	);
}

function Identifier({ identifier, setStep }: { identifier: string; setStep: (e: number) => void }) {
	return (
		<div className='flex items-center' onClick={() => setStep(1)}>
			<BackIcon className='fill-primary cursor-pointer' />
			<p className='paragraph text-primary'>{identifier}</p>
		</div>
	);
}
