import { statusGlobal } from '.';
import { InventoryInterface } from '../interface/InventoryInterface';


export interface inventorySliceModel extends statusGlobal {
	inventory: InventoryInterface[];
	inventoryInfo:InventoryInterface
}
