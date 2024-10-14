import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getCategoriesTable = createAsyncThunk('CategoriesTable/getCategoriesTable', () =>
	PublicRequest.getData('merchant/catalog/categories/list'),
);



export const PostAddCategoryRequest = createAsyncThunk(
	"CategoriesTable/PostAddCategoryRequest",
	(payload: FormData) =>
		PublicRequest.postCategoriesData(payload, `merchant/catalog/categories/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// PutUpdateCustomerGroupRequest
export const PutUpdateCategoryRequest = createAsyncThunk(
	"CategoriesTable/PutUpdateCategoryRequest",
	(payload: { data: FormData, id: string }) =>
		PublicRequest.postCategoriesData(payload?.data, `merchant/catalog/categories/update/${payload?.id}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


// delete category Action
export const deleteCategoryAction = createAsyncThunk(
	'CategoriesTable/deleteCategoryAction',
	(payload: string) => PublicRequest.deleteData(`merchant/catalog/categories/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


// get category Info
export const getCategoryInfo = createAsyncThunk('CategoriesTable/getCategoryInfo', (payload: string) =>
	PublicRequest.getCategoryData(`merchant/catalog/categories/show/${payload}`),
);


// deleteBrandAction
export const deleteAllCategoriesAction = createAsyncThunk(
	'brandsTable/deleteAllCategoriesAction',
	(payload: { indexes: string }) => PublicRequest.postData(payload, `merchant/catalog/categories/mass-destroy`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

