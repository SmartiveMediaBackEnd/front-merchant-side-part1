import { z, ZodRawShape } from 'zod';
import {
	// Schema
	productDescriptionAndSpecificationsRawSchema,
	// productFaqsSchema,
	productInventoryBranchesSchema,
	productOptionsAndVariationsRawSchema,
	productPricingSchema,
	productQuickActionsSchema,
	productSeoSchema,
	productShippingSchema,
	productBundleSchema,
	productBasicInfoSchema,
	// DefaultValues
	productBasicInfoDefaultValues,
	productBundleDefaultValues,
	productDescriptionAndSpecificationsDefaultValues,
	// productFaqsDefaultValues,
	productOptionsAndVariationsDefaultValues,
	productPricingDefaultValues,
	productQuickActionsDefaultValues,
	productSeoDefaultValues,
	productShippingDefaultValues,
	productInventoryBranchesDefaultValues,
} from '../../Forms';

export const ProductSchema: ZodRawShape = {
	imagesMedia: z.array(z.instanceof(File)),
	videoMedia: z.instanceof(File),
	threeSixtyViewMedia: z.instanceof(File),
	threeDModelMedia: z.instanceof(File),
	...productBasicInfoSchema,
	...productDescriptionAndSpecificationsRawSchema.shape,
	...productPricingSchema,
	...productInventoryBranchesSchema,
	...productShippingSchema,
	...productOptionsAndVariationsRawSchema,
	...productSeoSchema,
	// ...productFaqsSchema.shape,
	...productQuickActionsSchema,
	...productBundleSchema,
};

export const ProductDefaultValues = {
	imagesMedia: [],
	videoMedia: undefined,
	threeSixtyViewMedia: undefined,
	threeDModelMedia: undefined,
	...productBasicInfoDefaultValues,
	...productBundleDefaultValues,
	...productDescriptionAndSpecificationsDefaultValues,
	// ...productFaqsDefaultValues,
	...productOptionsAndVariationsDefaultValues,
	...productPricingDefaultValues,
	...productQuickActionsDefaultValues,
	...productSeoDefaultValues,
	...productShippingDefaultValues,
	...productInventoryBranchesDefaultValues,
};
