import { useTranslation } from 'react-i18next';
import { InputRow } from 'src/app/components/optimized';
import CompareButton from 'src/app/components/optimized/UiKits/CompareButton';
import { SearchIcon } from 'src/app/utils/icons';

// Define the type for the Header props
interface HeaderProps {
	handleSelect: (option: string) => void;
	selectedOption: string;
	onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
	dropdown?: any;
	title: string;
}

export default function Header({
	handleSelect,
	selectedOption,
	onSearch,
	title,
	dropdown = false,
}: HeaderProps) {
	// hooks
	const { t } = useTranslation();
	const comparisonMenus = [
		{ id: '1', text: t('Today') },
		{ id: '2', text: t('Last week') },
		{ id: '3', text: t('Last month') },
		{ id: '4', text: t('Specify date') },
	];
	return (
		<header className='sm:flex-row-global flex-col-global justify-between '>
			<h2 className='title'>{t(title as any)}</h2>
			<div className=' flex-row-global gap-4'>
				{dropdown && (
					<CompareButton
						sortMenus={comparisonMenus}
						selectedOption={selectedOption}
						handleSelect={handleSelect}
						variant='link'
					/>
				)}
				<InputRow leftIcon={<SearchIcon />} placeholder='Search' onChange={onSearch} />
			</div>
		</header>
	);
}
