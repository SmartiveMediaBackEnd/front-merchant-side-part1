import { useState } from 'react';
import { FaRegFlag } from 'react-icons/fa';

export default function LanguageSelect() {
	const [selectedLanguage, setSelectedLanguage] = useState('en'); // Initial language

	const languages = [
		{
			value: /** @type {"en"} */ ('en'),
			label: 'English',
			icon: <FaRegFlag size={20} />,
		},
		{
			value: /** @type {"ar"} */ ('ar'),
			label: 'عربي',
			icon: <FaRegFlag size={20} />,
		},
	];

	return (
		<div className='flex flex-row-reverse flex-wrap gap-2'>
			{languages.map((language) => (
				<button
					key={language.value}
					type='button'
					className={`px-3 py-2  rounded-md text-sm font-medium flex items-center space-x-2 ${
						selectedLanguage === language.value
							? 'bg-blue-500 text-white'
							: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
					}`}
					onClick={() => setSelectedLanguage(language.value)}
				>
					<span>{language.icon}</span>
					<span>{language.label}</span>
				</button>
			))}

			<input
				type='text'
				className='w-full py-3 pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
				placeholder='Placeholder'
			/>
		</div>
	);
}
