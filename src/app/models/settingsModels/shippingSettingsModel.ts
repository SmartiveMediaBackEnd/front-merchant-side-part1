import { ShippingListInterface, shippingMethodsInterface } from 'src/app/interface/settingsInterface/ShippingSettingsInterface';
import { statusGlobal } from '..';

export interface shippingSliceModel extends statusGlobal {
	shippingList: ShippingListInterface;
	shippingMethod: shippingMethodsInterface[];

}
