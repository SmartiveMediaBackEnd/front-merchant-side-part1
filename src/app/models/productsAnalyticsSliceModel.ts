import { statusGlobal } from '.';
import { AnalyticsProduct } from 'src/pages/AnalyticsPage/tabs/Products/AnalyticsProducts';

export interface productsAnalyticsSliceModel extends statusGlobal {
	productsAnalytics: AnalyticsProduct[];
}
