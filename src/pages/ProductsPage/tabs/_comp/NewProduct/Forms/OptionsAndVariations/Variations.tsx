// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useAppDispatch } from 'src/app/store';
// import { getAllAttributes } from 'src/app/store/slices/Attributes/AttributeAsyncThunks';
// import { FaCirclePlus } from 'react-icons/fa6';
// import { Button } from 'src/app/components/optimized';
// import SelectFormField from 'src/app/components/ui/form/SelectFormField';
// import { useAppSelector } from 'src/app/store';
// import { GlobalDialog } from 'src/app/components/shared';
// import AutoComplete from 'src/app/components/ui/form/AutoComplete';
// import { RemoveIcon } from 'src/app/utils/icons';
// import AdvancedFields from './AdvancedFields';
// import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';
// import { useFieldArray, UseFormReturn } from 'react-hook-form';
// import { getProduct } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
// import { useFormStore } from 'src/app/context/ConfigurableContext ';
// import toast from 'react-hot-toast';
// import { useSearchParams } from 'react-router-dom';

// export interface AttributeValue {
// 	id: number;
// 	name: string;
// }

// interface SelectedOption {
// 	code: string;
// 	attributeValues: AttributeValue[];
// }

// interface Variation {
// 	id: string;
// 	name: string;
// }

// export default function ProductFormOptionsAndVariationsSection({ id }: { id?: string }) {
// 	const { attributes } = useAppSelector((state) => state.attributes);
// 	const [showAdvancedFields, setShowAdvancedFields] = useState<Record<number, boolean>>({});
// 	const [openDialog, setOpenDialog] = useState(false);
// 	const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
// 	const [variations, setVariations] = useState<any[]>([]);
// 	const [variantIdToDisplay, setVariantIdToDisplay] = useState(null);
// 	const { t } = useTranslation();
// 	const dispatch = useAppDispatch();
// 	const { product } = useAppSelector((state) => state.allProducts);
// 	const { formStore } = useFormStore();
// 	const [searchParams] = useSearchParams();
// 	const idUrl = searchParams.get('id');
// 	// const { id: urlId } = useParams();

// 	const { fields, append, update } = useFieldArray({
// 		control: formStore.control,
// 		name: 'variants',
// 	});

// 	const addBasicVariant = () => {
// 		append({
// 			code: '',
// 			attributeValues: [
// 				{
// 					id: 0,
// 					name: '',
// 				},
// 			],
// 			sku: '',
// 			en: {
// 				name: '',

// 			},
// 			ar: {
// 				name: '',

// 			},
// 			price: 0,

// 			quantity: 0,
// 			discount: 0,
// 			inventories: [
// 				{
// 					id: 0,
// 					quantity: 0,
// 				},
// 			],
// 			color: '',
// 			size: '',
// 			status: 1,
// 			new: 0,
// 			featured: 0,
// 			visible_individually: 0,
// 		});
// 		setOpenDialog(true);
// 	};
// 	const toggleAdvancedFields = (index: number) => {
// 		setShowAdvancedFields((prev) => ({
// 			...prev,
// 			[index]: !prev[index],
// 		}));
// 	};

// 	useEffect(() => {
// 		dispatch(getAllAttributes());
// 	}, [dispatch]);


// 	// useEffect(() => {
// 	// 	if (idUrl) {
// 	// 		dispatch(getProduct(idUrl)).then(() => {
// 	// 			if (product?.variants) {
// 	// 				setVariations(product.variants);
// 	// 			} else {
// 	// 				console.log('No variants found, setting to empty array.');
// 	// 				setVariations([]);
// 	// 			}
// 	// 		});
// 	// 	} else {
// 	// 		console.log('Adding new product');
// 	// 		setVariations([]);
// 	// 	}
// 	// }, [idUrl, dispatch]);

// 	useEffect(() => {
// 		if (idUrl) {
// 			if (!product) {
// 				dispatch(getProduct(idUrl));
// 				console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhh')
// 			} else {
// 				setVariations(product.variants || []);
// 			}
// 		} else {
// 			setVariations([]);
// 		}
// 	}, [idUrl, product]);


// 	const handleSaveSelections = (index: number) => {
// 		const selectedCode = formStore.watch(`variants.${index}.code`) as string;
// 		const selectedAttributeValues = formStore.watch(`variants.${index}.attributeValues`) as AttributeValue[];

