import { statusGlobal } from '.';
import { Coupon } from '../interface/CouponInterface';

export interface couponsSliceModel extends statusGlobal {
	coupons: Coupon[];
}
