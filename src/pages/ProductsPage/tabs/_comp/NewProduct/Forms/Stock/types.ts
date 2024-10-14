import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { productInventoryBranchesSchema } from './utils';
import { ValidFormStoreByValues } from 'src/utils/types';

export type Values = InferredZodSchema<typeof productInventoryBranchesSchema>;

export type Props<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
	id?: string;
};