// 		const filteredAttributeValues = selectedAttributeValues
// 			.filter((selectedValue: AttributeValue) => selectedValue !== undefined && selectedValue !== null)
// 			.filter((selectedValue: AttributeValue) => {
// 				return !selectedOptions.some((option: SelectedOption) => {
// 					if (option.code !== selectedCode) return false;
// 					return option.attributeValues.some((value: AttributeValue) => selectedValue.id === value.id);
// 				});
// 			});

// 		if (filteredAttributeValues.length > 0) {
// 			const selected: SelectedOption = {
// 				code: selectedCode,
// 				attributeValues: filteredAttributeValues,
// 			};

// 			setSelectedOptions((prevSelectedOptions: SelectedOption[]) => {
// 				const updatedOptions = [...prevSelectedOptions, selected];

// 				const groupedOptions: Record<string, AttributeValue[]> = {};
// 				updatedOptions.forEach(option => {
// 					if (!groupedOptions[option.code]) {
// 						groupedOptions[option.code] = [];
// 					}
// 					groupedOptions[option.code].push(...option.attributeValues);
// 				});

// 				const newVariations = getCombinations(groupedOptions);
// 				setVariations(newVariations || []);
// 				// console.log('newVariations:', newVariations);
// 				return updatedOptions;
// 			});
// 		} else {
// 			toast.error('All selected attribute values are already present.');
// 		}
// 		setOpenDialog(false);
// 	};

// 	const getCombinations = (groupedOptions: Record<string, AttributeValue[]>): Variation[] | null => {
// 		const result: Variation[] = [];
// 		const codes = Object.keys(groupedOptions);

// 		const helper = (combination: AttributeValue[], depth: number) => {
// 			if (depth === codes.length) {
// 				const id = combination.map(v => v.id).join(' / ');
// 				const name = combination.map(v => v.name).join(' / ');
// 				result.push({ id, name });
// 				return;
// 			}
// 			const currentCode = codes[depth];
// 			const currentOptions = groupedOptions[currentCode];

// 			currentOptions.forEach(value => {
// 				helper([...combination, value], depth + 1);
// 			});
// 		};

// 		helper([], 0);
// 		return result.length > 0 ? result : null;
// 	};

// 	const removeVariation = (index: number) => {
// 		setVariations((prev) => prev.filter((_, i) => i !== index));
// 		setSelectedOptions((prev) => prev.filter((_, i) => i !== index));
// 	};

// 	const handleOpenVariantDialog = (variantId) => {
// 		setVariantIdToDisplay(variantId);
// 	};
// 	///////////////////////////////////////////////////////////
// 	return (
// 		<section className='global-cards gap-2' id={id}>
// 			<section className='flex-col-global gap-1'>
// 				<h3 className='title'>{t('Options & Variations')}</h3>
// 				<p className='text-gray-400 text-sm opacity-80'>
// 					{t(
// 						'Allow your customers to select from options such as Size and Color on your website.',
// 					)}
// 				</p>
// 			</section>

// 			{/* form */}
// 			<section>
// 				<Button variant='secondary' LeftIcon={FaCirclePlus} type="button" onClick={addBasicVariant}>
// 					{fields.length > 0 ? t('add more variant') : t('add variant')}
// 				</Button>
// 				{fields.map((field, index) => (
// 					<div key={field.id}>
// 						<GlobalDialog
// 							openDialog={openDialog}
// 							handleClose={() => setOpenDialog(false)}
// 							style={{
// 								width: {
// 									lg: '50%',
// 									md: '70%',
// 									xs: '90%',
// 								},
// 								height: { md: '400px', xs: '400px' },
// 							}}
// 						>
// 							<div className='flex-col-global justify-between h-full'>
// 								<div>
// 									<div>
// 										<SelectFormField
// 											add_button
// 											formStore={formStore}
// 											name={`variants.${index}.code`}
// 											placeholder={t('Select option')}
// 											label={t('Option Name')}
// 											AnotherName={`variants.${index}.attributeValues`}
// 											options={attributes.map((e: any) => ({
// 												value: e.code,
// 												label: e.name,
// 											}))}
// 										/>
// 									</div>
// 									<div className="mt-2">
// 										{(() => {
// 											const attributeValue = attributes?.filter((e: any) => {
// 												const variantCode = formStore.watch(`variants.${index}.code`);
// 												console.log('variantCode ', variantCode)
// 												return e?.code?.toString() === variantCode?.toString();
// 											}) || [];

