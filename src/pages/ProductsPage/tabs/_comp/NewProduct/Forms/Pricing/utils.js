import { z } from 'zod';

// export const productPricingSchema = {
// 	price: z.coerce.number().min(1).default(0),
// 	discount: z.coerce.number().min(0).optional(),
// 	cost: z.coerce.number().min(0).optional(),
// 	taxable: z.number(),
// 	// continue_selling:z.number(),
// 	profit: z.coerce.number().min(0).optional(),
// 	// bulkPrices: z.array(
// 	// 	z.object({
// 	// 		tempId: z.string(),
// 	// 		from: z.coerce.number().min(0),
// 	// 		to: z.coerce.number().min(0),
// 	// 		currency: z.string(),
// 	// 	}),
// 	// ),
// };

// // Define default values for the schema
// export const productPricingDefaultValues = {
// 	price: 0,
// 	discount: undefined,
// 	cost: undefined,
// 	taxable: 0,
// 	// continue_selling:0,
// 	profit: undefined,
// 	// bulkPrices: [],
// };


export const productPricingSchema = z.object({
	en: z.object({
		short_description: z.string().min(10).max(200),
	}),
	ar: z.object({
		short_description: z.string().min(10).max(200),
	}),
	attribute_family_id: z.coerce.number().positive().min(1),
	url_key: z.string().min(3).max(50),
	state: z.array(z.string().min(1)),
});

// Define default values for the schema
export const productPricingDefaultValues = {
	en: {
		short_description: '',
	},
	ar: {
		short_description: '',
	},
	attribute_family_id: '',
	url_key: '',
	state: '',
};