import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import { AddProductSchemaSchemaValues } from 'src/pages/ProductsPage/tabs/_comp/NewProduct/Pages/Configurable/utils';

// get Specifications
export const getSpecifications = createAsyncThunk('specifications/getSpecifications', () =>
	PublicRequest.getData('merchant/catalog/product/specifications'),
);

// create Specifications
export const postSpecifications = createAsyncThunk('specifications/postSpecifications', (payload: any) =>
	PublicRequest.postData(payload, `merchant/catalog/product/specifications/store`)
		.then((res: any) => {
			if (res) {
				toast.success(res?.message);
				return res;
			}
		})
		.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

