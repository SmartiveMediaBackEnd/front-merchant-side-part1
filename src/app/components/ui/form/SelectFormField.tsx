import FormField from 'src/app/components/ui/form/field';

import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaCirclePlus } from 'react-icons/fa6';
import { useEffect } from 'react';

interface Option {
	value: string;
	label: string;
}

interface SelectFormFieldProps {
	formStore: UseFormReturn<any>;
	name: string;
	AnotherName?: string
	options: Option[];
	placeholder?: string;
	className?: string;
	label?: string;
	add_button?: boolean;
	setOpenDialog?: (e: boolean) => void;
}

export default function SelectFormField({
	formStore,
	name,
	options,
	placeholder,
	className,
	label,
	add_button,
	setOpenDialog,
	AnotherName
}: SelectFormFieldProps) {
	//  hook
	const { t } = useTranslation();

	return (
		<FormField
			container={{ className: className }}
			formStore={formStore}
			name={name}
			label={label}
			render={(field) => (
				<div className={className ? className : 'relative flex items-center border border-gray-300 rounded-md'}>
					<select
						{...field}
						name={field.name}
						className='block w-full px-3 py-2 bg-white rounded-l-md shadow-sm focus:border-none focus:outline-none '
						onChange={(e) => {
							console.log(e.target.value)
							formStore.setValue(name, e.target.value)
							AnotherName && formStore.setValue(AnotherName, "")
						}}
					>
						<option style={{ display: "none" }} value=''>
							{placeholder}
						</option>
						{options?.length > 0 &&
							options?.map((e) => (
								<option key={e.value} value={e.value}>
									{e.label}
								</option>
							))}
					</select>
					{add_button && (
						<button
							type='button'
							className='md:flex-row-global gap-1 flex-col-global items-center justify-center px-2 py-2 border-l w-[9rem]'
							onClick={() => setOpenDialog && setOpenDialog(true)}
						>
							<FaCirclePlus size={18} />
							<span className=' text-[.85rem]'>{t('Add One')}</span>
						</button>
					)}
				</div>
			)}
		/>
	);
}




