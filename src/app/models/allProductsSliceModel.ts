import { Product } from 'src/pages/ProductsPage/_comp/data';
import { statusGlobal } from '.';


export interface productsSliceModel extends statusGlobal {
	allProducts: Product[];
	product:Product
}
