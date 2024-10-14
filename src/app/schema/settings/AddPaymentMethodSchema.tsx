import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const stringZod = z.string().min(1);

export const AddPaymentMethodSchema = {
	method: stringZod,
    method_title: stringZod.optional(),
    description: stringZod.optional(),
    type: stringZod,
	monthly_fees_title:stringZod,
    monthly_fees: z.number(), // country code
    extra_fee: z.number(),
    setup_fees: z.number(),
    sercret_code: stringZod,
    key_code: stringZod,
    status: stringZod,
    icon: stringZod,
    sort: z.number(),
};
export type AddPaymentMethodSchemaValues = InferredZodSchema<typeof AddPaymentMethodSchema>;
