import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { AddBulkPricesSchemaValues } from 'src/app/schema/AddBulkEdit';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';


export const getBulkPrices = createAsyncThunk('bulkPrices/getBulkPrices', () =>
	PublicRequest.getData('merchant/catalog/product/bulk-prices'),
);

export const PostBulkPrices = createAsyncThunk('PostBulkPrices/PostBulkPrices', (payload: AddBulkPricesSchemaValues ) =>
	PublicRequest.postData(payload, `merchant/catalog/product/bulk-prices/store/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// export const putMerchantPayment = createAsyncThunk(
// 	'merchantPaymentMethods/putMerchantPayment',
// 	(payload: { data: AddBulkPricesSchemaValues, id: string }) =>
// 		PublicRequest.putData(payload.data, `merchant/payment-methods/${payload?.id}`)
// 			.then((res: any) => {
// 				if (res) {
// 					toast.success(res?.message);
// 					return res;
// 				}
// 			})
// 			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
// );

export const deleteProductAction = createAsyncThunk(
	'deleteProductAction/getAllCustomersTable',
	(payload: string) => PublicRequest.deleteData(`merchant/catalog/products/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

