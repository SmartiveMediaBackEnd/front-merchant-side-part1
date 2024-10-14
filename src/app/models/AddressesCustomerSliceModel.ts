import { statusGlobal } from '.';

import { AddressCustomerInterface } from '../interface/AddresseCustomerinterface';

export interface AddressesCustomerSliceModel extends statusGlobal {
	Addresses: AddressCustomerInterface[];
	addreseCustomerInfo:AddressCustomerInterface
	
}
