
import { statusGlobal } from '.';
import { BulkEditTypes } from '../components/optimized/BulkEdit/HookBulkEdit';


export interface bulkEditsSliceModel extends statusGlobal {
	allBulks: BulkEditTypes[];
	isLoadingAddOrUpdate: boolean;
}
