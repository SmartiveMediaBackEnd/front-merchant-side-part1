
import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

export const FAQsSchema = {
    faqs: z.array(
        z.object({
            question_ar: z.string().min(5),
            answer_ar: z.string().min(5),
            question_en: z.string().min(5),
            answer_en: z.string().min(5),
        }),
    ).optional(),
    // product_id: z.string().min(3),
};


export const FAQsDefaultValues: FAQs = {
    faqs: [],
    // product_id: '123',
}
export type FAQs = InferredZodSchema<typeof FAQsSchema>;
