import { useEffect } from 'react';

import i18n from './app/language/i18n';
import useLanguage from './app/utils/hooks/useLanguage';

import { Toaster } from 'react-hot-toast';
import ScrollToTop from './app/components/shared/scroll-top/ScrollToTop';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProjectRoutes from './app/AppRoutes/ProjectRoutes';

// App component
const App = () => {
	const { language } = useLanguage();

	useEffect(() => {
		// Change language and direction
		const newLanguage = language === 'ar' ? 'ar' : 'en';
		i18n.changeLanguage(newLanguage);
		document.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';

		// Change font family based on language
		const root = document.getElementById('root');
		root?.style.setProperty(
			'--font-family',
			newLanguage === 'ar' ? 'var(--font-family-ar)' : 'var(--font-family-en)',
		);
	}, [language, i18n]);

	//
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				cacheTime: 1000 * 60 * 5, // 5 minutes
				staleTime: 1000 * 60 * 2, // 2 minutes
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<ScrollToTop />
			<ProjectRoutes />
		</QueryClientProvider>
	);
};

export default App;
