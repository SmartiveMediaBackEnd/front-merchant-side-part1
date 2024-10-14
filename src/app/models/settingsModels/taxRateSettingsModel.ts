import { TaxRateInterface } from "src/pages/SettingsPage/Taxes/taxRates/_hook/HookTaxRate";
import { statusGlobal } from "..";

export const handelDefaultValue = () => {
	return {
		identifier: '',
		is_zip: 0,
		zip_code: '',
		zip_from: 0,
		zip_to: 0,
		country: '',
		tax_rate: '',
	};
};

type HandelDefaultValueType = ReturnType<typeof handelDefaultValue>;

export interface taxRateSettingsSliceModel extends statusGlobal {
	taxRatesList: TaxRateInterface[];
	taxRatesShow: HandelDefaultValueType;
}
