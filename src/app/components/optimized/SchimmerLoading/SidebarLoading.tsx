import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function SkeletonChildrenDemo() {
	return (
		<div className='min-h-screen h-full duration-200 transition-all max-lg:min-w-16 max-lg:w-16 px-2 py-3 bg-white w-[180px]'>
			<div className='shadow p-0 h-[4rem] relative bottom-3'>
				<Skeleton height='4.5rem' width='100%' />
			</div>
			<div className='flex flex-col'>
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<Skeleton height='3rem' width='90%' />
				<div className='flex gap-4 flex-wrap'>
					<Skeleton height='3rem' width='25%' />
					<Skeleton height='3rem' width='25%' />
					<Skeleton height='3rem' width='25%' />
					<Skeleton height='3rem' width='25%' />
				</div>
			</div>
		</div>
	);
}

export default function SidebarLoading() {
	return (
		<Grid>
			<Grid>
				<SkeletonChildrenDemo />
			</Grid>
		</Grid>
	);
}
