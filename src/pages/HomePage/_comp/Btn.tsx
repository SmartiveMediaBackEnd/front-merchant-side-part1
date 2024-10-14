import useLanguage from 'src/app/utils/hooks/useLanguage';
import { Button } from 'src/app/components/optimized';
import MenuOption from 'src/app/components/optimized/Menu/MenuOption';
import { DownIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Btn = () => {
	const { language } = useLanguage();
	const { t } = useTranslation();
	const [state, setState] = useState({
		menu: false,
		selectedOption: language === 'ar' ? 'اليوم' : 'Today',
	});
	const sortMenus = [{ text: t('Today') }, { text: t('Last week') }, { text: t('Last month') }];

	const handleSelect = (selectedOption: string) => {
		setState({ ...state, selectedOption, menu: false });
	};

	return (
		<div className='relative'>
			<Button
				className='text-sm'
				variant='link'
				RightIcon={DownIcon}
				onClick={() => setState({ ...state, menu: true })}
			>
				{state.selectedOption}
			</Button>
			{state.menu && (
				<MenuOption
					options={sortMenus}
					selectedOption={state.selectedOption}
					onSelect={handleSelect}
				/>
			)}
		</div>
	);
};

export default Btn;
