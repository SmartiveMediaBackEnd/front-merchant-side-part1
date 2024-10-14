import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';


// get Shipping List data for merchant list
export const getShippingList = createAsyncThunk('shippingLists/getShippingList', () =>
	PublicRequest.getData('merchant/settings/shipping/methods/list'),
);

// get Shipping Methods data for system list
export const getShippingMethods = createAsyncThunk('shippingMethods/getShippingMethods', () =>
	PublicRequest.getData('merchant/settings/shipping/methods'),
);

// create payment Methods 
export const postFreeShippingMethod = createAsyncThunk(
	"shippingMethods/postFreeShippingMethod",
	(payload: FormData) =>
		PublicRequest.postData(payload, `merchant/settings/shipping/methods/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);





// post Dhl Shipping Method 
export const postDhlShippingMethod = createAsyncThunk(
	"shippingMethods/postDhlShippingMethod",
	(payload: FormData) =>
		PublicRequest.postData(payload, `merchant/settings/shipping/methods/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);