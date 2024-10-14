import {
	Box,
	Fade,
	LinearProgress,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	styled,
} from '@mui/material';

import { Model } from 'src/app/types/model.type';
import { ReactMetaElement } from 'src/app/interface/react-meta-element.interface';
import { getImageUrl } from 'src/app/utils';

interface header {
	title: string;
	icon?: React.ReactNode;
}
type props = {
	headers?: header[];
	rows: any[];
	isLoading?: boolean;
	color?: string;
	language?: string | null | undefined;
	collapse?: boolean;
};

const BaseTable = <T extends Model>({
	headers,
	rows,
	isLoading,
	color,
	language,
	collapse,
}: props) => (
	<>
		<TableContainer
			sx={{
				// marginTop: '20px',
				backgroundColor: '#F9FAFC',
				maxHeight: 700,
				minHeight: rows?.length === 0 ? 50 : 300,
				// display: { sm: 'block', xs: 'none' },
			}}
		>
			<Fade in={isLoading}>
				<LinearProgress color='primary' />
			</Fade>
			<Table
				sx={{ backgroundColor: '#F9FAFC' }}
				stickyHeader
				aria-label={collapse ? 'collapsible table' : 'sticky table'}
			>
				<TableHead sx={{ backgroundColor: 'white' }}>
					<TableRow>
						{headers &&
							headers?.length > 0 &&
							headers?.map((header: header, i: any) => (
								<GlobalTableCell
									sx={{ color: color, fontSize: { md: '.9rem', xs: '.7rem' } }}
									key={`h-${i}`}
								>
									<Box
										sx={{
											display: 'flex',
											justifyContent: header.icon
												? 'flex-start'
												: language === 'ar'
												? 'flex-end'
												: 'flex-start',
											alignItems: 'center',
										}}
									>
										{header.icon && header.icon}
										{header.title?.toUpperCase()}
									</Box>
								</GlobalTableCell>
							))}
					</TableRow>
				</TableHead>

				{rows?.length > 0 && !collapse && (
					<TableBody sx={{ backgroundColor: '#F9FAFC' }}>
						{/*Rows*/}
						{!isLoading &&
							rows?.map((e: ReactMetaElement<T>, i: number) => (
								<TableRow key={`r-${e.item.id}+${i}` || `${e.item.user}+${i}`}>
									{...e?.elements}
									{/*Actions*/}
									{e?.extras && <TableCell>{...e?.extras}</TableCell>}
								</TableRow>
							))}
					</TableBody>
				)}
				{rows?.length > 0 && collapse && (
					<TableBody sx={{ backgroundColor: '#F9FAFC' }}>{rows}</TableBody>
				)}
			</Table>
		</TableContainer>
		{rows?.length === 0 && !isLoading && (
			<Box
				sx={{
					display: {sm:'flex',xs:"none"},
					justifyContent: 'center',
					alignItems: 'center',
					mt: '50px',
					mb: '20px',
					width: '100%',
				}}
			>
				<img
					style={{
						width: '259px',
						height: '287px',
					}}
					src={getImageUrl('images/EmptyList.png')}
					loading='lazy'
					alt='emptyImg'
				/>
			</Box>
		)}
	</>
);

export default BaseTable;
// #F9FAFC
export const GlobalTableCell = styled(TableCell)(({ theme }) => ({
	fontSize: '.9rem',
	fontWeight: '400',
	borderBottom: '1.3rem solid #F9FAFC',
	backgroundColor: 'white',
}));
