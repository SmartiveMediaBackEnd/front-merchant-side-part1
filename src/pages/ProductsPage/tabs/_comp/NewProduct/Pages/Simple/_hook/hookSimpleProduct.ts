import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { imageValidation } from 'src/pages/ProductsPage/tabs/Brands/_hook/AddbrandsFormSchema';
import { z } from 'zod';

export interface simpleProductInterface {
    name: string;
    price: number;
    quy: number;
    sku: string;
    category: string;
    images: File;
}
export const simpleProductSchema = {
    nameEn: z.string().min(1, 'Product name is required'),
    nameAr: z.string().min(1, 'Product name is required'),
    price: z.coerce.number().min(1).positive(),
    quy: z.coerce.number().optional(),
    sku: z.string().min(1, 'SKU code is required'),
    category: z.string().min(1, 'Category is required'),
    inventories: z.string().min(1, 'inventories is required'),
    // images: z.instanceof(File),
    images: imageValidation,
    type: z.optional(z.string()).or(z.literal('')),
    status: z.number(),
};


export const simpleProductsValues = {
    nameEn: '',
    nameAr: '',
    price: 0,
    quy: 0,
    sku: '',
    images: undefined,
    category: '',
    inventories: '',
    status: 0,
}
export type AddSimpleProductSchemaSchemaValues = InferredZodSchema<typeof simpleProductSchema>;