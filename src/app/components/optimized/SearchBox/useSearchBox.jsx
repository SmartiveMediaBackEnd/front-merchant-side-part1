import { useEffect, useState } from 'react';

const useSearchBox = (initialOptions, onSelectedOptions) => {
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [showOptions, setShowOptions] = useState(false);

	// Call the callback function whenever selectedOptions change
	useEffect(() => {
		onSelectedOptions(selectedOptions);
	}, [selectedOptions, onSelectedOptions]);

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
		setShowOptions(true);
	};

	const handleOptionClick = (option) => {
		setSelectedOptions([...selectedOptions, option]);
		setSearchTerm('');
		setShowOptions(false);
	};

	const handleTagRemove = (index) => {
		const updatedOptions = selectedOptions.filter((_, i) => i !== index);
		setSelectedOptions(updatedOptions);
	};

	const handleInputFocus = () => {
		setShowOptions(true);
	};

	const filterOptions = (options) => {
		return options.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()));
	};

	const availableOptions = filterOptions(initialOptions).filter(
		(option) => !selectedOptions.includes(option),
	);

	return {
		selectedOptions,
		searchTerm,
		showOptions,
		handleInputChange,
		handleOptionClick,
		handleTagRemove,
		handleInputFocus,
		availableOptions,
	};
};
export default useSearchBox;
