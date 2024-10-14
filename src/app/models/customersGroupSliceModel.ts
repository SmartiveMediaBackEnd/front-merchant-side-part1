import { statusGlobal } from '.';
import { CustomerGroupInterface } from '../interface/CustomerGroupInterface';

export interface customersGroupSliceModel extends statusGlobal {
	customersGroup: CustomerGroupInterface[];
	customerGroupItem: CustomerGroupInterface
}
