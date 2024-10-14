import { useEffect, useMemo, useState } from 'react';

const useSelectBox = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');

	const handleSelect = (option: string) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	const handleButtonClick = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event: any) => {
		if (!event.target.closest('.select-box')) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return { isOpen, selectedOption, handleSelect, handleButtonClick,setSelectedOption };
};

export default useSelectBox;
