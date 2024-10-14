import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';

// get faqs
export const getFaqs = createAsyncThunk('faqs/getFaqs', () =>
	PublicRequest.getData('merchant/catalog/product/faqs'),
);

// create faqs
export const postFaqs = createAsyncThunk('faqs/postFaqs', (payload: any) =>
	PublicRequest.postData(payload, `merchant/catalog/product/faqs/store`)
		.then((res: any) => {
			if (res) {
				toast.success(res?.message);
				return res;
			}
		})
		.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);


