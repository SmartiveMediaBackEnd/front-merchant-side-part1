import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
import { BranchesType } from 'src/pages/SettingsPage/BranchesSettings/AddBranch/_hook/useAddBranchForm';

// get export
// post import

// post store
// put update
// delete 
// post mass 



// get list
export const getBranches = createAsyncThunk('branches/getBranches', () =>
	PublicRequest.getData('merchant/catalog/branches/list'),
);

// get show
export const getBranchesShow = createAsyncThunk('branchesShow/getBranchesShow', (payload: string) =>
	PublicRequest.getData(`merchant/catalog/branches/show/${payload}`),
);

// post store
export const postBranch = createAsyncThunk(
	"addBranch/postBranch",
	(payload: BranchesType) =>
		PublicRequest.postData(payload, `merchant/catalog/branches/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update branch
export const putBranch = createAsyncThunk(
	"putBranch/putBranch",
	(payload: BranchesType) =>
		PublicRequest.putData(payload, `merchant/catalog/branches/update/${payload}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


// delete 
export const deleteBranch = createAsyncThunk(
	'deleteBranch/deleteBranch',
	(payload: string) => PublicRequest.deleteData(`merchant/catalog/branches/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);