// 											if (attributeValue.length === 0) {
// 												return null;
// 											}

// 											switch (attributeValue[0]?.type) {
// 												case 'select':
// 													return (
// 														<AutoComplete
// 															name={`variants.${index}.attributeValues`}
// 															label={t('Attribute value')}
// 															formStore={formStore}
// 															options={attributeValue[0]?.options?.map((e: any) => ({
// 																id: e.id,
// 																name: e.label,
// 																// code: e.code,
// 															})) || []}
// 															onChange={(selectedOptions) => {
// 																const formattedOptions = selectedOptions.map((selectedId) => {
// 																	const originalOption = attributeValue[0]?.options?.find((option: any) => option.id === selectedId);
// 																	return originalOption
// 																		? {
// 																			id: originalOption.id,
// 																			// code: originalOption.code,
// 																			name: originalOption.label,
// 																		}
// 																		: null;
// 																}).filter(option => option !== null);
// 																formStore.setValue(`variants.${index}.attributeValues`, formattedOptions);
// 															}}
// 														/>
// 													);
// 												default:
// 													return null;
// 											}
// 										})()}
// 									</div>
// 								</div>

// 								<div className='flex-end'>
// 									<Button
// 										variant="primary"
// 										type="button"
// 										onClick={() => handleSaveSelections(index)}
// 									>
// 										{t('add')}
// 									</Button>
// 								</div>
// 							</div>

// 						</GlobalDialog>
// 					</div>
// 				))
// 				}
// 			</section>

// 			<section>
// 				<ul className="flex flex-col gap-4">
// 					{variations.map((variation, index) => (
// 						<li key={index} className="cardDetails-sharedClass flex justify-between items-center py-3 px-5">
// 							<p
// 								className="text-title cursor-pointer"
// 								onClick={() => {
// 									toggleAdvancedFields(index); // Toggle the advanced fields
// 									handleOpenVariantDialog(variation.id); // Update the variantIdToDisplay
// 								}}
// 							>
// 								{idUrl ? variation.sku : variation.name}
// 							</p>

// 							<button type='button' onClick={() => removeVariation(index)} >
// 								<RemoveIcon className="fill-error" />
// 							</button>

// 							{showAdvancedFields[index] && (
// 								<AdvancedFields
// 									index={index}
// 									formStore={formStore}
// 									update={update}
// 									openDialog={showAdvancedFields[index]}
// 									handleClose={() => toggleAdvancedFields(index)}
// 									name={variation.name}
// 									idVar={variation.id}
// 									variation={variation}
// 									id={id}
// 									variantIdToDisplay={variantIdToDisplay} // Pass the variantIdToDisplay prop
// 								/>
// 							)}
// 						</li>
// 					))}
// 				</ul>
// 			</section>

// 		</section>
// 	)
// }
///////////////////////////////////////////////////

// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useAppDispatch } from 'src/app/store';
// import { getAllAttributes } from 'src/app/store/slices/Attributes/AttributeAsyncThunks';
// import { FaCirclePlus } from 'react-icons/fa6';
// import { Button } from 'src/app/components/optimized';
// import SelectFormField from 'src/app/components/ui/form/SelectFormField';
// import { useAppSelector } from 'src/app/store';
// import { GlobalDialog } from 'src/app/components/shared';
// import AutoComplete from 'src/app/components/ui/form/AutoComplete';
// import { RemoveIcon } from 'src/app/utils/icons';
// import AdvancedFields from './AdvancedFields';
// import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';
// import { useFieldArray, UseFormReturn } from 'react-hook-form';
// import { getProduct } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
// import { useFormStore } from 'src/app/context/ConfigurableContext ';
// import toast from 'react-hot-toast';
// import { useSearchParams } from 'react-router-dom';

// export interface AttributeValue {
// 	id: number;
// 	name: string;
// }

// interface SelectedOption {
// 	code: string;
// 	attributeValues: AttributeValue[];
// }

// interface Variation {
// 	id: string;
// 	name: string;
// }

// export default function ProductFormOptionsAndVariationsSection({ id }: { id?: string }) {
// 	const { attributes } = useAppSelector((state) => state.attributes);
// 	const [showAdvancedFields, setShowAdvancedFields] = useState<Record<number, boolean>>({});
// 	const [openDialog, setOpenDialog] = useState(false);
// 	const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
// 	const [variations, setVariations] = useState<any[]>([]);
// 	const [variantIdToDisplay, setVariantIdToDisplay] = useState(null);
// 	const { t } = useTranslation();
// 	const dispatch = useAppDispatch();
// 	const { product } = useAppSelector((state) => state.allProducts);
// 	const { formStore } = useFormStore();
// 	const [searchParams] = useSearchParams();
// 	const idUrl = searchParams.get('id');
// 	// const { id: urlId } = useParams();

