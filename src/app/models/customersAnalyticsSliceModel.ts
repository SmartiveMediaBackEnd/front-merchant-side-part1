import { statusGlobal } from '.';
import { AnalyticsCustomer } from 'src/pages/AnalyticsPage/tabs/Customers/AnalyticsCustomers';

export interface customersAnalyticsSliceModel extends statusGlobal {
	customersAnalytics: AnalyticsCustomer[];
}
