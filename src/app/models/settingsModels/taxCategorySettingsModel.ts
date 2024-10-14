
import { statusGlobal } from "..";
import { TaxCategory } from "src/pages/SettingsPage/Taxes/taxCategories/_hook/HookTaxCategories";

export const handelDefaultValue = () => {
	return {
		code: '',
		name: '',
		description: '',
		taxrates: []
	};
};

type HandelTaxCategoryType = ReturnType<typeof handelDefaultValue>;


export interface taxCategoriesSettingsSliceModel extends statusGlobal {
	taxCategoriesList: TaxCategory[];
	taxCategoriesShow: HandelTaxCategoryType;

}