// 	const { fields, append, update } = useFieldArray({
// 		control: formStore.control,
// 		name: 'variants',
// 	});

// 	const addBasicVariant = () => {
// 		append({
// 			code: '',
// 			attributeValues: [
// 				{
// 					id: 0,
// 					name: '',
// 				},
// 			],
// 			sku: '',
// 			en: {
// 				name: '',

// 			},
// 			ar: {
// 				name: '',

// 			},
// 			price: 0,

// 			quantity: 0,
// 			discount: 0,
// 			inventories: [
// 				{
// 					id: 0,
// 					quantity: 0,
// 				},
// 			],
// 			color: '',
// 			size: '',
// 			status: 1,
// 			new: 0,
// 			featured: 0,
// 			visible_individually: 0,
// 		});
// 		setOpenDialog(true);
// 	};
// 	const toggleAdvancedFields = (index: number) => {
// 		setShowAdvancedFields((prev) => ({
// 			...prev,
// 			[index]: !prev[index],
// 		}));
// 	};

// 	useEffect(() => {
// 		dispatch(getAllAttributes());
// 	}, [dispatch]);


// 	// useEffect(() => {
// 	// 	console.log('gg', formStore.getValues());
// 	// }, [formStore]);

// 	// جربي استخدمي ده

// 	useEffect(() => {
// 		if (idUrl) {
// 			dispatch(getProduct(idUrl)).then(() => {
// 				if (product?.variants) {
// 					setVariations(product.variants);
// 				} else {
// 					console.log('No variants found, setting to empty array.');
// 					setVariations([]);
// 				}
// 			});
// 		} else {
// 			console.log('Adding new product');
// 			setVariations([]);
// 		}
// 	}, [idUrl, dispatch]);

// 	useEffect(() => {
// 		if (idUrl) {
// 			dispatch(getProduct(idUrl)).then((action) => {
// 				const response = action.payload;

// 				if (response?.product?.variants) {
// 					setVariations(response.product.variants); // تعيين الـ variants فقط
// 				} else {
// 					console.log('No variants found, setting to empty array.');
// 					setVariations([]);
// 				}
// 			});
// 		} else {
// 			console.log('Adding new product');
// 			setVariations([]);
// 		}
// 	}, [idUrl, dispatch]);



// 	const handleSaveSelections = (index: number) => {
// 		const selectedCode = formStore.watch(`variants.${index}.code`) as string;
// 		const selectedAttributeValues = formStore.watch(`variants.${index}.attributeValues`) as AttributeValue[];

// 		const filteredAttributeValues = selectedAttributeValues
// 			.filter((selectedValue: AttributeValue) => selectedValue !== undefined && selectedValue !== null)
// 			.filter((selectedValue: AttributeValue) => {
// 				return !selectedOptions.some((option: SelectedOption) => {
// 					if (option.code !== selectedCode) return false;
// 					return option.attributeValues.some((value: AttributeValue) => selectedValue.id === value.id);
// 				});
// 			});

// 		if (filteredAttributeValues.length > 0) {
// 			const selected: SelectedOption = {
// 				code: selectedCode,
// 				attributeValues: filteredAttributeValues,
// 			};

// 			setSelectedOptions((prevSelectedOptions: SelectedOption[]) => {
// 				const updatedOptions = [...prevSelectedOptions, selected];

// 				const groupedOptions: Record<string, AttributeValue[]> = {};
// 				updatedOptions.forEach(option => {
// 					if (!groupedOptions[option.code]) {
// 						groupedOptions[option.code] = [];
// 					}
// 					groupedOptions[option.code].push(...option.attributeValues);
// 				});

// 				const newVariations = getCombinations(groupedOptions);
// 				setVariations(newVariations || []);
// 				// console.log('newVariations:', newVariations);
// 				return updatedOptions;
// 			});
// 		} else {
// 			toast.error('All selected attribute values are already present.');
// 		}
// 		setOpenDialog(false);
// 	};

// 	const getCombinations = (groupedOptions: Record<string, AttributeValue[]>): Variation[] | null => {
// 		const result: Variation[] = [];
// 		const codes = Object.keys(groupedOptions);

