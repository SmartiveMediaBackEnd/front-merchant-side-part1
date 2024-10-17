import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const zodBoolean = z.coerce.number().min(0).max(1);
function isAlphanumeric(str: string) {
	const regex = /^[a-zA-Z0-9]+$/;
	return regex.test(str);
}
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
	sku: z
		.string()
		.min(3)
		.max(30)
		.refine((s) => !s.includes(' '), 'No Spaces!')
		.refine((s) => isAlphanumeric(s), 'Only letters and numbers are allowed!'),

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
		.min(1, {
			message: 'At least one specification is required.',
		}),
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
				color: z.string().optional(),
				size: z.string().optional(),
				status: zodBoolean,
				inventories: z
					.array(
						z.object({
							id: z.coerce.number(),
							quantity: z.coerce
								.number({})
								.min(0, {
									message: 'Quantity must be a positive number.',
								})
								.positive(),
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
		.min(1, {
			message: 'At least one FAQ is required.',
		}),
	// ACTIONS
	status: z.coerce.number().min(0),
	featured: z.coerce.number().min(0),
};

export const defaultProductValues = {
	type: 'configurable',
	images: [],
	videos: [],
	sku: 'dwdw',
	en: {
		name: 'ewqeqewq',
		description: 'qeqeqeqweeqwe',
	},
	ar: {
		name: 'qeqwewqeqwe',
		description: 'qweqweqweqeq',
	},
	categories: '112',
	brand_id: '32',
	specifications: [
		{
			name_ar: 'ewewe',
			value_ar: 'ewewe',
			name_en: 'ewew',
			value_en: 'ewewe',
		},
	],
	variants: [
		{
			code: 'Green / M',
			attributeValues: [
				{
					id: 217,
					name: 'Green',
				},
				{
					id: 222,
					name: 'M',
				},
			],
			sku: 'dwdw_Green_M',
			en: {
				name: 'wer',
			},
			ar: {
				name: 'rwerw',
			},
			price: '234',
			discount: 0,
			status: 1,
			quantity: 0,
			inventories: [
				{
					id: 0,
					quantity: 0,
				},
			],
		},
		{
			code: 'Green / L',
			attributeValues: [
				{
					id: 217,
					name: 'Green',
				},
				{
					id: 223,
					name: 'L',
				},
			],
			sku: 'dwdw_Green_L',
			en: {
				name: 'wrw',
			},
			ar: {
				name: 'wrrw',
			},
			price: '43',
			discount: 0,
			status: 1,
			quantity: 0,
			inventories: [
				{
					id: 0,
					quantity: 0,
				},
			],
		},
		{
			code: 'Red / M',
			attributeValues: [
				{
					id: 216,
					name: 'Red',
				},
				{
					id: 222,
					name: 'M',
				},
			],
			sku: 'dwdw_Red_M',
			en: {
				name: 'rwer',
			},
			ar: {
				name: 'wer',
			},
			price: '434',
			discount: 0,
			status: 1,
			quantity: 0,
			inventories: [
				{
					id: 0,
					quantity: 0,
				},
				{},
				{},
			],
		},
		{
			code: 'Red / L',
			attributeValues: [
				{
					id: 216,
					name: 'Red',
				},
				{
					id: 223,
					name: 'L',
				},
			],
			sku: 'dwdw_Red_L',
			en: {
				name: '432',
			},
			ar: {
				name: 'rewr',
			},
			price: '34',
			discount: 0,
			status: 1,
			quantity: 0,
			inventories: [
				{
					id: 0,
					quantity: 0,
				},
				{},
				{},
			],
		},
	],
	price: '24',
	cost: '423',
	discount: '4432',
	profit: -4831,
	taxable: 0,
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
	continue_selling: 0,
	base_qty: '21',
	qty: '43',
	meta_keywords: [],
	page_title: 'https://artisan.dookan.net/t-shirt',
	meta_description: 'https://artisan.dookan.net/t-shirt\n',
	link: 'https://artisan.dookan.net/t-shirt',
	faqs: [
		{
			question_ar: 'eweweewe',
			answer_ar: 'ewewe',
			question_en: 'ewewee',
			answer_en: 'wewewe',
		},
	],
	status: 0,
	featured: 0,
	bulkPrices: [],
	chosen_variants_options: [
		{
			code: 'color',
			attributeValues: [
				{
					id: 217,
					name: 'Green',
				},
				{
					id: 216,
					name: 'Red',
				},
			],
		},
		{
			code: 'size',
			attributeValues: [
				{
					id: 222,
					name: 'M',
				},
				{
					id: 223,
					name: 'L',
				},
			],
		},
	],
};

export type AddProductSchemaSchemaValues = InferredZodSchema<typeof ProductSchema>;
