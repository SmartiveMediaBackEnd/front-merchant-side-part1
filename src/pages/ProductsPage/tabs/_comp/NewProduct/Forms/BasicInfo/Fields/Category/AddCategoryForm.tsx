import { useForm, FormStore } from 'src/app/utils/hooks/form';
import { z, ZodSchema } from 'zod';
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
import { TfiUpload } from 'react-icons/tfi';
import { GlobalDialog } from 'src/app/components/shared';

interface AddCategoryFormProps {
  defaultValues?: Record<string, any>;
  handleSubmit: (values: Record<string, any>) => void;
  openDialog?: boolean;
  handleClose?: () => void;
}

const CategorySchema: ZodSchema = z.object({
  nameEn: z.string().min(3).max(50),
  nameAr: z.string().min(3).max(50),
  link: z.string().url(),
  descriptionEn: z.string().min(10).max(1000),
  descriptionAr: z.string().min(10).max(1000),
  groupPosterImage: z.instanceof(File),
  bannerImage: z.instanceof(File),
  isAvailable: z.boolean().default(true),
});

export default function AddCategoryForm({ defaultValues, handleSubmit, openDialog, handleClose }: AddCategoryFormProps) {
  const { t } = useTranslation();
  const { formStore, onSubmit } = useForm({
    schema: CategorySchema,
    handleSubmit,
    defaultValues: { isAvailable: true, ...defaultValues },
  }) as { formStore: FormStore; onSubmit: (event: React.FormEvent) => void };

  const style = {
    height: { md: '35.8rem', xs: '27.5rem' },
    width: { md: '40rem', xs: '25.8rem' },
  };

  return (
    <GlobalDialog style={style} openDialog={openDialog} handleClose={handleClose}>
      <Form {...formStore}>
        <form onSubmit={onSubmit} className='flex flex-col'>
          <div className='flex gap-4'>
            <div className='flex flex-col gap-4 w-28'>
              <div>
                <FormField
                  formStore={formStore}
                  name='groupPosterImage'
                  render={({ onChange, value, ...field }) => (
                    <FileInput
                      className='flex flex-col items-center justify-center text-center gap-2 h-28'
                      {...field}
                      options={getDefaultFileInputOptions({
                        accept: { 'image/*': [] },
                        setError: (error) => {
                          formStore.setError('groupPosterImage', { message: error.message });
                        },
                        onFileLoad: (params) => {
                          onChange(params.file);
                        },
                      })}
                    >
                      <TfiUpload />
                      <p>{t('Group poster')}</p>
                    </FileInput>
                  )}
                />
                <p className='textx-gray text-center'>{t('1:1 Size')}</p>
              </div>

              <div>
                <FormField
                  formStore={formStore}
                  name='bannerImage'
                  render={({ onChange, value, ...field }) => (
                    <FileInput
                      className='flex flex-col items-center justify-center text-center gap-2 h-24'
                      {...field}
                      options={getDefaultFileInputOptions({
                        accept: { 'image/*': [] },
                        setError: (error) => {
                          formStore.setError('bannerImage', { message: error.message });
                        },
                        onFileLoad: (params) => {
                          onChange(params.file);
                        },
                      })}
                    >
                      <TfiUpload />
                      <p>{t('Add banner')}</p>
                    </FileInput>
                  )}
                />
                <p className='textx-gray text-center'>{t('16:9 Size')}</p>
              </div>
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
    </GlobalDialog>
  );
}
