import { z } from 'zod';

export const productBrandSchema = {
	brand_id: z.string().min(1),
};
