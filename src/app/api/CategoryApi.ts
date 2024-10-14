import axios from 'axios';
import PublicHandlingErrors from '../utils/AxiosUtils/PublicHandlingErrors';

//  get url from saved domain
let custom_Basic_Url: string | null | undefined = 'my.dookan.net';
if (typeof window !== 'undefined') {
	custom_Basic_Url = localStorage.getItem('domain') || custom_Basic_Url;
}

// export const baseUrl = `https://${custom_Basic_Url}/api/v1/`

export const baseUrl = custom_Basic_Url
	? `https://${custom_Basic_Url}/api/v1/`
	: 'https://my.dookan.net/api/v1/';

const CategoryApi = axios.create({
	baseURL: baseUrl,
});

CategoryApi.interceptors.request.use(
	function (config) {
		let token = undefined;


		if (typeof window !== 'undefined') {
			token = localStorage.getItem('token');

		}

		if (token) config.headers.authorization = `Bearer ${token}`;
		// if (language) config.headers['Accept-Language'] = language;

		// config.headers["Content-Type"] = "application/x-www-form-urlencoded";

		// application/json;charset=utf-8
		// config.headers['Content-Type'] = 'application/json';
		// config.headers['Accept'] = 'application/json';
		// config.headers['Access-Control-Allow-Origin'] = '*';
		// config.headers['Access-Control-Allow-Methods'] = '*';
		// config.headers['Access-Control-Allow-Headers'] = '*';
		if (!config.params) {
			config.params = {};
		}
		config.params['locale'] = "all";
		config.params['accept_token'] = true;
		return config;
	},
	function (error) {
		// Do something with request error
		return PublicHandlingErrors.onErrorResponse(error);
	},
);

export default CategoryApi;


