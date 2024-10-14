import { z } from "zod";
import { InferredZodSchema } from "../utils/hooks/form";

const numberZod = z.coerce.number().positive();
const bulkPriceSchema = z.object({
    from: numberZod,
    to: numberZod,
    price: numberZod,
});

const AddBulkPricesSchema ={
    product_id: numberZod,
    from: numberZod,
    to: numberZod,
    price: numberZod,
    bulk_prices: z.record(z.string(), bulkPriceSchema),
};

export type AddBulkPricesSchemaValues = InferredZodSchema<typeof AddBulkPricesSchema>;
