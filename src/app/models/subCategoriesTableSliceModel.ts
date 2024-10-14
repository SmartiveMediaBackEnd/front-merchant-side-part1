import { SubCategories } from 'src/pages/ProductsPage/tabs/Categories/_comp/subCategory/SubCategoryTable';
import { statusGlobal } from '.';

export interface subCategoriesTableSliceModel extends statusGlobal {
	subCategories: SubCategories[];
}
