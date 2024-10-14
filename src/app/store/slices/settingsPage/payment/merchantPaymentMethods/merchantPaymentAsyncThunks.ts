import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import { AddPayment_MethodTypes } from 'src/pages/SettingsPage/PaymentSettings/_comp/_add_payment_Method/_hook/useAddMerchantPaymentMethod';


// get merchant payment methods list
export const getMerchantPaymentList = createAsyncThunk('merchantPaymentMethods/getMerchantPaymentList', () =>
	PublicRequest.getData('merchant/payment-methods'),
);

// get merchant payment methods Show
export const getMerchantPaymentShow = createAsyncThunk(
	'merchantPaymentMethodsShow/getMerchantPaymentShow',
	(payload: string) => PublicRequest.getData(`merchant/payment-methods/${payload}`),
);


// create merchant payment methods
export const postMerchantPayment = createAsyncThunk(
	"merchantPaymentMethods/postMerchantPayment",
	(payload: AddPayment_MethodTypes) =>
		PublicRequest.postData(payload, `merchant/payment-methods`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update merchant payment methods
export const putUpdateMerchantPayment = createAsyncThunk(
	'merchantPaymentMethods/putUpdateMerchantPayment',
	(payload: { data: AddPayment_MethodTypes, id: string }) =>
		PublicRequest.putData(payload.data, `merchant/payment-methods/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

// delete merchant payment methods
export const deleteMerchantPayment = createAsyncThunk(
	'delete/deleteMerchantPayment',
	(payload: string) => PublicRequest.deleteData(`merchant/payment-methods/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// post mass destroy
export const DeleteMerchantPaymentMass = createAsyncThunk(
	"DeleteMerchantPaymentMass/postMerchantPaymentMass",
	(payload: { indexes: string }) => // todo
		PublicRequest.postData(payload, `merchant/payment-methods/mass-destroy`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
// post toggle active
export const postMerchantPaymentToggle = createAsyncThunk(
	"postMerchantPaymentToggle/postMerchantPaymentToggle",
	(payload: { data: { active: number }, id: string }) => // todo
		PublicRequest.postData(payload.data, `merchant/payment-methods/toggle-active/${payload.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);



