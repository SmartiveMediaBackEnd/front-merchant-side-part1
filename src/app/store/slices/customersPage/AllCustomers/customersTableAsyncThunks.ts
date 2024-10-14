import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { AddCustomerPageSchemaValues } from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/_addCustomer/_hook/HookForAddCustomerForm';

export const getAllCustomersTable = createAsyncThunk('allCustomersTable/getAllCustomersTable', () =>
	PublicRequest.getData('merchant/customers/list'),
);

export const getExportCustomers = createAsyncThunk('allCustomersTable/getExportCustomers', () =>
	PublicRequest.getData('merchant/customers/export'),
);

export const PostAddCustomerRequest = createAsyncThunk(
	'allCustomersTable/PostAddCustomerRequest',
	(payload: AddCustomerPageSchemaValues) =>
		PublicRequest.postData(payload, `merchant/customers/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);
export const PutUpdateCustomerRequest = createAsyncThunk(
	'allCustomersTable/PostUpdateCustomerRequest',
	(payload: { data: AddCustomerPageSchemaValues, id: string }) =>
		PublicRequest.putData(payload.data, `merchant/customers/update/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch((err) => PublicHandlingErrors.onErrorResponse(err)),
);

export const getCustomerInfo = createAsyncThunk(
	'allCustomersTable/getCustomerInfo',
	(payload: string) => PublicRequest.getData(`merchant/customers/show/${payload}`),
);

export const deleteCustomerAction = createAsyncThunk(
	'allCustomersTable/deleteCustomerAction',
	(payload: string) => PublicRequest.deleteData(`merchant/customers/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// deleteAllCustomersAction
export const deleteAllCustomersAction = createAsyncThunk(
	'allCustomersTable/deleteAllCustomersAction',
	(payload: { indexes: string }) => PublicRequest.postData(payload, `merchant/catalog/customers/mass-destroy`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

export const PostImportCustomers = createAsyncThunk('PostImportCustomers/getAllProductsTable', (payload: any) =>
	PublicRequest.postFormData(payload, `merchant/customers/import`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

////////////////////////////////////////////////////////////////////////////////

// filter 
export const getFilterCustomer = createAsyncThunk('filterCustomer/getFilterCustomer', (payload: string) =>
	PublicRequest.getData(`merchant/customers/filter/${payload}`),
);
