import { IUsers } from 'src/app/interface/settingsInterface/UsersSettingsInterface';
import { statusGlobal } from '..';
import { addStaffInterface } from 'src/pages/SettingsPage/PermissionsAndUsers/Staff/HookForAddStaff';


export interface usersSliceModel extends statusGlobal {
    users: IUsers[];
    userById: addStaffInterface | null;
    isLoadingAddOrUpdate: boolean;
}