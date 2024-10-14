import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import { AddTaxCategorySchemaValues } from 'src/app/schema/settings/AddTaxCategorySchema';

// get email notification List data
export const getEmailNotificationList = createAsyncThunk('emailNotification/getEmailNotificationList', () =>
	PublicRequest.getData('merchant/settings/email-notification'),
);

// get email notification Show data
export const getEmailNotificationShow = createAsyncThunk(
	'emailNotificationShow/getEmailNotificationShow',
	(payload: string) => PublicRequest.getData(`merchant/settings/email-notification/${payload}`),
);

// create email notification
export const postEmailNotification = createAsyncThunk(
	"emailNotification/postEmailNotification",
	(payload: AddTaxCategorySchemaValues) =>
		PublicRequest.postData(payload, `merchant/settings/email-notification`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update Email Notification
export const putEmailNotification = createAsyncThunk(
	'emailNotification/putEmailNotification',
	(payload: { data: AddTaxCategorySchemaValues, id: string }) =>
		PublicRequest.putData(payload.data, `merchant/settings/email-notification/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

// delete Email Notification
export const deleteEmailNotification = createAsyncThunk(
	'delete/deleteEmailNotification',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/email-notification/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);