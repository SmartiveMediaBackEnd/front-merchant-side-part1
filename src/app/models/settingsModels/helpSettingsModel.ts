import { HelpData, HelpItem } from 'src/app/interface/settingsInterface/helpSettingsInterface';
import { statusGlobal } from '..';

export interface helpSliceModel extends statusGlobal {
	helpList: HelpData[];
	helpShow: HelpItem[];
	isLoadingDelete: boolean;
	isLoadingAddOrUpdate: boolean;
}
