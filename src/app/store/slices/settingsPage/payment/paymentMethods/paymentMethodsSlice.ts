import { createSlice } from '@reduxjs/toolkit';

import { paymentMethodsReducer } from './paymentMethodsExtraReducer';
import { paymentMethodsSliceModel } from 'src/app/models/settingsModels/paymentMethodsSettingsModel';
import { getPayment_Method_SystemInitial } from 'src/app/interface/settingsInterface/MerchantPaymentMethodsSettingsInterface';

const initialState: paymentMethodsSliceModel = {
	paymentList: [],
	paymentShow: getPayment_Method_SystemInitial(),
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const paymentMethodsSlice = createSlice({
	name: 'paymentMethods',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		paymentMethodsReducer(builder);
	},
});

export default paymentMethodsSlice.reducer;
