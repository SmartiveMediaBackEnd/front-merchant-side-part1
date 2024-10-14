import { z } from 'zod';
import { productTypeMap } from '../../config';

export const productBundleSchema = {
	productType: z.literal(productTypeMap.bundle),
	bundle: z.object({
		items: z.array(
			z.object({
				tempId: z.string(),
				// quantity: z.coerce.number().min(0),
				name: z.string(),
				imgUrl: z.string().nullable().optional(),
			}),
		),
		isSelectedProductsUnlisted: z.boolean().default(false),
	}),
};

export const productBundleDefaultValues = {
	productType: productTypeMap.bundle,
	bundle: {
		items: [],
		isSelectedProductsUnlisted: false,
	},
};
