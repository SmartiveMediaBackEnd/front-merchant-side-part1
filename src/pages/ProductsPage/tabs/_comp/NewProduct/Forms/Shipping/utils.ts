import { z } from 'zod';
import { productTypeCollection } from '../../config';

export const productStatesOfTheProductCollection = [
	'Fragile',
	'Food',
	'Solid',
	'Needs lower temperature',
] ;

//  as

export const productShippingRateCollection = ['Fixed', 'Free shipping'] ;
export const productShippingRateCollectionType = ['Fixed', 'Free shipping']  as const;

export const productShippingRateMap = Object.fromEntries(
	productShippingRateCollectionType.map((item) => [item, item]),
) as {
		[Key in (typeof productShippingRateCollectionType)[number]]: (typeof productShippingRateCollectionType)[number];
	};

export const productShippingMethodCollection = ['Dhl (main)', 'Aramex'];

export const productShippingMethodMap = Object.fromEntries(
	productShippingMethodCollection.map((item) => [item, item]),
) as {
		[Key in (typeof productShippingMethodCollection)[number]]: (typeof productShippingMethodCollection)[number];
	};

export const productWeightUnitCollection = ['KG', 'G', 'LB', 'OZ'] ;

export const productWeightUnitMap = Object.fromEntries(
	productWeightUnitCollection.map((item) => [item, item]),
) as {
		[Key in (typeof productWeightUnitCollection)[number]]: (typeof productWeightUnitCollection)[number];
	};

export const productDimensionUnitCollection = ['CM', 'M', 'MM', 'IN', 'FT'] ;

export const productDimensionUnitMap = Object.fromEntries(
	productDimensionUnitCollection.map((item) => [item, item]),
) as {
		[Key in (typeof productDimensionUnitCollection)[number]]: (typeof productDimensionUnitCollection)[number];
	};

export const productShippingTypeCollection = ['online', 'pickup'] ;

export const productShippingTypeMap = Object.fromEntries(
	productShippingTypeCollection.map((type) => [type, type]),
) as {
		[Key in (typeof productShippingTypeCollection)[number]]: (typeof productShippingTypeCollection)[number];
	};

export const productShippingSchema = {
	// productType: z.enum(productTypeCollection),
	is_shipped: z.number(),
	downloaded_link: z.string().url().optional().or(z.literal("")),
	weight: z.coerce.number().min(0),
	weightUnit: z.string().min(1),
	length: z.coerce.number().min(0),
	width: z.coerce.number().min(0),
	height: z.coerce.number().min(0),
	dimensionUnit: z.string().min(1),
	state: z.string().min(1).optional().or(z.literal("")),
	shipping_rate_type: z.string().min(1).or(z.literal("")),
	shipping_rate: z.coerce.number().min(0).optional(),
	shipping_method:z.string().min(1).or(z.literal("")),
	// pickup: z.discriminatedUnion('type', [
	// 	z.object({
	// 		method: z.enum(productShippingMethodCollection),
	// 	}),
	// ]),
};

// Define default values for the schema
export const productShippingDefaultValues = {
	// productType: productTypeCollection[0], // Assuming the first product type is the default
	is_shipped: 0,
	downloaded_link: "",
	weight: 0,
	weightUnit: productWeightUnitCollection[0],
	dimensionUnit: productDimensionUnitCollection[0],
	length: 0,
	width: 0,
	height: 0,
	state: "",
	shipping_rate_type: "",
	shipping_rate:0,
	shipping_method:'',
	// pickup: {
	// 	method: productShippingMethodCollection[0], // Default to the first shipping method
	// },
};
