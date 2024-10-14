import { statusGlobal } from '.';
import { Attribute} from '../interface/AttributeInterface';

export interface attributesSliceModel extends statusGlobal {
	attributesList: Attribute[];
    attributeShow: Attribute ;
}