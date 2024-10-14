
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { IoIosAddCircle } from 'react-icons/io';
import { Button } from 'src/app/components/optimized';
import SearchInput from 'src/app/components/ui/form/SearchInput';
import ActionHandler from 'src/app/utils/ActionMethods';
import { ExportIcon, ImportIcon, FilterIcon } from 'src/app/utils/icons';
import { useRef, useState } from 'react';
import { InventoryInterface } from 'src/app/interface/InventoryInterface';
import toast from 'react-hot-toast';
import { PostImportInventoryRequest } from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';
import { GlobalDialog } from 'src/app/components/shared';


export default function TopSectionInventoryTable({
	data,
	setSearchQuery,
	HandelOpenDrawer,

}: {
	data: InventoryInterface[];
	setSearchQuery: (query: string) => void;
	HandelOpenDrawer?: () => void;

}) {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { xs } = useResponsive();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [file, setFile] = useState<File | null>(null);
	const [open, setOpen] = useState(false);

	// export data
	const handleExportFile = () => {
		ActionHandler.exportToExcel(data, 'inventory.xlsx');
	};

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];
		if (selectedFile) {
			setFile(selectedFile);
			setOpen(true);
		}
	};

	const handleUploadToAPI = async () => {
		if (!file) {
			toast.error('No file selected');
			return;
		}

		const formData = new FormData();
		formData.append('file', file);

		try {
			setOpen(true);
			const result = await PostImportInventoryRequest(formData);
			console.log(result);
			if (result) {
				toast.success('File uploaded successfully');
				setOpen(false);
			}
		} catch (error) {
			toast.error('Failed to upload file');
		} finally {
			setOpen(false);
		}
	};

	// trigger file upload input
	const triggerFileUpload = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<div className='flex-col-global'>
			<div className='topTable'>
				{/* add inventory button */}
				{!xs && (
					<Button
						variant='primary'
						LeftIcon={IoIosAddCircle}
						onClick={() => {
							navigate('addInventory');
						}}
					>
						{t('Add Inventory')}
					</Button>
				)}
				<div className='custom-grid-parent gap-4'>
					<div className="grid-left">
						<SearchInput setSearchQuery={setSearchQuery} />
					</div>
					{/* filter drawer */}

					<div className="grid-right flex gap-4 items-center">
						<Button onClick={HandelOpenDrawer} variant='secondary' LeftIcon={FilterIcon}>
							{t('filter')}
						</Button>

						<Button onClick={triggerFileUpload} variant='secondary' className='py-0'>
							<div className='flex items-center gap-2'>
								<ImportIcon className='mb-2' />
								<p>{'Import'}</p>
							</div>
						</Button>

						<input
							type='file'
							accept='.xlsx, .xls'
							ref={fileInputRef}
							onChange={handleFileUpload}
							style={{ display: 'none' }}
						/>
						<Button onClick={handleExportFile} variant='secondary' LeftIcon={ExportIcon}>
							{t('Export')}
						</Button>
					</div>
				</div>
			</div>
			<hr />
			{open && <UploadFile handleUploadToAPI={handleUploadToAPI} setOpen={setOpen} />}
		</div>
	);
}






const UploadFile = ({ handleUploadToAPI, setOpen }) => {
	const { t } = useTranslation();
	return (

		<GlobalDialog
			openDialog={open}
			handleClose={() => setOpen(false)}
			style={{
				width: {
					lg: '50%',
					md: '70%',
					xs: '90%',
				},
				// height: { md: '350px', xs: '350px' },
			}}
		>
			<h2>{t('Upload File')}</h2>
			<p>{t('You have selected a file. Click "Upload" to proceed.')}</p>
			<div className='flex justify-end gap-2 mt-4'>
				<Button variant='secondary' onClick={() => setOpen(false)}>
					{t('Cancel')}
				</Button>
				<Button variant='primary' onClick={handleUploadToAPI}>
					{t('Upload')}
				</Button>
			</div>
		</GlobalDialog>

	)
}








