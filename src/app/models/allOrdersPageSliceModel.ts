import { statusGlobal } from '.';
import { OrderInterface } from '../interface/OrderInterface';

export interface allOrdersSliceModel extends statusGlobal {
	allOrders: OrderInterface[];
	ordderItem:OrderInterface
}
