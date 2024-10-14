import MainApi from "../api/MainApi";

export const Payment_MethodsApi = {
	System: () => {
		return MainApi.get(
			'merchant/payment/payment-methods',
		);
	},
};