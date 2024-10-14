import { statusGlobal } from '.';
import { CustomerInterface } from 'src/app/interface/CustomerInterface';

export interface allCustomerSliceModel extends statusGlobal {
	allCustomers: CustomerInterface[];
	CustomerInfo: CustomerInterface;
	
}
