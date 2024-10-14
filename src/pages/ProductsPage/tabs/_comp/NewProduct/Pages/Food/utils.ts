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
};

export const ProductDefaultValues = {
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
