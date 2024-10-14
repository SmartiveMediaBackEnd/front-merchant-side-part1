import MainApi from '../api/MainApi';

// export const CountriesApi = {
// 	countries: () => {
// 		return MainApi.get('merchant/settings/countries');
// 	},
// 	cities: (id: string) => {
// 		return id && MainApi.get(`merchant/settings/country/${id}/states`) : Promise.resolve(null);
// 	},
// };

// export const CountriesApi = {
//     countries: () => {
//         return MainApi.get('merchant/settings/countries');
//     },
//     cities: (id: string) => {
//         return id ? MainApi.get(`merchant/settings/country/${id}/states`) : Promise.resolve(null);
//     },
// };


export const CountriesApi = {
    countries: () => MainApi.get('merchant/settings/countries'),
    cities: (id: string) => id ? MainApi.get(`merchant/settings/country/${id}/states`) : null,
};
