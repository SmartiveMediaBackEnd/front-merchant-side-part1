import { z } from 'zod';

export const optionTypeMap = /** @type {const} */ ({
	checkbox: 'checkbox',
	radio: 'radio',
	dropdown: 'dropdown',
	text: 'text',
	image: 'image',
	color: 'color',
});
export const optionTypeCollection =
	/** @type {[keyof typeof optionTypeMap, ...(keyof typeof optionTypeMap)[]]} */ (
		/** @type {unknown} */ (Object.values(optionTypeMap))
	);
const optionTypeSchema = z.enum(optionTypeCollection);

export const optionNameMap = /** @type {const} */ ({
	size: 'size',
	color: 'color',
});
export const optionNameCollection =
	/** @type {[keyof typeof optionNameMap, ...(keyof typeof optionNameMap)[]]} */ (
		/** @type {unknown} */ (Object.values(optionNameMap))
	);

export const optionBaseValuesSchema = z.object({
	tempId: z.string(),
	nameEn: z.string(),
	nameAr: z.string(),
	differentInPrice: z.number().optional(),
	value: z.string(),
});

export const productOptionRawSchema = {
	option: z.object({
		tempId: z.string(),
		isRequired: z.boolean().optional(),
		name: z.string().min(1),
		value: z.string().min(1),
		// type: z.string(),
		// values: z.array(optionBaseValuesSchema)
	}),
	// z.object({
	// 	tempId: z.string(),
	// 	isRequired: z.boolean().optional(),
	// 	name: z.literal(optionNameMap.color),
	// 	type: optionTypeSchema,
	// 	values: z.array(optionBaseValuesSchema),
	// }),
};

export const productVariationRawSchema = {
	variation: z.object({
		forOptionValuesNames: z.string(),
		forOptionValuesTempIds: z.array(z.string()),
		quantity: z.number().min(0).optional(),
		sku: z.string().optional(),
		price: z.number().min(0).optional(),
		discountPrice: z.number().min(0).optional(),
	}),
};

export const productOptionsAndVariationsRawSchema = {
	options: z.array(productOptionRawSchema.option),
	variations: z.array(productVariationRawSchema.variation),
};

// Default values for the schema
export const productOptionsAndVariationsDefaultValues = {
	options: [],
	variations: [],
};
const attributeValuesSchema = z.union([
	z.string().min(1),
	z.coerce.number().positive().min(1),
	z.boolean().default(false),
	z.array(z.string().min(1)).min(1),
]);
export const productVariantSchema = z.object({
	variants: z
		.array(
			z.object({
				sku: z.string().min(1),
				en: z.object({
					name: z.string().min(1),
					short_description: z.string().min(1),
					description: z.string().min(1),
				}),
				ar: z.object({
					name: z.string().min(1),
					short_description: z.string().min(1),
					description: z.string().min(1),
				}),
				price: z.coerce.number().positive().min(1),
				weight: z.coerce.number().positive().min(1),
				quantity: z.coerce.number().positive().min(1),

				inventories: z
					.array(
						z.object({
							id: z.string().min(1),
							name: z.string().min(1),
						}),
					)
					.min(1),
				code: z.string().min(1),
				attributeValues: attributeValuesSchema,
			}),
		)
		.optional(),
});

export const productVariantDefaultValues = { variants: [] };
