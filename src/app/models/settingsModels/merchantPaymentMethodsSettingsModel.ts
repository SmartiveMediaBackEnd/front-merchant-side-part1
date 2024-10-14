
import { MerchantPaymentList } from "src/app/interface/settingsInterface/MerchantPaymentMethodsSettingsInterface";
import { statusGlobal } from "..";


export interface merchantPaymentMethodsSliceModel extends statusGlobal {
	merchantPaymentList: MerchantPaymentList[];
	merchantPaymentShow: MerchantPaymentList;
	isLoadingDelete: boolean;
}
