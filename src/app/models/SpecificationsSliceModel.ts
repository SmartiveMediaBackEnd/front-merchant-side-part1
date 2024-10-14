
import { statusGlobal } from '.';
import { SpecificationsInterface } from 'src/pages/ProductsPage/tabs/_comp/NewProduct/Forms/Specifications/_hook/hookForSpecifications';

export interface SpecificationsSliceModel extends statusGlobal {
	specifications: SpecificationsInterface[];
}
