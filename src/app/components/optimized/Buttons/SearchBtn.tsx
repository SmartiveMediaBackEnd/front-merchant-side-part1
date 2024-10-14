import { SearchIcon } from 'src/app/utils/icons';

import Button from '@mui/material/Button';
import PopoverComponent from '../UiKits/Popover';

const SearchBtn = () => {
	return (
		<PopoverComponent
			button={
				<>
					<Button className='roundedParentIcon'>
						<SearchIcon />
					</Button>
				</>
			}
		>
			<SearchInput />
		</PopoverComponent>
	);
};

export default SearchBtn;

function SearchInput() {
	const id = 'searchInput';

	return (
		<div id={id}>
			<input
				className='text-sm p-3 rounded-lg outline-none text-title shadow-md'
				placeholder='Search...'
				// value={searchTerm}
				// onChange={handleInputChange}
			/>
		</div>
	);
}
