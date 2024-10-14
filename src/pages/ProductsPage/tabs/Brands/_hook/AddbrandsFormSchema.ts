import { InferredZodSchema } from "src/app/utils/hooks/form";
import { z } from "zod";
// //////////////////////////////////
const stringValidation = z.string().min(1);

const slugValidation = z.string().regex(/^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/, {
    message: 'Slug must start with "www." followed by a valid domain and TLD (e.g., www.example.com).',
  });

 export const imageValidation = z.array(
    z.instanceof(File).refine(file => 
      ['image/jpeg', 'image/png', 'image/jpg', 'image/bmp'].includes(file.type),
      {
        message: 'The file must be of type: jpeg, jpg, bmp, png.',
      }
    )
  ).nonempty({ message: 'At least one image is required.' });
// ////////////////////////////
export const addBrandFormSchema = {
    name_en: stringValidation,
    name_ar: stringValidation,
    description_en: stringValidation,
    description_ar: stringValidation,
    slug: slugValidation,
    image:imageValidation,
    status: z.number(),

    products: z
        .array(
            z.object({
                id: stringValidation,
                name: stringValidation,
            }),
        )
        .optional(),
};

export type AddBrandSchemaValues = InferredZodSchema<typeof addBrandFormSchema>;