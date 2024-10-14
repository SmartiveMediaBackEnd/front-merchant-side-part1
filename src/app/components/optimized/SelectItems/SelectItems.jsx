import { useState, useEffect } from 'react';
import { capitalize } from 'src/app/utils';
import { LiaSearchSolid } from 'react-icons/lia';
import { Button, CheckBox, InputRow } from '..';
import SelectItem from './SelectItem';
import { useTranslation } from 'react-i18next';

/**
 * @typedef {{
 *  id: string | number;
 *  img: string;
 *  title?: string;
 *  subTitle: string;
 *  fName?: string;
 *  lName?: string;
 *  count?: number;
 * }} Item
 *
 */

/**
 * @param {{
 *  title: string;
 *  onClose: () => void;
 *  addBtn: (selectedItems: Item[]) => void;
 *  select: Item[];
 *  variant?: "customers" | "groups";
 * }} props
 */

function SelectItems(props) {
	const { t } = useTranslation();
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedItems, setSelectedItems] = useState(/** @type {Item[]}  */ ([]));
	const [queryItems, setQueryItems] = useState(props.select);

	useEffect(() => {
		setQueryItems(props.select);
	}, [props.select]);

	/**
	 * @param {boolean} isChecked
	 * @param {Item} item
	 */
	function handleChange(isChecked, item) {
		const updatedItems = isChecked
			? [...selectedItems, item]
			: selectedItems.filter((item) => item.id !== item.id);
		setSelectedItems(updatedItems);
		// console.log('Checkbox checked:', isChecked);
	}

	/** @param {import("react").MouseEvent<HTMLDivElement>} event */
	function handleClickOutside(event) {
		if (event.target === event.currentTarget) {
			props.onClose();
		}
	}

	/** @param {string} query */
	function handleSearchChange(query) {
		setSearchQuery(query);
		const filteredItems = props.select.filter((item) => {
			if ('fName' in item || 'lName' in item) {
				return (
					(item.fName && item.fName.toLowerCase().includes(query.toLowerCase())) ||
					(item.lName && item.lName.toLowerCase().includes(query.toLowerCase()))
				);
			}

			if ('title' in item) {
				return item.title && item.title.toLowerCase().includes(query.toLowerCase());
			}
			return false;
		});
		setQueryItems(filteredItems);
	}

	return (
		<div
			className='fixed top-0 left-0 z-30 flex items-center justify-center w-full h-full bg-black bg-opacity-50'
			onClick={handleClickOutside}
		>
			<label className='w-[39rem] rounded bg-white py-[1rem]'>
				<div>
					<h3 className='text-title font-semibold mb-3 ms-[1rem] mr-4'>
						{t('Select')} {capitalize(props.title)}
					</h3>

					<div className='flex items-center justify-between px-[1rem]'>
						<div className='w-[24rem]'>
							<InputRow
								leftIcon={<LiaSearchSolid />}
								placeholder={t('Search')}
								value={searchQuery}
								handleOnChange={handleSearchChange}
							/>
						</div>

						<p>
							{selectedItems.length} {props.title} {t('out of')} {props.select.length}
						</p>

						{queryItems.length > 0 && (
							<CheckBox
								variant={queryItems.length === selectedItems.length ? undefined : 'minus'}
								handleOnChange={(isChecked) => {
									if (isChecked) {
										return setSelectedItems(queryItems);
									}

									setSelectedItems([]);
								}}
								checked={selectedItems.length > 0}
							/>
						)}
					</div>
				</div>

				<div className='flex flex-col gap-2 my-2 h-[25rem] overflow-auto'>
					{queryItems.map((item) => (
						<SelectItem
							variant={props.variant}
							key={item.id}
							{...item}
							isChecked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
							handleOnCheckChange={(isChecked) => handleChange(isChecked, item)}
						/>
					))}
				</div>

				<div className='flex mt-4 justify-end mx-4 gap-4'>
					<Button onClick={() => props.onClose()} variant='tertiary'>
						{t('cancel')}
					</Button>
					<Button onClick={() => props.addBtn(selectedItems)}>
						{t('add')} {selectedItems.length}
					</Button>
				</div>
			</label>
		</div>
	);
}

export default SelectItems;
