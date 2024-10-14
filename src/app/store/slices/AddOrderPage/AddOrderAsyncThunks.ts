import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';




export const PostAddOrder = createAsyncThunk(
	"addOrderdata/PostAddOrder",
	(payload: FormData) =>
		PublicRequest.postData(payload, `merchant/sales/orders/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

