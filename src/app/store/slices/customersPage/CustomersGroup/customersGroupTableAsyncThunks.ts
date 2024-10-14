import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { AddCustomerGroupPageSchemaValues } from 'src/pages/CustomersPage/tabs/CustomersGroups/_comp/_AddCustomerGroup/_schema/AddCustomerGroupSchema';

export const getCustomersGroupTable = createAsyncThunk(
	'customersGroupTable/getCustomersGroupTable',
	() => PublicRequest.getData('merchant/customers/groups/list'),
);
export const PostAddCustomerGroupRequest = createAsyncThunk(
	"customersGroupTable/PostAddCustomerAddressRequest",
	(payload: AddCustomerGroupPageSchemaValues) =>
		PublicRequest.postData(payload, `merchant/customers/groups/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
// PutUpdateCustomerGroupRequest
export const PutUpdateCustomerGroupRequest = createAsyncThunk(
	"customersGroupTable/PutUpdateCustomerGroupRequest",
	(payload: {data:AddCustomerGroupPageSchemaValues,id:string}) =>
		PublicRequest.putData(payload.data, `merchant/customers/groups/update/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// getCustomerGroupInfo
export const getCustomerGroupInfo = createAsyncThunk('AddressesCustomer/getCustomerGroupInfo', (payload: string) =>
	PublicRequest.getData(`merchant/customers/groups/show/${payload}`),
);
// deleteCustomerGroupAction
export const deleteCustomerGroupAction = createAsyncThunk(
	'deleteCustomerAction/deleteCustomerGroupAction',
	(payload: string) => PublicRequest.deleteData(`merchant/customers/groups/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);
