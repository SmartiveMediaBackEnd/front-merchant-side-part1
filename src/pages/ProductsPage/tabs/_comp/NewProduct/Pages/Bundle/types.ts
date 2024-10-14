import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { ProductSchema } from './utils';
import { UseFormReturn } from 'react-hook-form';

export type ProductFormValues = InferredZodSchema<typeof ProductSchema>;
export type ProductFormStore = UseFormReturn<ProductFormValues>;
