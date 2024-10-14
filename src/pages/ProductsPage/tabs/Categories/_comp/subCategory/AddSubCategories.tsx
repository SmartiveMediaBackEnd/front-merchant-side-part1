import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import Tabs from 'src/app/components/optimized/Tabs/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { Button } from 'src/app/components/optimized';
import SpecificAutoCompleteInput from 'src/app/components/ui/SpecificAutoCompleteInput';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import FormField from 'src/app/components/ui/form/field';
import FileInput, { getDefaultFileInputOptions } from 'src/app/components/ui/file-input';
import { TfiUpload } from 'react-icons/tfi';
import { AddSubCategoriesSchemaValues, addSubCategoriesFormSchema } from './AddSubCategoriesForm';
import Textarea from 'src/app/components/optimized/InputsFields/Textarea';
import { AddFillIcon } from 'src/app/utils/icons';
import { GlobalDialog } from 'src/app/components/shared';
// import { selectItemsInterface } from 'src/pages/PagesPage/_comp/PagesSection/_comp/AddPage/_comp/ContentSeoPage';
// import { fileClassName } from 'src/pages/SettingsPage/GeneralSettings/_comp/GeneralSettingsMedia';
interface AddSubCategories {
	categoryNameEn: string;
	categoryNameAr: string;
	categoryLinkEn: string;
	categoryLinkAr: string;
	categoryDescriptionEn: string;
	categoryDescriptionAr: string;
	parentCategory: any[];
	group: File;
	banner: File;
	available: boolean;
	products: any[];
}
export default function AddSubCategories({
	openDialog,
	handleClose,
}: {
	openDialog: boolean;
	handleClose: () => void;
}) {
	//  hooks
	const { t } = useTranslation();

	const handleSubmit = (values: AddSubCategoriesSchemaValues) => {
		console.log(values);
	};
	const handelDefaultValue = () => {
		return {
			categoryNameEn: '',
			categoryNameAr: '',
			categoryLinkEn: '',
			categoryLinkAr: '',
			categoryDescriptionEn: '',
			categoryDescriptionAr: '',
			parentCategory: [],
			group: undefined,
			banner: undefined,
			available: false,
			products: [],
		};
	};

	const { formStore, onSubmit } = useForm({
		schema: addSubCategoriesFormSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	//   style of dialog
	const style = {
		height: { md: '35.8rem', xs: '27.5rem' },
		width: { md: '40rem', xs: '25.8rem' },
	};
	return;
	return (
		<GlobalDialog style={style} openDialog={openDialog} handleClose={handleClose}>
			<Form {...formStore}>
				<form onSubmit={onSubmit} className='flex-col-global'>
					<div className='flex items-center justify-between'>
						<h2 className='title font-semibold'>{t('Smart Living')}</h2>
						<Button LeftIcon={AddFillIcon} variant='tertiary'>
							{t('add sub')}
						</Button>
					</div>
					<Tabs
						body={
							<>
								<TabPanel value='1'>
									<div className='flex md:flex-row items-start flex-col gap-[2rem]'>
										<div className='flex flex-col gap-4'>
											{/* <FormField
												formStore={formStore}
												name='group'
												render={({ onChange, value, ...field }) => (
													<FileInput
														className={fileClassName}
														{...field}
														options={getDefaultFileInputOptions({
															accept: { 'group/*': [] },
															setError: (error) => {
																formStore.setError('group', { message: error.message });
															},
															onFileLoad: (params) => {
																onChange(params.file);
															},
														})}
													>
														<TfiUpload className='text-[1.5rem]' />
														<p>{t('Group poster')}</p>
													</FileInput>
												)}
											/> */}

											{/* banner */}
											{/* <FormField
												formStore={formStore}
												name='banner'
												render={({ onChange, value, ...field }) => (
													<FileInput
														className={fileClassName}
														{...field}
														options={getDefaultFileInputOptions({
															accept: { 'banner/*': [] },
															setError: (error) => {
																formStore.setError('banner', { message: error.message });
															},
															onFileLoad: (params) => {
																onChange(params.file);
															},
														})}
													>
														<TfiUpload className='text-[1.5rem]' />
														<p>{t('Add banner')}</p>
													</FileInput>
												)}
											/> */}
										</div>
										{/* ////////////////////////////////////////////// */}

										<div className='flex-col-global md:w-[80%] w-full'>
											<TabbedFormField
												formStore={formStore}
												keys={[
													{ name: 'categoryNameEn', label: 'En' },
													{ name: 'categoryNameAr', label: 'عربي' },
												]}
												label={t('Subcategory name')}
												renderer={(field) => <Input {...field} />}
											/>

											<TabbedFormField
												formStore={formStore}
												keys={[
													{ name: 'categoryLinkEn', label: 'En' },
													{ name: 'categoryLinkAr', label: 'عربي' },
												]}
												label={t('Subcategory link (Slug)')}
												renderer={(field) => <Input {...field} />}
											/>

											<TabbedFormField
												formStore={formStore}
												keys={[
													{ name: 'categoryDescriptionEn', label: 'En' },
													{ name: 'categoryDescriptionAr', label: 'عربي' },
												]}
												label={t('Subcategory description')}
												renderer={(field) => <Textarea {...field} />}
											/>
											{/* <SpecificAutoCompleteInput<AddSubCategoriesSchemaValues>
												label={t('Parent Subcategory')}
												name='parentCategory'
												formStore={formStore}
											/> */}
											<div className='flex-col-global gap-2'>
												<p>{t('Availability')}</p>
												<div className='flex-row-global gap-2'>
													<FormSwitchField<AddSubCategoriesSchemaValues>
														formStore={formStore}
														name='available'
														enable
													/>
													<p>{formStore.watch('available') ? 'On' : 'Off'}</p>
												</div>
											</div>
										</div>
									</div>
								</TabPanel>
								<TabPanel value='2'>
									<SpecificAutoCompleteInput<AddSubCategoriesSchemaValues>
										label={t('Products')}
										name='products'
										formStore={formStore}
									/>
								</TabPanel>
							</>
						}
					>
						{/*  children */}
						<Tab label={t('General Info')} value='1' />
						<Tab label={t('Products')} value='2' />
					</Tabs>
					<div className='flex justify-end items-center gap-4'>
						<Button onClick={handleClose} variant='tertiary'>
							{t('cancel')}
						</Button>
						<Button onClick={onSubmit} variant='primary'>
							{t('Save')}
						</Button>
					</div>
				</form>
			</Form>
		</GlobalDialog>
	);
}
