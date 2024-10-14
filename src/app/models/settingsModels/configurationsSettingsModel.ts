
import { GeneralSettingsInterface } from 'src/pages/SettingsPage/GeneralSettings/_hook/HookForGeneralForm';
import { statusGlobal } from '..';


export interface configurationsSliceModel extends statusGlobal {
	generalSettings: GeneralSettingsInterface | null;
}