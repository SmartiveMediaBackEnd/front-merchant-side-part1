import { Link, useLocation } from 'react-router-dom';
import { Form } from 'src/app/components/ui/form';
import { ScrollArea, ScrollBar } from 'src/app/components/ui/scroll-area';
import { useEffect, useState } from 'react';
import { SubHeader } from 'src/app/components/optimized';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import useResponsive from 'src/app/utils/hooks/useResponsive';

/**
 * @template TFormStore
 * @param {import('./types').Props<TFormStore>} props
 */


// export default function ProductFormContainer(props) {
// 	const { xs } = useResponsive();
// 	const [title, setTitle] = useState('');
// 	const { pathname } = useLocation();

// 	useEffect(() => {
// 		const pathSegments = pathname.split('/');
// 		const lastSegment = pathSegments[pathSegments.length -1];
// 		setTitle(lastSegment);
// 	}, [pathname]);

// 	useEffect(() => {
// 		const urlFragmentIdentifier = window.location.hash;
// 		if (urlFragmentIdentifier) {
// 			const elem = document.getElementById(urlFragmentIdentifier.slice(1));
// 			if (elem) {
// 				elem.scrollIntoView({ behavior: 'smooth', block: 'start'});
// 			}
// 		}
// 	}, [pathname]);

// 	return (
// 		<Form {...props.formStore}>
// 			<form className='flex flex-col relative' onSubmit={props.onSubmit}>
// 				<header className='flex flex-col gap-3 bg-white sticky top-20 left-0 capitalize pt-4 pb-2 text-lg font-medium px-4 z-10 -translate-y-4'>
// 					<SubHeader
// 						title={title !== 'configurable' && title !== 'simple' ? `Add ${title}` : 'Add Product'}
// 					>
// 						<SubHeaderDefaultBtns
// 							isLoading={props.isLoadingAddOrUpdate}
// 							onSubmit={() => props.onSubmit()}
// 						/>
// 					</SubHeader>
// 					{!xs && (
// 						<ScrollArea className='w-full max-h-[95dvh] pb-2'>
// 							<div className='flex gap-4 capitalize text-lg font-medium'>
// 								{props.sections.map(
// 									({ id, title }) =>
// 										title && (
// 											<Link
// 												key={id}
// 												to={`/products/new/configurable#${id}`}
// 												className='text-gray whitespace-nowrap'
// 												onClick={() => {
// 													const elem = document.getElementById(id);
// 													if (elem) {
// 														elem.scrollIntoView({ behavior: 'smooth' });
// 													}
// 												}}
// 											>
// 												{title}
// 											</Link>
// 										),
// 								)}
// 							</div>
// 							<ScrollBar orientation='horizontal' />
// 						</ScrollArea>
// 					)}
// 				</header>
// 				{props.children}
// 				<div className='m-[1rem]'>
// 					<SubHeaderMobileBtns isLoading={props.isLoadingAddOrUpdate} onSubmit={() => props.onSubmit()} />
// 				</div>
// 			</form>
		// </Form>
// 	);
// }

// //////////////////////////////////////////////
export default function ProductFormContainer(props) {
	const { xs } = useResponsive();
	const [title, setTitle] = useState('');
	const { pathname } = useLocation();

	useEffect(() => {
		const pathSegments = pathname.split('/');
		const lastSegment = pathSegments[pathSegments.length - 1];
		setTitle(lastSegment);
	}, [pathname]);

	useEffect(() => {
		const urlFragmentIdentifier = window.location.hash;
		if (urlFragmentIdentifier) {
			const elem = document.getElementById(urlFragmentIdentifier.slice(1));
			if (elem) {
				elem.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
			}
		}
	}, [pathname]); // Depend on pathname to handle hash changes

	return (
		<Form {...props.formStore}>
			<form className='flex flex-col relative' onSubmit={props.onSubmit}>
				<header className='flex flex-col gap-3 bg-white sticky top-20 left-0 capitalize pt-4 pb-2 text-lg font-medium px-4 z-10 -translate-y-4'>
					<SubHeader
						title={title !== 'configurable' && title !== 'simple' ? `Add ${title}` : 'Add Product'}
					>
						<SubHeaderDefaultBtns
							isLoading={props.isLoadingAddOrUpdate}
							onSubmit={() => props.onSubmit()}
						/>
					</SubHeader>
					{!xs && (
						<ScrollArea className='w-full pb-2'>
							<div className='flex gap-4 capitalize text-lg font-medium'>
								{props.sections.map(({ id, title }) => {
									// console.log('Section ID:', id); // Debugging statement

									return (
										title && (
											<Link
												key={id}
												to={`/products/new/configurable#${id}`}
												className='text-gray whitespace-nowrap'
												onClick={() => {
													const elem = document.getElementById(id);
													console.log('Scrolling to:', id, 'Element:', elem);
													if (elem) {
														elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
													}
												}}
											>
												{title}
											</Link>
										)
									);
								})}
							</div>

							<ScrollBar orientation='horizontal' />
						</ScrollArea>
					)}
				</header>
				{props.children}
				<div className='m-[1rem]'>
					<SubHeaderMobileBtns isLoading={props.isLoadingAddOrUpdate} onSubmit={() => props.onSubmit()} />
				</div>
			</form>
		</Form>
	);
}
