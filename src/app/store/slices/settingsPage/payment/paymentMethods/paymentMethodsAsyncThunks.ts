import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';

import { AddPaymentSystemSchemaValues } from 'src/pages/SettingsPage/PaymentSystemSettings/_addPayment_System_Methods/_hooks/UseHandelAddPaymentSysytem';

// get payment methods
export const getPaymentMethods = createAsyncThunk('paymentMethods/getPaymentMethods', () =>
	PublicRequest.getData('merchant/payment/payment-methods'),
);

// get payment method Show
export const getPaymentMethodShow = createAsyncThunk(
	'paymentMethodShow/getPaymentMethodShow',
	(payload: string) => PublicRequest.getData(`merchant/payment/payment-methods/${payload}`), // param id
);

// create payment Methods 
export const createPaymentMethod = createAsyncThunk(
	"paymentMethods/createPaymentMethod",
	(payload: AddPaymentSystemSchemaValues) =>
		PublicRequest.postFormData(payload, `merchant/payment/payment-methods`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);




