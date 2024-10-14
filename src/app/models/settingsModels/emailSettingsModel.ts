import { statusGlobal } from "..";
import { EmailNotification } from "src/app/interface/settingsInterface/EmailSettingsInterface";


export interface emailNotificationSliceModel extends statusGlobal {
	emailNotification: EmailNotification[];
	emailNotificationShow: EmailNotification[];
	isLoadingAddOrUpdate: boolean;
	isLoadingDelete: boolean;
}
