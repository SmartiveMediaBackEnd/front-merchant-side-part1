import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { AddInventoryInterface } from 'src/pages/ProductsPage/tabs/Inventory/_comp/_addInventory/_hook/UseAddInventory';

export const getInventoryTable = createAsyncThunk('inventoryTable/getInventoryTable', () =>
	PublicRequest.getData('merchant/settings/inventory-sources/list'),
);
// delete inventory Action
export const deleteInventoryAction = createAsyncThunk(
	'delete/deleteInventoryAction',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/inventory-sources/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

export const PostAddInventoryRequest = createAsyncThunk(
	"inventoryTable/PostAddInventoryRequest",
	(payload: AddInventoryInterface) =>
		PublicRequest.postData(payload, `merchant/settings/inventory-sources/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// PutUpdateCustomerGroupRequest
export const PutUpdateInventoryRequest = createAsyncThunk(
	"inventoryTable/PutUpdateInventoryRequest",
	(payload: { data: AddInventoryInterface, id: string }) =>
		PublicRequest.postData(payload?.data, `merchant/settings/inventory-sources/update/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// get category Info
export const getInventoryInfo = createAsyncThunk('inventoryTable/getInventoryInfo', (payload: string) =>
	PublicRequest.getData(`merchant/settings/inventory-sources/show/${payload}`),
);


// post import data
export const PostImportInventoryRequest = createAsyncThunk(
	"inventoryTable/PostImportInventoryRequest",
	(payload: AddInventoryInterface) =>
		PublicRequest.postData(payload, `merchant/settings/inventory-sources/import`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


