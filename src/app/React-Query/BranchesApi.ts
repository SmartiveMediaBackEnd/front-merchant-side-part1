import MainApi from "../api/MainApi";

export const BranchesApi = {
	branches: () => {
		return MainApi.get(
			'merchant/catalog/branches/list',
		);
	},
};