import { Box, Drawer } from '@mui/material';

export default function FilterSideBar({
	sideDrawerOpen,
	handelClose,
	children,
}: {
	sideDrawerOpen: boolean;
	handelClose: () => void;
	children: React.ReactNode;
}) {
	return (
		<Drawer
			anchor='right'
			open={sideDrawerOpen}
			onClose={handelClose}
			variant='temporary'
			style={{width:"366px"}}
			
		>
			<Box sx={{width:"22rem",p:"1.2rem"}}>
			{children}
			</Box>
			
		</Drawer>
	);
}
