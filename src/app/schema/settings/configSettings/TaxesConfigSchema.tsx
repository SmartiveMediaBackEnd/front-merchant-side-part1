import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const stringZod = z.string().min(1);
export const AddHelpSchema = {
    type: stringZod,
    url: stringZod,
    duration: stringZod,
    title: stringZod,
    description: stringZod.optional(),
    image: z.instanceof(File).optional(),
};
export type AddHelpSchemaValues = InferredZodSchema<typeof AddHelpSchema>;
