import { statusGlobal } from ".";
import { DashboardReports } from "../interface/DashboardInterface";


export interface dashboardSliceModel extends statusGlobal {
	dashboardReports: DashboardReports[];
}