// 		const helper = (combination: AttributeValue[], depth: number) => {
// 			if (depth === codes.length) {
// 				const id = combination.map(v => v.id).join(' / ');
// 				const name = combination.map(v => v.name).join(' / ');
// 				result.push({ id, name });
// 				return;
// 			}
// 			const currentCode = codes[depth];
// 			const currentOptions = groupedOptions[currentCode];

// 			currentOptions.forEach(value => {
// 				helper([...combination, value], depth + 1);
// 			});
// 		};

// 		helper([], 0);
// 		return result.length > 0 ? result : null;
// 	};

// 	const removeVariation = (index: number) => {
// 		setVariations((prev) => prev.filter((_, i) => i !== index));
// 		setSelectedOptions((prev) => prev.filter((_, i) => i !== index));
// 	};

// 	const handleOpenVariantDialog = (variantId) => {
// 		setVariantIdToDisplay(variantId);
// 	};
// 	///////////////////////////////////////////////////////////
// 	return (
// 		<section className='global-cards gap-2' id={id}>
// 			<section className='flex-col-global gap-1'>
// 				<h3 className='title'>{t('Options & Variations')}</h3>
// 				<p className='text-gray-400 text-sm opacity-80'>
// 					{t(
// 						'Allow your customers to select from options such as Size and Color on your website.',
// 					)}
// 				</p>
// 			</section>

// 			{/* form */}
// 			<section>
// 				<Button variant='secondary' LeftIcon={FaCirclePlus} type="button" onClick={addBasicVariant}>
// 					{fields.length > 0 ? t('add more variant') : t('add variant')}
// 				</Button>
// 				{fields.map((field, index) => (
// 					<div key={field.id}>
// 						<GlobalDialog
// 							openDialog={openDialog}
// 							handleClose={() => setOpenDialog(false)}
// 							style={{
// 								width: {
// 									lg: '50%',
// 									md: '70%',
// 									xs: '90%',
// 								},
// 								height: { md: '400px', xs: '400px' },
// 							}}
// 						>
// 							<div className='flex-col-global justify-between h-full'>
// 								<div>
// 									<div>
// 										<SelectFormField
// 											add_button
// 											formStore={formStore}
// 											name={`variants.${index}.code`}
// 											placeholder={t('Select option')}
// 											label={t('Option Name')}
// 											AnotherName={`variants.${index}.attributeValues`}
// 											options={attributes.map((e: any) => ({
// 												value: e.code,
// 												label: e.name,
// 											}))}
// 										/>
// 									</div>
// 									<div className="mt-2">
// 										{(() => {
// 											const attributeValue = attributes?.filter((e: any) => {
// 												const variantCode = formStore.watch(`variants.${index}.code`);
// 												console.log('variantCode ', variantCode)
// 												return e?.code?.toString() === variantCode?.toString();
// 											}) || [];

// 											if (attributeValue.length === 0) {
// 												return null;
// 											}

// 											switch (attributeValue[0]?.type) {
// 												case 'select':
// 													return (
// 														<AutoComplete
// 															name={`variants.${index}.attributeValues`}
// 															label={t('Attribute value')}
// 															formStore={formStore}
// 															options={attributeValue[0]?.options?.map((e: any) => ({
// 																id: e.id,
// 																name: e.label,
// 																// code: e.code,
// 															})) || []}
// 															onChange={(selectedOptions) => {
// 																const formattedOptions = selectedOptions.map((selectedId) => {
// 																	const originalOption = attributeValue[0]?.options?.find((option: any) => option.id === selectedId);
// 																	return originalOption
// 																		? {
// 																			id: originalOption.id,
// 																			// code: originalOption.code,
// 																			name: originalOption.label,
// 																		}
// 																		: null;
// 																}).filter(option => option !== null);
// 																formStore.setValue(`variants.${index}.attributeValues`, formattedOptions);
// 															}}
// 														/>
// 													);
// 												default:
// 													return null;
// 											}
// 										})()}
// 									</div>
// 								</div>

// 								<div className='flex-end'>
// 									<Button
// 										variant="primary"
// 										type="button"
// 										onClick={() => handleSaveSelections(index)}
// 									>
// 										{t('add')}
// 									</Button>
// 								</div>
// 							</div>

// 						</GlobalDialog>
// 					</div>
// 				))
// 				}
// 			</section>

