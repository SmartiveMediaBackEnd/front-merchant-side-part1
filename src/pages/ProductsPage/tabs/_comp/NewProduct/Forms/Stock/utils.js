import { z } from 'zod';

export const productInventoryBranchesSchema = {
	quy: z.coerce.number().min(0).positive(),
	continue_selling: z.number(),
	// branches: z.array(
	// 	z.object({ id: z.string(), name: z.string(), quantity: z.coerce.number().min(0) }),
	// ),
	inventories: z
		.array(
			z.object({
				id: z.string().min(1),
				name: z.string().min(1),
			}),
		)
		.min(1),
};

// Define the default values for the schema
export const productInventoryBranchesDefaultValues = {
	quy: 0,
	continue_selling: false,
	inventories: [],
	// branches: [],
};
