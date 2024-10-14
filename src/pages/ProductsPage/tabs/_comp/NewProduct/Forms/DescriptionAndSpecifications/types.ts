import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { productDescriptionAndSpecificationsRawSchema } from './utils';
import { ValidFormStoreByValues } from 'src/utils/types';

export type Values = InferredZodSchema<typeof productDescriptionAndSpecificationsRawSchema>;

export type Props<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
	id?: string;
};
