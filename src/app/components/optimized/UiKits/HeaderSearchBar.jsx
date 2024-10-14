import { useState } from 'react';
import { GoSearch } from 'react-icons/go';

/**
 * @param {{
 *  options: { icon: JSX.Element; value: string; label: string; }[];
 * }} props - Props for the HeaderSearchBar component.
 *
 * @description
 * HeaderSearchBar component for customizable search bar with category dropdown.
 *
 * @example
 * ```jsx
 * <HeaderSearchBar
 * 	options={[
 * 		{ icon: <MdAllInclusive />, value: 'all', label: 'All Products' },
 * 		{ icon: <IoLogoElectron />, value: 'electronics', label: 'Electronics' },
 * 		{ icon: <GiClothes />, value: 'clothing', label: 'Clothing' },
 * 		{ icon: <RxHome />, value: 'home', label: 'Home & Garden' }
 * 	]}
 * />
 * ```
 */
export default function HeaderSearchBar(props) {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = () => {
		// console.log('Searching for:', searchTerm, 'in category:', selectedCategory);
	};

	return (
		<div className='relative flex items-center w-[600px] h-10 rounded-md border py-6'>
			<input
				className='w-full py-2 pl-12 pr-3 text-sm bg-transparent border border-transparent focus:outline-none '
				placeholder='Search...'
				value={searchTerm}
				onChange={(event) => setSearchTerm(event.target.value)}
			/>

			<span className='absolute left-3 top-3 '>
				<GoSearch size={24} color='gray' style={{ transform: 'rotate(90deg)' }} />
			</span>

			<select
				className='px-3 py-3 text-sm border-gray-300 w-xl bg-slate-100 focus:outline-none '
				value={selectedCategory}
				onChange={(event) => setSelectedCategory(event.target.value)}
			>
				<>
					{/* {options.map((option) => option.icon)} */}
					{props.options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</>
			</select>
			<button
				type='button'
				className='px-4 py-3 text-white bg-blue-500 rounded-r-md focus:outline-none '
				onClick={handleSearch}
			>
				<span className=''>
					<GoSearch size={24} style={{ transform: 'rotate(90deg)' }} />
				</span>
			</button>
		</div>
	);
}
