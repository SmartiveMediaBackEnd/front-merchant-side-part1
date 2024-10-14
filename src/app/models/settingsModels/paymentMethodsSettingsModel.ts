
import { Payment_Method_System } from "src/app/interface/settingsInterface/MerchantPaymentMethodsSettingsInterface";
import { statusGlobal } from "..";


export interface paymentMethodsSliceModel extends statusGlobal {
	paymentList: Payment_Method_System[];
	paymentShow: Payment_Method_System;
	isLoadingAddOrUpdate: boolean;
}
