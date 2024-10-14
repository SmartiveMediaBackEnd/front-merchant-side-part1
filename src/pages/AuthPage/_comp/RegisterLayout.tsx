import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from 'src/app/utils';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import useResponsive from 'src/app/utils/hooks/useResponsive';

export default function RegisterLayout({ children }: { children: ReactNode }) {
	const { xs, sm } = useResponsive();
	return (
		<section className='flex-col-global gap-[3.6rem] custom_container h-screen bg-white py-3'>
			<RegisterHeader />
			<section className='flex-col-global gap-[2rem]'>
				<section className='flex items-center justify-between h-full flex-grow'>
					<div className='w-[28.5rem] max-md:w-full h-full flex justify-center items-center'>
						{children}
					</div>
					{!xs && !sm && <RegisterImage path='images/register_1.svg' />}
				</section>
				<RegisterFooter />
			</section>
		</section>
	);
}

function RegisterHeader() {
	const { language, toggleLanguage } = useLanguage();

	const brandImageUrl = getImageUrl(`brand/${language}-light.svg`);
	return (
		<header className='flex justify-between items-center w-full  '>
			<img src={brandImageUrl} alt='Dookan' className='h-8' />
			<button className='paragraph text-subtitle' onClick={toggleLanguage}>
				{language === 'ar' ? 'English' : 'العربية'}
			</button>
		</header>
	);
}

function RegisterFooter() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='flex items-center h-[4.4rem]'>
			<p className='paragraph text-title'>
				<Link to='/' className='text-primary'>
					Dookan
				</Link>
				&nbsp;&copy; {currentYear}
			</p>
		</footer>
	);
}

function RegisterImage({ path }: { path: string }) {
	return (
		<div className='grid place-content-center h-full'>
			<img src={getImageUrl(path)} alt='Create Store' className='w-full' />
		</div>
	);
}
