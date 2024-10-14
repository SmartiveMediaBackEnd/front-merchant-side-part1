import { statusGlobal } from '.';
import { BrandsInterface } from '../interface/BrandInterface';

export interface brandsSliceModel extends statusGlobal {
	brands: BrandsInterface[];
	brandInfo:BrandsInterface
}
