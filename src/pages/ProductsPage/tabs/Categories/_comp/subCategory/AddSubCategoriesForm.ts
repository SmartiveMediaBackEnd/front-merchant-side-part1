import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const stringValidation = z.string().min(1);

export const addSubCategoriesFormSchema = {
	categoryNameEn: stringValidation,
	categoryNameAr: stringValidation,
	categoryLinkEn: z.string().url(),
	categoryLinkAr: z.string().url(),
	categoryDescriptionEn: stringValidation,
	categoryDescriptionAr: stringValidation,
	parentCategory: z
		.array(
			z.object({
				id: stringValidation,
				name: stringValidation,
			}),
		)
		.nonempty(),
	group: z.instanceof(File),
	banner: z.instanceof(File),
	available: z.boolean(),
	products: z
		.array(
			z.object({
				id: stringValidation,
				name: stringValidation,
			}),
		)
		.nonempty(),
};

export type AddSubCategoriesSchemaValues = InferredZodSchema<typeof addSubCategoriesFormSchema>;
