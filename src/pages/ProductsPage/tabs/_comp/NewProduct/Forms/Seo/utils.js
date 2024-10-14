import { z } from 'zod';

export const productSeoSchema = z.object({
	meta_keywords:z.string().min(3).max(70).optional(),
	meta_title:z.string().min(3).max(70).optional(),
	meta_description: z.string().min(3).max(160).optional(),
});

// Define default values for the schema
export const productSeoDefaultValues = {
	meta_keywords: '',
	meta_title: '',
	meta_description: '',
};
