
import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

export const SpecificationsSchema = {
    specifications: z.array(
        z.object({
            name_ar: z.string().min(5),
            value_ar: z.string().min(5),
            name_en: z.string().min(5),
            value_en: z.string().min(5),
        }),
    ).optional(),
    // product_id: z.string().min(3),
};


export const SpecificationsDefaultValues: SpecificationsInterface = {
    specifications: [],
    // product_id: '123',
}
export type SpecificationsInterface = InferredZodSchema<typeof SpecificationsSchema>;

