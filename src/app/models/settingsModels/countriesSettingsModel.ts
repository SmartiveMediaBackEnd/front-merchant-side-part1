import { Countries } from 'src/app/interface/settingsInterface/CountriesSettingsInterface';
import { statusGlobal } from '..';

export interface countriesSliceModel extends statusGlobal {
	allCountries: Countries[];
}