import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { ValidFormStoreByValues } from 'src/utils/types';
import { productBasicInfoSchema } from './utils';

export type Values = InferredZodSchema<typeof productBasicInfoSchema>;

export type Props<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
	id?: string;
};
