import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function SkeletonChildrenDemo() {
	return (
		<div className='bg-white h-[4.375rem] w-full px-4 flex justify-between items-center mx-auto relative top-0'>
			<Skeleton height='3rem' width='10%' />
			<Skeleton height='4.5rem' width='30%' />
			<Skeleton height='4rem' width='20%' />
		</div>
	);
}

export default function HeaderLoading() {
	return (
		<Grid>
			<Grid item xs>
				<SkeletonChildrenDemo />
			</Grid>
		</Grid>
	);
}
