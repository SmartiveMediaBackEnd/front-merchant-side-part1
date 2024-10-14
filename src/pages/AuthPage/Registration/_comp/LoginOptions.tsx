import { Link } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import { FacebookIcon, GoogleIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';

export function LoginOptions({ setLogin }: { setLogin: (value: boolean) => void }) {
	const { t } = useTranslation();
	const handleEmailLogin = () => setLogin(true);
	return (
		<section className='grid w-full gap-7 grid-cols-1 mt-4'>
			<Button
				variant={'primary'}
				className='w-full'
				onClick={handleEmailLogin}
				text={t('Continue With Email')}
			/>
			<span className='relative flex items-center justify-center h-10'>
				<span className='absolute left-[15%] w-[70%] h-px bg-borders-lines'></span>
				<span className='relative px-5 bg-white paragraph text-subtitle'>{t('OR')}</span>
			</span>
			<div className='grid w-full gap-4 grid-cols-1'>
				<Button
					variant={'secondary'}
					className='w-full'
					text={t('Continue with Google')}
					LeftIcon={GoogleIcon}
				/>
				<Button
					variant={'secondary'}
					className='w-full'
					text={t('continue with Facebook')}
					LeftIcon={FacebookIcon}
				/>
			</div>

			<p className='paragraph text-subtitle flex justify-center'>
				{t('Already have an account?')}&nbsp;
				<Link to='/login' className='text-primary font-semibold'>
					{t('Sign In')}
				</Link>
			</p>
		</section>
	);
}
