import { Product } from 'src/pages/ProductsPage/_comp/data';

export interface BrandsInterface {
	slug: string;
	name_en: string;
	name_ar: string;
	description_en: string;
	description_ar: string;
	status: number;
	image_url: string;
	id: string;
	products: Product[];
}

export const BrandsInitialInfo = () => {
	return {
		name_en: '',
		name_ar: '',
		description_en: '',
		description_ar: '',
		status: 0,
		image_url: '',
		slug: '',
		id: '',
		products: [],
	};
};
