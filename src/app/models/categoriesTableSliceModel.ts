import { Product } from 'src/pages/ProductsPage/_comp/data';
import { statusGlobal } from '.';
import { CategoryInterface } from '../interface/CategoriesInterface';


export interface categoriesTableSliceModel extends statusGlobal {
	categoriesTable: CategoryInterface[];
	categoryInfo: [[CategoryInterface], { "products": Product[] }]
}
