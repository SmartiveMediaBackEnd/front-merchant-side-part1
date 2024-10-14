import { TaxCategoriesListResponse, TaxCategoryShow } from "src/app/interface/settingsInterface/TaxSettingsInterface";
import { statusGlobal } from "..";


export interface taxCategoriesSettingsSliceModel extends statusGlobal {
	taxCategoriesShow: TaxCategoryShow[];
	taxCategoriesList: TaxCategoriesListResponse[];
	isLoadingAddOrUpdate: boolean;
	isLoadingDelete: boolean;

}
