// import { useEffect, useState } from 'react';

// export default function useLanguage() {
// 	const [language, setLanguage] = useState(() => {
// 		return localStorage.getItem('language') || 'en';
// 	});

// 	useEffect(() => {
// 		localStorage.setItem('language', language);
// 	}, [language]);

// 	const toggleLanguage = () => {
// 		const newLanguage = language === 'ar' ? 'en' : 'ar';
// 		setLanguage(newLanguage);
// 		window.location.reload();
// 	};

// 	return { language, toggleLanguage };
// }

import { useEffect, useState } from 'react';

export default function useLanguage() {
	const [language, setLanguage] = useState(() => {
		// Initialize language from localStorage or default to 'en'
		return localStorage.getItem('language') || 'en';
	});

	useEffect(() => {
		// Check for domain and token in localStorage
		const domain = localStorage.getItem('domain');
		const token = localStorage.getItem('token');

		if (domain && token) {
			// Only set language in localStorage if domain and token exist
			localStorage.setItem('language', language);
		}
	}, [language]);

	const toggleLanguage = () => {
		const newLanguage = language === 'ar' ? 'en' : 'ar';
		setLanguage(newLanguage);

		window.location.reload();
	};

	return { language, toggleLanguage };
}
