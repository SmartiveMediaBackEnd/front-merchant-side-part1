// import axios from 'axios';
// import PublicHandlingErrors from '../utils/AxiosUtils/PublicHandlingErrors';
// import { getCookie } from '../utils';

// //  get url from saved domain
// let custom_Basic_Url: string | null | undefined = 'my.dookan.net';
// if (typeof window !== 'undefined') {
// 	// custom_Basic_Url = getCookie('authDomain'); // server
// 	custom_Basic_Url = localStorage.getItem('domain');
// }

// // export const baseUrl =  `https://${custom_Basic_Url}/api/v1/`
	

// export const baseUrl = custom_Basic_Url
// 	? `https://${custom_Basic_Url}/api/v1/`
// 	: 'https://my.dookan.net/api/v1/';

// const MainApi = axios.create({
// 	baseURL: baseUrl,
// });

// MainApi.interceptors.request.use(
// 	function (config) {
// 		let token = undefined;
// 		let language = undefined;

// 		if (typeof window !== 'undefined') {
// 			token = getCookie('authToken');;
// 			language = localStorage.getItem('language');
// 		}

// 		if (token) config.headers.authorization = `Bearer ${token}`;
// 		// if (language) config.headers['Accept-Language'] = language;

// 		// config.headers["Content-Type"] = "application/x-www-form-urlencoded";

// 		// config.headers['Content-Type'] = 'application/json';
// 		// application/json;charset=utf-8
// 		// config.headers['Accept'] = 'application/json';
// 		// config.headers['Access-Control-Allow-Origin'] = '*';
// 		// config.headers['Access-Control-Allow-Methods'] = '*';
// 		// config.headers['Access-Control-Allow-Headers'] = '*';
// 		if (!config.params) {
// 			config.params = {};
// 		}
// 		config.params['locale'] = language;
// 		config.params['accept_token'] = true;
// 		return config;
// 	},
// 	function (error) {
// 		// Do something with request error
// 		return PublicHandlingErrors.onErrorResponse(error);
// 	},
// );

// export default MainApi;






// // import axios from 'axios';
// // import PublicHandlingErrors from '../utils/AxiosUtils/PublicHandlingErrors';

// // // Get URL from saved domain
// // let custom_Basic_Url: string | null = 'my.dookan.net';

// // if (typeof window !== 'undefined') {
// // 	custom_Basic_Url = localStorage.getItem('domain') || custom_Basic_Url;
// // }

// // export const baseUrl = `https://${custom_Basic_Url}/api/v1/`;

// // const MainApi = axios.create({
// // 	baseURL: baseUrl,
// // });

// // MainApi.interceptors.request.use(
// // 	(config) => {
// // 		let token: string | null = null;
// // 		let language: string | null = 'en'; // Default language is English

// // 		if (typeof window !== 'undefined') {
// // 			token = localStorage.getItem('token');
// // 			language = localStorage.getItem('language') || language;
// // 		}

// // 		if (token) {
// // 			config.headers.Authorization = `Bearer ${token}`;
// // 		}

// // 		if (!config.params) {
// // 			config.params = {};
// // 		}

// // 		config.params['locale'] = language;
// // 		config.params['accept_token'] = true;

// // 		return config;
// // 	},
// // 	(error) => {
// // 		// Handle request error
// // 		return PublicHandlingErrors.onErrorResponse(error);
// // 	}
// // );

// // export default MainApi;



import axios from 'axios';
import PublicHandlingErrors from '../utils/AxiosUtils/PublicHandlingErrors';

// Get URL from saved domain
let custom_Basic_Url: string | null = 'my.dookan.net';

if (typeof window !== 'undefined') {
	custom_Basic_Url = localStorage.getItem('domain') || custom_Basic_Url;
}

// export const baseUrl = `https://${custom_Basic_Url}/api/v1/`;
export const baseUrl = custom_Basic_Url
	? `https://${custom_Basic_Url}/api/v1/`
	: 'https://my.dookan.net/api/v1/';

const MainApi = axios.create({
	baseURL: baseUrl,
});

MainApi.interceptors.request.use(
	(config) => {
		let token: string | null = null;
		let language: string | null = 'en'; 

		if (typeof window !== 'undefined') {
			token = localStorage.getItem('token');
			language = localStorage.getItem('language') || language;
		}

		if (token) {
			config.headers.Authorization =`Bearer ${token}`;
		}

		if (!config.params) {
			config.params = {};
		}
		config.headers['Accept'] = 'application/json';
		config.params['locale'] = language;
		config.params['accept_token'] = true;

		return config;
	},
	(error) => {
		// Handle request error
		return PublicHandlingErrors.onErrorResponse(error);
	}
);

export default MainApi;