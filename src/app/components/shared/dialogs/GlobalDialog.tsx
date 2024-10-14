import { Box, Modal } from '@mui/material';

export interface style {
	position?: string;
	top?: string;
	left?: string;
	height?: { md: string; xs: string };
	overflowY?: string;
	transform?: string;
	width: { lg?: string; md?: string; xs: string };
	bgcolor?: string;
	p?: number;
	borderRadius?: string;
}
export default function GlobalDialog({
	openDialog,
	handleClose,
	style,
	children,
}: {
	openDialog: boolean;
	handleClose: (e: boolean) => void;
	children: React.ReactNode;
	style: style;
}) {
	const propStyle = {
		bgcolor: 'white',
		zIndex: 50,
		p: 2.5,
		borderRadius: '10px',
		position: 'absolute',
		top: '50%',
		left: '50%',
		overflowY: 'auto',
		transform: 'translate(-50%, -50%)',
		cursor: 'default',
		...style,
	};
	return (
		<Modal
			className='cursor-pointer z-30'
			open={openDialog}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			disableAutoFocus={true}
		>
			<Box sx={propStyle}>{children}</Box>
		</Modal>
	);
}

// const ParentComponent: React.FC = () => {
	// const [openDialog, setOpenDialog] = useState<boolean>(false);

	// const handleClose = (status: boolean) => {
	//   setOpenDialog(status);
	// };

	// const dialogStyle = {
	//   width: { lg: '600px', md: '400px', xs: '300px' },
	//   height: { md: '500px', xs: '300px' },
	// };

// 	return (
// 	  <div>
// 		<Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
// 		  Open Dialog
// 		</Button>
		// <GlobalDialog openDialog={openDialog} handleClose={handleClose} style={dialogStyle}>
		//   <h2 id="modal-modal-title">Title</h2>
		//   <p id="modal-modal-description">
		// 	This is the content of the dialog. You can put any React component here.
		//   </p>
		//   <Button onClick={() => handleClose(false)}>Close</Button>
		// </GlobalDialog>
// 	  </div>
// 	);
//   };

//   export default ParentComponent;
