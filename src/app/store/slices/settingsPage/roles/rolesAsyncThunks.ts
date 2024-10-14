import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { AddRolesInterface } from 'src/pages/SettingsPage/PermissionsAndUsers/Roles/HookForAddRoles';

// get permissions
export const getPermissions = createAsyncThunk('permissions/getPermissions', () =>
	PublicRequest.getData('merchant/settings/permissions'),
);

// get roles list
export const getRolesList = createAsyncThunk('permissionsList/getRolesList', () =>
	PublicRequest.getData('merchant/settings/roles'),
);

// get roles show
export const getRolesShow = createAsyncThunk('permissionsShow/getRolesShow', (payload: string) =>
	PublicRequest.getData(`merchant/settings/roles/show/${payload}`),
);

// create roles
export const postRole = createAsyncThunk(
	"addRole/PostRole",
	(payload: AddRolesInterface) =>
		PublicRequest.postData(payload, `merchant/settings/roles/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update role
export const putRole = createAsyncThunk(
	"addRole/putRole",
	(payload: AddRolesInterface) =>
		PublicRequest.putData(payload, `merchant/settings/roles/update/${payload}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


// delete role
export const deleteRole = createAsyncThunk(
	'deleteRole/deleteRole',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/roles/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);