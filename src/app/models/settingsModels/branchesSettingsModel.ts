import { BranchesType } from 'src/pages/SettingsPage/BranchesSettings/AddBranch/_hook/useAddBranchForm';
import { statusGlobal } from '..';

export interface branchesSliceModel extends statusGlobal {
	branches: BranchesType[];
    branch: BranchesType | null;
    isLoadingDelete: boolean;
}