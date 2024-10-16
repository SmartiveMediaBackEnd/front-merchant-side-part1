import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const zodBoolean = z.coerce.number().min(0).max(1);

const imageValidation = z
	.array(
		z
			.instanceof(File)
			.refine((file) => ['image/jpeg', 'image/png', 'image/jpg', 'image/bmp'].includes(file.type), {
				message: 'The file must be of type: jpeg, jpg, bmp, png.',
			}),
	)
	.nonempty({ message: 'At least one image is required.' });

export const ProductSchema = {
	type: z.string().min(3),
	// MEDIA
	// images: imageValidation,

	// videos: z.array(
	// 	z.instanceof(File).refine(file =>
	// 		['video/mp4', 'video/avi', 'video/mov', 'video/mkv'].includes(file.type),
	// 		{
	// 			message: 'The file must be of type: mp4, avi, mov, mkv.',
	// 		}
	// 	)
	// ).nonempty({ message: 'At least one video is required.' }).optional(),

	// BASIC INFO && DISCRETION
	sku: z.string().min(3).max(30),
	en: z.object({
		name: z.string().min(3).max(50),
		description: z.string().min(10).max(1000),
	}),
	ar: z.object({
		name: z.string().min(3).max(50),
		description: z.string().min(10).max(1000),
	}),
	categories: z.string().min(1),
	brand_id: z.string().min(1),

	// VARIATIONS

	// new: zodBoolean,
	// featured: zodBoolean,
	// visible_individually: zodBoolean,
	// specifications
	specifications: z
		.array(
			z.object({
				name_ar: z.string().min(3),
				value_ar: z.string().min(5),
				name_en: z.string().min(3),
				value_en: z.string().min(5),
			}),
		)
		.optional(),
	// product_id:z.coerce.number().positive().min(1),

	chosen_variants_options: z
		.array(
			z.object({
				code: z.string().min(1),
				attributeValues: z
					.array(
						z.object({
							id: z.coerce.number().min(1),
							name: z.string().min(1),
						}),
					)
					.min(1),
			}),
		)
		.optional(),

	variants: z
		.array(
			z.object({
				sku: z.string().min(1),
				en: z.object({
					name: z.string().min(1),
				}),
				ar: z.object({
					name: z.string().min(1),
				}),
				price: z.coerce.number().positive().min(1),
				discount: z.coerce.number().min(0).optional(),
				color: z.string().min(1),
				size: z.string().min(1),
				status: zodBoolean,
				quantity: z.coerce.number().positive().min(1),
				inventories: z
					.array(
						z.object({
							id: z.coerce.number().optional(),
							quantity: z.coerce.number().min(0).optional(),
						}),
					)
					.min(1),
				code: z.string().min(1),
				attributeValues: z
					.array(
						z.object({
							id: z.coerce.number().min(1),
							name: z.string().min(1),
						}),
					)
					.min(1),
			}),
		)
		.optional(),

	// PRICING
	// price: z.coerce.number().positive().min(1),
	// cost: z.coerce.number().positive().min(1),
	// discount: z.coerce.number().positive().min(1),
	// profit: z.coerce.number().positive().min(0),
	// taxable: zodBoolean,

	// // SHIPPING
	// is_shipped: z.coerce.number().min(0), //
	// weight: z.coerce.number().positive().min(1),//
	// weight_unit: z.string().min(1),
	// width: z.coerce.number().positive().min(1),
	// height: z.coerce.number().positive().min(1),
	// length: z.coerce.number().positive().min(1),
	// dimension_unit: z.string().min(1),

	// state: z.string().min(1).optional().or(z.literal("")).nullable(),
	// shipping_rate_type: z.string().min(1).or(z.literal("")),
	// shipping_rate: z.coerce.number().min(0).optional(),
	// shipping_method: z.string().min(1).or(z.literal("")).nullable(),

	// 	stock
	continue_selling: zodBoolean,
	base_qty: z.coerce.number().positive().min(1),
	qty: z.coerce.number().positive().min(1),

	// SEO
	meta_keywords: z.array(z.string().min(3).max(70)).optional(),
	page_title: z.string().min(3).max(70).optional(),
	meta_description: z.string().min(3).max(160).optional(),
	link: z.string().min(1).url(),
	// faqs
	faqs: z
		.array(
			z.object({
				question_ar: z.string().min(5),
				answer_ar: z.string().min(5),
				question_en: z.string().min(5),
				answer_en: z.string().min(5),
			}),
		)
		.optional(),

	// ACTIONS
	status: z.coerce.number().min(0),
	featured: z.coerce.number().min(0),
};

export const defaultProductValues = {
	type: 'configurable',
	// MEDIA
	images: [],
	videos: [],

	// BASIC INFO && DISCRETION
	sku: '',
	en: {
		name: '',
	},
	ar: {
		name: '',
	},
	categories: '',
	brand_id: '',
	specifications: [],
	// product_id: null,
	// VARIATIONS
	variants: [],

	// PRICING
	price: 0,
	cost: 0,
	discount: 0,
	profit: 0,
	taxable: 0,

	// SHIPPING
	is_shipped: 0,
	weight: 0,
	weight_unit: '',
	width: 0,
	height: 0,
	length: 0,
	dimension_unit: '',
	state: 'Solid',
	shipping_rate_type: 'Free shipping',
	shipping_rate: 0,
	shipping_method: 'Dhl (main)',

	// 	stock
	continue_selling: 0,
	base_qty: 0,
	qty: 0,

	// SEO
	meta_keywords: [],
	page_title: '',
	meta_description: '',
	link: '',
	//faq
	faqs: [],
	// ACTION
	status: 0,
	featured: 0,
};

export type AddProductSchemaSchemaValues = InferredZodSchema<typeof ProductSchema>;
