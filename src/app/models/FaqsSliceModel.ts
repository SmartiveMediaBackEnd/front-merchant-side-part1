import { FAQs } from 'src/pages/ProductsPage/tabs/_comp/NewProduct/Forms/Faqs/_hook/hookForFaqs';
import { statusGlobal } from '.';

export interface FAQsSliceModel extends statusGlobal {
	faqs: FAQs[];
}
