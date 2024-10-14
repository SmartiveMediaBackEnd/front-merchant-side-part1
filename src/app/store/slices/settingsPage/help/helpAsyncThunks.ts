import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { AddHelpSchemaValues } from 'src/app/schema/settings/AddHelpSchema';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

// get help list
export const getHelpList = createAsyncThunk('helpList/getHelpList', () =>
	PublicRequest.getData('merchant/settings/help'),
);

// // get help show
export const getHelpShow = createAsyncThunk('helpShow/getHelpShow', (payload: string) =>
	PublicRequest.getData(`merchant/settings/help/show/${payload}`),
);

// create help
export const postHelp = createAsyncThunk(
	"addHelp/PostHelp",
	(payload: AddHelpSchemaValues) =>
		PublicRequest.postData(payload, `merchant/settings/help/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// // update help
export const putHelp = createAsyncThunk(
	"addHelp/putHelp",
	(payload: AddHelpSchemaValues) =>
		PublicRequest.putData(payload, `merchant/settings/help/update/${payload}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


// // delete help
export const deleteHelp = createAsyncThunk(
	'deleteHelp/deleteHelp',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/help/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);