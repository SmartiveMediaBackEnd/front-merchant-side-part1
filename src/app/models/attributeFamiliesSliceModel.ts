import { statusGlobal } from '.';
import { AttributeFamily } from '../interface/AttributeFamilyInterface';

export interface attributesFamiliesSliceModel extends statusGlobal {
	attributesFamilies: AttributeFamily[];
    attributeFamiliesShow: any;
}