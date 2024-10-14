import { z } from 'zod';
const zodBoolean = z.coerce.number().min(0).max(1);

export const productQuickActionsSchema = z.object({
	status: zodBoolean,
	new: zodBoolean, 
	featured: zodBoolean, 
	visible_individually: zodBoolean,
	// isFeaturedOnTheFrontPage: z.boolean().default(false),
});

// Define default values for the schema
export const productQuickActionsDefaultValues = {
	status: 0,
	new: 0, 
	featured: 0, 
	visible_individually: 0,
	// isFeaturedOnTheFrontPage: false,
};
