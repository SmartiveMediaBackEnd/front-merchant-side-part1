import { statusGlobal } from '.';
import { AnalyticsOrder } from 'src/pages/AnalyticsPage/tabs/Orders/AnalyticsOrders';

export interface ordersAnalyticsSliceModel extends statusGlobal {
	ordersAnalytics: AnalyticsOrder[];
}
