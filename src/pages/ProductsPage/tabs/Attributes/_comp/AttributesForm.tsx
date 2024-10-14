import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useEffect, useMemo, useState } from 'react';
import useCustomHookAddAttribute, { addAttributeInterface } from '../_hook/HookAddAttributes';
import AttributeInfo from './AttributeInfo';
import OptionFields from './OptionFields';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import {
	getAttributeShow,
	postAttribute,
	putAttribute,
} from 'src/app/store/slices/Attributes/Attribute/attributeAsyncThunks';

const AttributesForm = () => {
	const [initialOptions, setInitialOptions] = useState({});
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	const { handelDefaultValue, AddAttributeSchema } = useCustomHookAddAttribute();
	const dispatch = useAppDispatch();
	const { isLoadingAddOrUpdate, attributeShow } = useAppSelector(
		(state) => state.attributesProducts,
	);

	const handleSubmit = (values: addAttributeInterface) => {
		console.log('attributes', values)
		const optionsFormatted = values.options.reduce((acc: any, option: any, index: number) => {
			acc[`option_${index + 1}`] = option;
			return acc;
		}, {});
		let SendingData = { ...values, options: optionsFormatted };

		id
			? dispatch(putAttribute({ data: SendingData, id })).then((promiseResponse) => {
				if (promiseResponse.payload.code === 200) {
					navigate(-1);
				}
			})
			: dispatch(postAttribute(SendingData)).then((promiseResponse) => {
				if (promiseResponse.payload.code === 200) {
					navigate(-1);
				}
			});
	};

	const { formStore, onSubmit } = useForm({
		schema: AddAttributeSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	useEffect(() => {
		if (id) {
			dispatch(getAttributeShow(id));
		}
	}, [id, dispatch]);

	useEffect(() => {
		if (id && attributeShow) {
			formStore.setValue('code', attributeShow?.code || '');
			formStore.setValue('type', attributeShow?.type || '');
			formStore.setValue('admin_name', attributeShow?.admin_name || '');
			formStore.setValue('en.name', attributeShow?.en?.name || '');
			formStore.setValue('ar.name', attributeShow?.ar?.name || '');
			formStore.setValue('swatch_type', attributeShow?.swatch_type || '');
			formStore.setValue('default-null-option', attributeShow?.['default-null-option'] || '');
	
			if (attributeShow?.options) {
				const updatedOptions = attributeShow.options.reduce((acc, opt, index) => {
					acc[`option_${index}`] = {
						admin_name: opt?.admin_name || '',
						en: { label: opt?.en?.label || '' },
						ar: { label: opt?.ar?.label || '' },
						sort_order: opt?.sort_order > 0 ? 1 : 0,
						swatch_value: opt?.swatch_value || '',
					};
					return acc;
				}, {});
				setInitialOptions(updatedOptions);
			}
	
			const fieldsToConvert = [
				'is_required',
				'is_unique',
				'validation',
				'value_per_locale',
				'value_per_channel',
				'is_filterable',
				'is_configurable',
				'is_visible_on_front',
				'use_in_flat',
				'is_comparable',
			];
	
			fieldsToConvert.forEach((field) => {
				formStore.setValue(field, formStore.watch(field) ? 1 : 0);
			});
		}
	}, [id, attributeShow, formStore]);

	const data = [
		{ name: 'is_required', label: t('Is Required'), enable: true },
		{ name: 'is_unique', label: t('Is Unique'), enable: true },
		{ name: 'validation', label: t('Validation'), enable: true },
		{ name: 'value_per_locale', label: t('Value Per Locale'), enable: true },
		{ name: 'value_per_channel', label: t('Value Per Channel'), enable: true },
		{ name: 'is_filterable', label: t('Is Filterable'), enable: true },
		{ name: 'is_configurable', label: t('Configuration'), enable: true },
		{ name: 'is_visible_on_front', label: t('Visible On Front'), enable: true },
		{ name: 'use_in_flat', label: t('Use On Flat'), enable: true },
		{ name: 'is_comparable', label: t('Is Comparable'), enable: true },
	];

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('add attribute')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
				</SubHeader>
				<div className='custom_container custom-grid-parent'>
					<div className='flex-col-global grid-left'>
						<AttributeInfo formStore={formStore} />
						<OptionFields
							formStore={formStore}
							label={
								formStore.watch('options')?.length > 0 ? t('Add More Options') : t('Add Options')
							}
						/>
					</div>
					<div className='grid-right'>
						<QuickActions<addAttributeInterface>
							formStore={formStore}
							data={data}
							title={t('Quick actions')}
						/>
					</div>
				</div>
				<div className='flex-btn-end px-5'>
					<SubHeaderMobileBtns onSubmit={onSubmit} />
				</div>
			</form>
		</Form>
	);
};

export default AttributesForm;