// 			<section>
// 				<ul className="flex flex-col gap-4">
// 					{variations.map((variation, index) => (
// 						<li key={index} className="cardDetails-sharedClass flex justify-between items-center py-3 px-5">
// 							<p
// 								className="text-title cursor-pointer"
// 								onClick={() => {
// 									toggleAdvancedFields(index); // Toggle the advanced fields
// 									handleOpenVariantDialog(variation.id); // Update the variantIdToDisplay
// 								}}
// 							>
// 								{variation.name}
// 							</p>

// 							<button type='button' onClick={() => removeVariation(index)} >
// 								<RemoveIcon className="fill-error" />
// 							</button>

// 							{showAdvancedFields[index] && (
// 								<AdvancedFields
// 									index={index}
// 									formStore={formStore}
// 									update={update}
// 									openDialog={showAdvancedFields[index]}
// 									handleClose={() => toggleAdvancedFields(index)}
// 									name={variation.name}
// 									idVar={variation.id}
// 									variation={variation}
// 									id={id}
// 									variantIdToDisplay={variantIdToDisplay} // Pass the variantIdToDisplay prop
// 								/>
// 							)}
// 						</li>
// 					))}
// 				</ul>
// 			</section>

// 		</section>
// 	)
// }
///////////////////******************************************************************************************** */


import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'src/app/store';
import { getAllAttributes } from 'src/app/store/slices/Attributes/AttributeAsyncThunks';
import { FaCirclePlus } from 'react-icons/fa6';
import { Button } from 'src/app/components/optimized';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';
import { useAppSelector } from 'src/app/store';
import { GlobalDialog } from 'src/app/components/shared';
import AutoComplete from 'src/app/components/ui/form/AutoComplete';
import { RemoveIcon } from 'src/app/utils/icons';
import AdvancedFields from './AdvancedFields';
import { AddProductSchemaSchemaValues } from '../../Pages/Configurable/utils';
import { useFieldArray, UseFormReturn } from 'react-hook-form';
import { getProduct } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import { useFormStore } from 'src/app/context/ConfigurableContext ';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export interface AttributeValue {
	id: number;
	name: string;
}

interface SelectedOption {
	code: string;
	attributeValues: AttributeValue[];
}

interface Variation {
	id: string;
	name: string;
	[key: string]: any;
}

