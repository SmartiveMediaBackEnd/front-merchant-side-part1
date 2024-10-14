import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { productOptionRawSchema, productVariantSchema } from './utils';
import { ValidFormStoreByValues } from 'src/utils/types';
import { Attribute } from 'src/app/interface/AttributeInterface';


export type Values = InferredZodSchema<typeof productVariantSchema>;

export type Props<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
	id?: string;
	attributeValue?:Attribute[]
};
export type PropsAttributes<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
	id?: string;
	attributeValue?:Attribute[]
};

export type ProductOptionValues = InferredZodSchema<typeof productOptionRawSchema>;
export type ProductOptionFormStore<TFormStore> = ValidFormStoreByValues<
	TFormStore,
	ProductOptionValues
>;

export type ProductVariation = {
	sku: string;
	price: number;
	stock: number;
	[key: string]: string | number;
};
