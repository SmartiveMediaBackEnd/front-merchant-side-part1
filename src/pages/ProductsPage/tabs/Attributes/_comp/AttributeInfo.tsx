import useResponsive from 'src/app/utils/hooks/useResponsive';
import { addAttributeInterface } from '../_hook/HookAddAttributes';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import { useEffect } from 'react';

const AttributeInfo = ({ formStore }: { formStore: UseFormReturn<addAttributeInterface> }) => {
	const { xs } = useResponsive();
	const { t } = useTranslation();

	const attributeType = [
		{ name: t('select'), id: 1 },
		{ name: t('text'), id: 2 },
		{ name: t('radio'), id: 3 },
		{ name: t('checkbox'), id: 4 },
		{ name: t('boolean'), id: 5 },
	];

	useEffect(() => {
		formStore.setValue(
			'default-null-option',
			formStore.watch('default-null-option') ? true : false,
		);
	}, [formStore.watch('default-null-option')]);

	return (
		<div className='global-cards gap-[1.2rem]'>
			<h3 className='title'>{t('Attribute Info')}</h3>
			<div className={`w-full ${xs ? 'flex-col-global' : 'flex gap-4'}`}>
				<div className='w-full lg:w-1/2'>
					<FormField
						formStore={formStore}
						name='code'
						label={t('Code')}
						render={(field) => <Input {...field} />}
					/>
				</div>
				<div className='w-full lg:w-1/2'>
					<FormField
						formStore={formStore}
						name='admin_name'
						label={t('Admin Name')}
						render={(field) => <Input {...field} />}
					/>
				</div>
			</div>
			<div className={`w-full ${xs ? 'flex-col-global' : 'flex gap-4'}`}>
				<div className='w-full lg:w-1/2'>
					<TabbedFormField
						formStore={formStore}
						keys={[
							{ name: 'en.name', label: 'En' },
							{ name: 'ar.name', label: 'عربي' },
						]}
						label={t('Name')}
						renderer={(field) => <Input {...field} />}
					/>
				</div>
				<div className='w-full lg:w-1/2'>
					<FormField
						formStore={formStore}
						name='swatch_type'
						label={t('Swatch Type')}
						render={(field) => <Input {...field} />}
					/>
				</div>
			</div>

			<SelectFormField
				name='type'
				label={t('Attribute Type')}
				formStore={formStore}
				options={attributeType?.map((item: any) => ({
					label: item?.name,
					value: item?.name,
				}))}
				placeholder={t('Select Type')}
			/>

			<div className='flex gap-4'>
				<FormSwitchField<addAttributeInterface>
					formStore={formStore}
					name='default-null-option'
					enable
				/>
				<p>{t('Default Null-Option')}</p>
			</div>
		</div>
	);
};

export default AttributeInfo;
