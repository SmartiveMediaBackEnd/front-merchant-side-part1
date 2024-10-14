import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { ValidFormStoreByValues } from 'src/utils/types';
import { productCategorySchema } from './utils';

type Values = InferredZodSchema<typeof productCategorySchema>;

export type Props<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
};
