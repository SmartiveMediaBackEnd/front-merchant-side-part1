import { statusGlobal } from '.';
import { DiscountInterface } from '../interface/DiscountInterface';

export interface discountSliceModel extends statusGlobal {
	discounts: DiscountInterface[];
}
