import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';

//! get cart rule List data

export const getCartRule = createAsyncThunk('cartRule/getCartRule', () =>
	PublicRequest.getData(`merchant/marketing/promotions/cart-rules`),
);

//! get cart rule Show
export const getCartRuleShow = createAsyncThunk('cartRuleShow/getCartRuleShow', (payload: string) =>
	PublicRequest.getData(`merchant/marketing/promotions/cart-rules/${payload}`),
);

//! create CartRule
export const postCartRule = createAsyncThunk('cartRule/postCartRule', (payload: any) =>
	PublicRequest.postData(payload, `merchant/marketing/promotions/cart-rules`)
		.then((res: any) => {
			if (res) {
				toast.success(res?.message);
				return res;
			}
		})
		.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

//! update cart rule
export const putCartRule = createAsyncThunk('putCartRule/putCartRule', (payload: any) =>
	PublicRequest.putData(payload, `merchant/marketing/promotions/cart-rules/${payload}`)
		.then((res: any) => {
			if (res) {
				toast.success(res?.message);
				return res;
			}
		})
		.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

//! delete cart rule
export const deleteCartRule = createAsyncThunk('delete/deleteCartRule', (payload: string) =>
	PublicRequest.deleteData(`merchant/marketing/promotions/cart-rules/${payload}`)
		.then((res: any) => {
			if (res) {
				toast.success(res?.message);
				return res;
			}
		})
		.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
