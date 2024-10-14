import { ArrangeButton, Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import SearchInput from 'src/app/components/ui/form/SearchInput';

export default function TopSectionBrandsTable({
	setOpenAddOrUpdateDialog,
	sortMenus,
	selectedOption,
	handleSelect,
	ActionsMenus,
	setSearchQuery,
}: {
	setOpenAddOrUpdateDialog: (e: boolean) => void;
	sortMenus: { id: string; text: string }[];
	selectedOption: string;
	handleSelect: (e: string) => void;
	ActionsMenus: { id: string; text: string; icon: React.ReactNode }[];
	setSearchQuery: (query: string) => void;
}) {
	//  hooks
	const { xs } = useResponsive();
	const { t } = useTranslation();

	return (
		<div className='flex-col-global'>
			<div className='flex gap-4 items-center justify-between'>
				{!xs && (
					<Button
						onClick={() => setOpenAddOrUpdateDialog(true)}
						variant='primary'
						LeftIcon={IoIosAddCircle}
					>
						{t('Add Brand')}
					</Button>
				)}

				{/*  actions  arrange,... */}
				<div className='custom-grid-parent gap-4'>
					<div className="grid-left mt-1.5">
						<SearchInput setSearchQuery={setSearchQuery} />
					</div>
					<div className="grid-right flex gap-4 items-center">
						<ArrangeButton
							sortMenus={sortMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
						<ActionsComp
							sortMenus={sortMenus}
							ActionsMenus={ActionsMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</div>
				</div>
			</div >

			<hr />
		</div >
	);
}
