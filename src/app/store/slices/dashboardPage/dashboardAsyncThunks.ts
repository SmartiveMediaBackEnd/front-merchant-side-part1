import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';


// get dashboard reports
export const getReports = createAsyncThunk('dashboard/getReports', () =>
	PublicRequest.getData('merchant/dashboard'),
);

// get merchant payment methods Show
export const getMerchantPaymentShow = createAsyncThunk(
	'merchantPaymentMethodsShow/getMerchantPaymentShow',
	(payload: number) => PublicRequest.getData(`merchant/payment-methods/${payload}`), 
);




