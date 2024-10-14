import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import {addStaffInterface} from 'src/pages/SettingsPage/PermissionsAndUsers/Staff/HookForAddStaff';


// get users data | list
export const getUsers = createAsyncThunk('allUsers/getUsers', () =>
	PublicRequest.getData('merchant/settings/users'),
);

// show a user
export const getAdminShow = createAsyncThunk(
	'user/getAdminShow',
	(payload: string) => PublicRequest.getData(`merchant/settings/users/show/${payload}`),
);

// create new user
export const postNewUser = createAsyncThunk(
	"allUsers/postNewUser",
	(payload: addStaffInterface) =>
		PublicRequest.postData(payload, `merchant/settings/users/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update user
export const updateUser = createAsyncThunk(
	'allUsers/updateUser',
	(payload: { data: addStaffInterface, id: string }) =>
		PublicRequest.putData(payload.data, `merchant/settings/users/update/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

// delete user
export const deleteUser = createAsyncThunk(
	'delete/deleteUser',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/users/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
