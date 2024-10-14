import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';

// get Coupon List data
export const getCoupons = createAsyncThunk('coupons/getCoupons', (payload: string) =>
	PublicRequest.getData(`merchant/marketing/promotions/cart-rules/${payload}/coupons`),
);

// get coupon Show
export const getCouponShow = createAsyncThunk(
	'couponShow/getCouponShow',
	(payload: { cartRuleID: string; couponID: string }) =>
		PublicRequest.getData(
			`merchant/marketing/promotions/cart-rules/${payload.cartRuleID}/coupons/${payload.couponID}`,
		),
);

// create coupon
export const postCoupon = createAsyncThunk(
	'postCoupon/postCoupon',
	(payload: { data: any; id: string }) =>
		PublicRequest.postData(
			payload.data,
			`merchant/marketing/promotions/cart-rules/${payload.id}/coupons`,
		)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

// create mass coupon
export const postCouponMassDestroy = createAsyncThunk(
	'couponMassDestroy/postCouponMassDestroy',
	(payload: { data: any; id: string }) =>
		PublicRequest.postData(
			payload.data,
			`merchant/marketing/promotions/cart-rules/${payload.id}/coupons/mass-destroy`,
		)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

// delete coupon
export const deleteCoupon = createAsyncThunk('delete/deleteCoupon', (payload: string) =>
	PublicRequest.deleteData(`merchant/marketing/promotions/cart-rules/${payload}/coupons/${payload}`)
		.then((res: any) => {
			if (res) {
				toast.success(res?.message);
				return res;
			}
		})
		.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

