import { useState } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaCirclePlus } from 'react-icons/fa6';
import HorizontalBox from 'src/app/components/ui/horizontal-box';
import { Input } from 'src/app/components/ui/input';
import { AddProductSchemaSchemaValues } from '../../../Pages/Configurable/utils';


export default function MetaKeywordsFormField({ formStore }: { formStore: UseFormReturn<AddProductSchemaSchemaValues>; }) {
	const { t } = useTranslation();
	const metaKeywords = useWatch({
		control: formStore.control,
		name: 'meta_keywords',
	}) || [];
	const [keyword, setKeyword] = useState('');
	const keywordsArray = Array.isArray(metaKeywords) ? metaKeywords : metaKeywords ? [metaKeywords] : [];

	return (
		<div className='flex flex-col gap-1'>
			<p className='text-sm text-title'>{t('meta keywords')}</p>
			<HorizontalBox
				end={
					<button
						type='button'
						onClick={() => {
							// const newKeywords = new Set(metaKeywords || []);
							// newKeywords.add(keyword);
							// formStore.setValue('meta_keywords', [...newKeywords]);
							// setKeyword('');

							if (keyword && keyword.length >= 3) {
								const newKeywords = new Set([...keywordsArray, keyword]);
								formStore.setValue('meta_keywords', [...newKeywords]);
								setKeyword('');
							}
						}}
					>
						<FaCirclePlus className='text-primary-500' />
						<span className='sr-only'>{t('Add')}</span>
					</button>
				}
			>
				<Input
					placeholder={t('Type and add')}
					className='border-0 rounded-none'
					minLength={3}
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
				/>
			</HorizontalBox>
			<div className='flex flex-wrap gap-2'>
				{keywordsArray.map((keyword) => (
					<div
						key={keyword}
						className='flex gap-2 justify-center items-center rounded-md text-title bg-light-2 mt-1 text-sm px-2 py-1'
					>
						<span>{keyword}</span>
						<button
							type='button'
							className='text-gray-300'
							onClick={() => {
								const newKeywords = keywordsArray?.filter((key) => key !== keyword);
								formStore.setValue('meta_keywords', newKeywords);
							}}
						>
							x<span className='sr-only'>{t('Remove')}</span>
						</button>
					</div>
				))}
			</div>
		</div >
	);
}
