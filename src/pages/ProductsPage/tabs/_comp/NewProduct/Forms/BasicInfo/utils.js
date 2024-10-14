import { z } from 'zod';


export const productBasicInfoSchema = z.object({
	en: z.object({
		name: z.string().min(3).max(50),
	}),
	ar: z.object({
		name: z.string().min(3).max(50),
	}),
	sku: z.string().min(3).max(30),
	brand_id: z.string().min(1),
	categories: z.string().min(1),
});

export const productBasicInfoDefaultValues = {
	en: {
		name: '',
	},
	ar: {
		name: '',
	},
	sku: '',
	brand_id: '',
	categories: '',
};
