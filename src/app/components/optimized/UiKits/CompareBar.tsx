import { comparisonMenus } from 'src/app/utils/constants';
import { ArrangeButton } from '..';
import { useTranslation } from 'react-i18next';

// how to use

// const Component = () => {
//
// 	const [selectedComparisonOption, setSelectedComparisonOption] = useState(null);
//
// 	const handleComparisonChange = (option) => {
// 		setSelectedComparisonOption(option);
// 	};
//
// 	return (
// 		<CompareBar selectedComparisonOption={selectedComparisonOption} handleComparisonChange={handleComparisonChange} />
// 	);
//
// };

const CompareBar = ({ selectedComparisonOption, handleComparisonChange }) => {
	const {t} = useTranslation()

	const comparisonMenus = [
		{ text: t('Today') },
		{ text: t('Last week') },
		{ text: t('Last month') },
		{ text: t('Specify date') },
	];
	return (
		<div className='mb-4 flex items-center gap-2'>
			<ArrangeButton
				sortMenus={comparisonMenus}
				selectedOption={selectedComparisonOption}
				handelSelect={handleComparisonChange}
			/>
			<div className='flex gap-2'>
				<p className='paragraph text-subtitle'>{t('Compared to')}:</p>
				<p className='paragraph text-title'>{selectedComparisonOption? selectedComparisonOption : t('Today')}</p>
			</div>
		</div>
	);
};
export default CompareBar;

