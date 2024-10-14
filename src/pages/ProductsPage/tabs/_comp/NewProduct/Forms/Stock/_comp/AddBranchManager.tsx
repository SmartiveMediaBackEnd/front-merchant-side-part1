import { useTranslation } from 'react-i18next';
import { FaCirclePlus } from 'react-icons/fa6';
import { Button } from 'src/app/components/optimized';
// import AddBranch from 'src/pages/SettingsPage/BranchesSettings/AddBranch/AddBranch';
import { Dialog, DialogContent, DialogTrigger } from 'src/app/components/ui/dialog';
import { ScrollArea, ScrollBar } from 'src/app/components/ui/scroll-area';

export default function AddBranchManager(props) {
	const { t } = useTranslation();

	return (
		<Dialog>
			<DialogTrigger>
				<Button
					variant='secondary'
					textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
					className='px-0 border-0'
				>
					<FaCirclePlus className='size-5' />
					{t('Add New branch')}
				</Button>
			</DialogTrigger>
			<DialogContent>
				<ScrollArea className='w-full max-h-[90dvh]'>
					{/* <AddBranch
						handleSubmit={(values) => {
							// console.log(values);
						}}
						hideHeader
					/> */}
					<ScrollBar />
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
}
