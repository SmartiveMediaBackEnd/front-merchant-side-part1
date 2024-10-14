import { PermissionsData, Role } from 'src/app/interface/settingsInterface/rolesSettingsInterface';
import { statusGlobal } from '..';

export interface rolesSliceModel extends statusGlobal {
	permissions: PermissionsData[];
	rolesList: Role[];
	rolesShow: Role | null
	isLoadingDelete: boolean;
}
