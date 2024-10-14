import { ValidFormStoreByValues } from 'src/utils/types';
import { productTypeMap } from '../../../config';

export interface Props<TFormStore> {
	sections: { id: string; title: string }[];
	children: React.ReactNode;
	formStore: ValidFormStoreByValues<TFormStore, { productType: keyof typeof productTypeMap }>;
	onSubmit: () => void;
	isLoadingAddOrUpdate?:boolean
}
