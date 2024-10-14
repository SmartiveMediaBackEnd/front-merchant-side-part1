import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { cn } from 'src/app/utils';
import { Textarea } from 'src/app/components/ui/textarea';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import FormField from 'src/app/components/ui/form/field';
import FileInput, { getDefaultFileInputOptions } from 'src/app/components/ui/file-input';
import { Switch } from 'src/app/components/ui/switch';
import Button from 'src/app/components/optimized/Buttons/Button';
import { TfiUpload } from "react-icons/tfi";

/** @param {import("react").SVGProps<SVGSVGElement>} props  */

const BrandSchema = {
	nameEn: z.string().min(3).max(50),
	nameAr: z.string().min(3).max(50),
	link: z.string().url(),
	descriptionEn: z.string().min(10).max(1000),
	descriptionAr: z.string().min(10).max(1000),
	image: z.instanceof(File),
	isAvailable: z.boolean().default(true),
};

/**
 * @param {{
 *  defaultValues?: import("react-hook-form").FieldValues;
 *  handleSubmit: (values: import("react-hook-form").FieldValues) => void;
 * }} props
 *
 * @example
 *
 * ```jsx
 *	<BrandForm
 *		handleSubmit={(values) => {
 *			console.log(values);
 *		}}
 *	/>
 * ```
 */
export default function BrandForm(props) {
	const { t } = useTranslation();
	const { formStore, onSubmit } = useForm({
		schema: BrandSchema,
		handleSubmit: props.handleSubmit,
		defaultValues: { isAvailable: true, ...props.defaultValues },
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex flex-col'>
				<div className='flex gap-4'>
					<div>
						<FormField
							formStore={formStore}
							name='image'
							render={({ onChange, value, ...field }) => (
								<FileInput
									className='flex flex-col items-center justify-center gap-2 size-32'
									{...field}
									options={getDefaultFileInputOptions({
										accept: { 'image/*': [] },
										setError: (error) => {
											// console.log('error', error);
											formStore.setError('image', { message: error.message });
										},
										onFileLoad: (params) => {
											// console.log('params', params);
											onChange(params.file);
										},
									})}
								>
									<TfiUpload />
									<p>Brand poster</p>
								</FileInput>
							)}
						/>
					</div>
					<div className='flex flex-col flex-grow gap-4'>
						<TabbedFormField
							formStore={formStore}
							keys={[
								{ name: 'nameEn', label: 'En' },
								{ name: 'nameAr', label: 'عربي' },
							]}
							label={t('Name')}
							renderer={(field) => <Input {...field} />}
						/>
						<FormField
							formStore={formStore}
							name='link'
							label={`${t('Link')} (${t('Slug')})`}
							render={(field) => <Input {...field} />}
							description='www.dookan.net/'
						/>

						<TabbedFormField
							formStore={formStore}
							keys={[
								{ name: 'descriptionEn', label: 'En' },
								{ name: 'descriptionAr', label: 'عربي' },
							]}
							label={t('Description')}
							renderer={(field) => (
								<Textarea {...field} className={cn(field.className, 'size-full')} />
							)}
						/>

						<FormField
							formStore={formStore}
							name='isAvailable'
							label={t('Available')}
							render={(field) => (
								<div className='flex gap-1'>
									<Switch checked={field.value} onCheckedChange={field.onChange} />{' '}
									<p>{t(field.value ? 'On' : 'Off')}</p>
								</div>
							)}
						/>
					</div>
				</div>
				<div className='flex justify-end'>
					<Button type='submit' className='px-4'>
						{t('Add')}
					</Button>
				</div>
			</form>
		</Form>
	);
}
