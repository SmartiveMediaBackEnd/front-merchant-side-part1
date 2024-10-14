import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { ValidFormStoreByValues } from 'src/utils/types';
import { productBrandSchema } from './utils';

type Values = InferredZodSchema<typeof productBrandSchema>;

export type Props<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
};
