import MainApi from "../api/MainApi";

export const RolesApi = {
	roles: () => {
		return MainApi.get(
			'merchant/settings/roles',
		);
	},
};