export default function ProductFormOptionsAndVariationsSection({ id }: { id?: string }) {
	const { attributes } = useAppSelector((state) => state.attributes);
	const [showAdvancedFields, setShowAdvancedFields] = useState<Record<number, boolean>>({});
	const [openDialog, setOpenDialog] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
	const [variations, setVariations] = useState<any[]>([]);
	const [variantIdToDisplay, setVariantIdToDisplay] = useState(null);
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const { formStore } = useFormStore();

	const variants = formStore.getValues('variants') || [];
	console.log('variantsvariants', variants)
	const [searchParams] = useSearchParams();
	const urlId = searchParams.get('id');

	const { fields, append, update } = useFieldArray({
		control: formStore.control,
		name: 'variants',
	});

	const addBasicVariant = () => {
		append({
			code: '',
			attributeValues: [
				{
					id: 0,
					name: '',
				},
			],
			sku: '',
			en: {
				name: '',

			},
			ar: {
				name: '',

			},
			price: 0,
			discount: 0,
			color: '',
			size: '',
			status: 1,
			quantity: 0,
			inventories: [
				{
					id: 0,
					quantity: 0,
				},
			],

		});
		setOpenDialog(true);
	};
	useEffect(() => {
		if (urlId) {
			if (variants.length > 0) {
				setVariations((prevVariations) => [...prevVariations, ...variants]);
			}
		}
	}, [urlId, variants]);
	useEffect(() => {
		dispatch(getAllAttributes());
	}, [dispatch]);


	const toggleAdvancedFields = (index: number) => {
		setShowAdvancedFields((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	const handleSaveSelections = (index: number) => {
		const selectedCode = formStore.watch(`variants.${index}.code`) as string;
		const selectedAttributeValues = formStore.watch(`variants.${index}.attributeValues`) as AttributeValue[];

		const filteredAttributeValues = selectedAttributeValues
			.filter((selectedValue: AttributeValue) => selectedValue !== undefined && selectedValue !== null)
			.filter((selectedValue: AttributeValue) => {
				return !selectedOptions.some((option: SelectedOption) => {
					if (option.code !== selectedCode) return false;
					return option.attributeValues.some((value: AttributeValue) => selectedValue.id === value.id);
				});
			});

		if (filteredAttributeValues.length > 0) {
			const selected: SelectedOption = {
				code: selectedCode,
				attributeValues: filteredAttributeValues,
			};

			setSelectedOptions((prevSelectedOptions: SelectedOption[]) => {
				const updatedOptions = [...prevSelectedOptions, selected];

				const groupedOptions: Record<string, AttributeValue[]> = {};
				updatedOptions.forEach(option => {
					if (!groupedOptions[option.code]) {
						groupedOptions[option.code] = [];
					}
					groupedOptions[option.code].push(...option.attributeValues);
				});

				const newVariations = getCombinations(groupedOptions);
				setVariations(newVariations || []);
				console.log('Updated Variations:', newVariations); // Debugging line

				return updatedOptions;
			});
		} else {
			toast.error('All selected attribute values are already present.');
		}
		setOpenDialog(false);
	};

	const getCombinations = (groupedOptions: Record<string, AttributeValue[]>): Variation[] => {
		const result: Variation[] = [];

		const generateCombinations = (currentCombination: AttributeValue[], depth: number) => {
			const codes = Object.keys(groupedOptions);
			if (depth === codes.length) {
				const id = currentCombination.map(v => v.id).join(' / ');
				const name = currentCombination.map(v => v.name).join(' / ');
				result.push({ id, name });
				return;
			}

			const currentCode = codes[depth];
			for (const value of groupedOptions[currentCode]) {
				generateCombinations([...currentCombination, value], depth + 1);
			}
		};

		generateCombinations([], 0);
		return result;
	};

	const removeVariation = (index: number) => {
		const currentVariants = formStore.getValues('variants');
		const updatedVariants = currentVariants.filter((_, i) => i !== index);
		formStore.setValue('variants', updatedVariants);

		setVariations((prev) => prev.filter((_, i) => i !== index));
		setSelectedOptions((prev) => prev.filter((option) => option.code !== currentVariants[index].code));
	};


	const handleOpenVariantDialog = (variantId: any) => {
		setVariantIdToDisplay(variantId);
	};

	console.log('selectedOptions', selectedOptions)
	console.log('variations', variations)

	const array = urlId ? variants : variations;

	///////////////////////////////////////////////////////////
	return (
		<section className='global-cards gap-2' id={id}>
			<section className='flex-col-global gap-1'>
				<h3 className='title'>{t('Options & Variations')}</h3>
				<p className='text-gray-400 text-sm opacity-80'>
					{t(
						'Allow your customers to select from options such as Size and Color on your website.',
					)}
				</p>
			</section>

			{/* form */}
			<section>
				<Button variant='secondary' LeftIcon={FaCirclePlus} type="button" onClick={addBasicVariant}>
					{fields.length > 0 ? t('add more variant') : t('add variant')}
				</Button>
				{fields.map((field, index) => (
					<div key={field.id}>
						<GlobalDialog
							openDialog={openDialog}
							handleClose={() => setOpenDialog(false)}
							style={{
								width: {
									lg: '50%',
									md: '70%',
									xs: '90%',
								},
								height: { md: '400px', xs: '400px' },
							}}
						>
							<div className='flex-col-global justify-between h-full'>
								<div>
									<div>
										<SelectFormField
											add_button
											formStore={formStore}
											name={`variants.${index}.code`}
											placeholder={t('Select option')}
											label={t('Option Name')}
											AnotherName={`variants.${index}.attributeValues`}
											options={attributes.map((e: any) => ({
												value: e.code,
												label: e.name,
											}))}
										/>
									</div>
									<div className="mt-2">
										{(() => {
											const attributeValue = attributes?.filter((e: any) => {
												const variantCode = formStore.watch(`variants.${index}.code`);
												console.log('variantCode ', variantCode)
												return e?.code?.toString() === variantCode?.toString();
											}) || [];

											if (attributeValue.length === 0) {
												return null;
											}

											switch (attributeValue[0]?.type) {
												case 'select':
													return (
														<AutoComplete
															name={`variants.${index}.attributeValues`}
															label={t('Attribute value')}
															formStore={formStore}
															options={attributeValue[0]?.options?.map((e: any) => ({
																id: e.id,
																name: e.label,
																// code: e.code,
															})) || []}

															onChange={(selectedOptions) => {
																const formattedOptions = selectedOptions.map((selectedId) => {
																	const originalOption = attributeValue[0]?.options?.find((option: any) => option.id === selectedId);
																	return originalOption
																		? {
																			id: originalOption.id,
																			// code: originalOption.code,
																			name: originalOption.label,
																		}
																		: null;
																}).filter(option => option !== null);
																formStore.setValue(`variants.${index}.attributeValues`, formattedOptions);
															}}
														/>
													);
												default:
													return null;
											}
										})()}
									</div>
								</div>

								<div className='flex-end'>
									<Button
										variant="primary"
										type="button"
										onClick={() => handleSaveSelections(index)}
									>
										{t('add')}
									</Button>
								</div>
							</div>

						</GlobalDialog>
					</div>
				))
				}
			</section>

			<section>
				<ul className="flex flex-col gap-4">

					{array?.map((variation, index) => (
						<li key={index} className="cardDetails-sharedClass flex justify-between items-center py-3 px-5">
							<p
								className="text-title cursor-pointer"
								onClick={() => {
									toggleAdvancedFields(index);
									handleOpenVariantDialog(variation.id);
								}}
							>
								{urlId ? variation.sku : variation.name}
							</p>

							<button type='button' onClick={() => removeVariation(index)} >
								<RemoveIcon className="fill-error" />
							</button>

							{showAdvancedFields[index] && (
								<AdvancedFields
									index={index}
									formStore={formStore}
									openDialog={showAdvancedFields[index]}
									handleClose={() => toggleAdvancedFields(index)}
									name={variation.name}
									idVar={variation.id}
									variation={variation}
									id={id}
									variantIdToDisplay={variantIdToDisplay}
									onSave={(updated: any) => update(index, updated)}
								/>
							)}

						</li>
					))}
				</ul>
			</section>
		</section >
	)
}
//////////////////////////////////



// const updateElement = (id: string, element: { id: string;[key: string]: any }) => {
// 	setSelectedOptions((prev) => {
// 		const newElements = [...prev];
// 		const index = newElements.findIndex((el) => el.id === id);

// 		if (index !== -1) {
// 			newElements[index] = { ...newElements[index], ...element };
// 		}

// 		return newElements;
// 	});
// };
// const updateVariation = (id: string, variation: { id: string;[key: string]: any }) => {
// 	// setVariations((prev) => {
// 	// 	const newVariations = [...prev];
// 	// 	const index = newVariations.findIndex((el) => el.id === id);

// 	// 	if (index !== -1) {
// 	// 		newVariations[index] = { ...newVariations[index], ...variation };
// 	// 	} else {
// 	// 		console.error(`Variation with id ${id} not found.`);
// 	// 	}

// 	// 	return newVariations;
// 	// });

// 	setVariations((prevVariations) => {
// 		const updatedVariations = [...prevVariations];
// 		const index = updatedVariations.findIndex(v => v.id === id);
// 		if (index !== -1) {
// 			updatedVariations[index] = { ...updatedVariations[index], ...variation };
// 		}
// 		return updatedVariations;
// 	});

// // };




// useEffect(() => {
// 	if (urlId) {
// 		// Get grouped options based on selectedOptions
// 		const groupedOptions: Record<string, AttributeValue[]> = {};
// 		selectedOptions.forEach(option => {
// 			if (!groupedOptions[option.code]) {
// 				groupedOptions[option.code] = [];
// 			}
// 			groupedOptions[option.code].push(...option.attributeValues);
// 		});

// 		const newVariations = getCombinations(groupedOptions);
// 		setVariations(newVariations || []);
// 		console.log('Updated Variations:', newVariations); // Debugging line
// 	}
// }, [urlId]);



// const getCombinations = (groupedOptions: Record<string, AttributeValue[]>): Variation[] | null => {
// 	const result: Variation[] = [];
// 	const codes = Object.keys(groupedOptions);

// 	const helper = (combination: AttributeValue[], depth: number) => {
// 		if (depth === codes.length) {
// 			const id = combination.map(v => v.id).join(' / ');
// 			const name = combination.map(v => v.name).join(' / ');
// 			result.push({ id, name });
// 			return;
// 		}
// 		const currentCode = codes[depth];
// 		const currentOptions = groupedOptions[currentCode];

// 		currentOptions.forEach(value => {
// 			helper([...combination, value], depth + 1);
// 		});
// 	};

// 	helper([], 0);
// 	return result.length > 0 ? result : null;
// };