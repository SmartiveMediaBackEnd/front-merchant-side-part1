import { t } from 'i18next';
import { toast } from 'react-hot-toast';
// import { Navigate  } from "react-router-dom";

export default class PublicHandlingErrors {
	public static onErrorResponse = (error: any) => {
		
		this.handleTokenExpire(error?.response?.status);

		const errorData = error?.response?.data;

		if (errorData?.errors?.length > 0) {
			errorData?.errors?.forEach((item: any) => {
				toast.error(item?.message);
			});
			this.handleTokenExpire(error?.response?.status);
		} else if (errorData?.errors && Object.values(errorData?.errors)?.length > 0) {
			Object.values(errorData?.errors)?.map((e: any) => {
				return toast.error(e);
			});
		} else if (errorData?.message) {
			toast.error(errorData?.message);
			this.handleTokenExpire(error?.response?.status);
		} else if (errorData?.error) {
			toast.error(errorData?.error);
			this.handleTokenExpire(error?.response?.status);
		} else if (errorData?.errors?.message) {
			toast.error(errorData?.errors?.message);
		}
	};

	public static handleTokenExpire = (status: number) => {
		if (status === 401) {
			if (window?.localStorage.getItem('token')) {
				toast.error(t('Your token has been expired. Please sign in again'));
				// Navigate;
				// dispatch(clearToken());
				localStorage.clear();
				window.location.href = '/login';
			}
		}
	};
	
}
