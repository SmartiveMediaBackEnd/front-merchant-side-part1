
import {

    AxiosRequestConfig,
} from "axios";
import CategoryApi from "src/app/api/CategoryApi";
import MainApi from "src/app/api/MainApi";

export default class AxiosHandler {
    // GET
    public static vGetRequest = (
        url: string,

        params: Record<string, any> = {},
    ) => {
        const config: AxiosRequestConfig = {
            params,
        };

        return MainApi.get(url, config);
    };
    public static vGetCategoryRequest = (
        url: string,

        params: Record<string, any> = {},
    ) => {
        const config: AxiosRequestConfig = {
            params,
        };

        return CategoryApi.get(url, config);
    };

    // POST
    public static vPostRequest = (
        url: string,

        data: any,
    ) => {
        return MainApi.post(url, data);
    };

    public static vPostCategoriesRequest = (
        url: string,

        data: any,
    ) => {
        return CategoryApi.post(url, data);
    };

    // POST FORM-DATA
    public static vPostFormRequest = (
        url: string,

        data: any,
    ) => {

        return MainApi.postForm(url, data);
    };

    // PATCH
    public static vPatchRequest = (
        url: string,

        data: any,
    ) => {
        return MainApi.patch(url, data);
    };

    // PUT
    public static vPutRequest = (
        url: string,

        data: any,
    ) => {

        return MainApi.put(url, data);
    };

    // PUT
    public static vPutRequestWithFormData = (
        url: string,

        data: any,
    ) => {

        return MainApi.putForm(url, data);
    };

    public static vPutwithNotFormdataRequest = (
        url: string,

        data: any,
    ) => {
        return MainApi.put(url, data);
    };

    // del
    public static vDeleteRequest = (url: string) => {
        return MainApi.delete(url);
    };

    // BUILD FORM DATA
    public static buildFormData = (
        payload: Record<string, any>,
        prefix = "",
    ) => {
        const formData = new FormData();
        Object.keys(payload).forEach(k => {
            if (Array.isArray(payload[k])) {
                
                formData.append(
                    prefix ? `${prefix}[${k}][]` : `${k}[]`,
                    JSON.stringify(payload[k]),
                );
            } else {
                
                formData.append(prefix ? `${prefix}[${k}]` : k, payload[k]);
            }
        });

        return formData;
    };

    public static buildFormData2 = (
        payload: Record<string, any>,
        prefix?: string,
        formData?: any,
    ) => {
        Object.keys(payload).forEach(k => {
            if (Array.isArray(payload[k])) {
                formData.append(
                    prefix ? `${prefix}[${k}][]` : `${k}[]`,
                    JSON.stringify(payload[k]),
                );
            } else {
                formData.append(prefix ? `${prefix}[${k}]` : k, payload[k]);
            }
        });

        return formData;
    };

    // HELPERS
    public static getResponse = async <T>(
        status: number,
        callback: (...any: any[]) => any,
        ...params: any[]
    ): Promise<T> => {
        const response = await callback(...params);
        if (response.status !== status) {
            throw new Error();
        }

        return response.data as T;
    };

    public static buildBearerToken = (token: string): string => {
        return `Bearer ${token}`;
    };
}
