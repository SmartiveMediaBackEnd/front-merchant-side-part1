import { z } from 'zod';

// Define the schema for product specifications
// export const productSpecificationsRawSchema = z.object({
// 	specNameEn: z.string().min(10).max(1000),
// 	specNameAr: z.string().min(10).max(1000),
// 	specValueEn: z.string().min(10).max(1000),
// 	specValueAr: z.string().min(10).max(1000),
// });

// Define the schema for product description and specifications
export const productDescriptionAndSpecificationsRawSchema = z.object({
	en: z.object({
		description: z.string().min(10).max(1000),
	}),
	ar: z.object({
		description: z.string().min(10).max(1000),
	}),
});

// Define default values for the schema
export const productDescriptionAndSpecificationsDefaultValues = {
	en: {
		description: '',
	},
	ar: {
		description: '',
	},
};