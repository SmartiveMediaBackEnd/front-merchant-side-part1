import { useTranslation } from 'react-i18next';
import { IoIosAddCircle, IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ArrangeButton, Button } from 'src/app/components/optimized';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
import PopoverComponent from 'src/app/components/optimized/UiKits/Popover';

import { getImageUrl } from 'src/app/utils';
import { useOpenFilterDrawer } from 'src/app/utils/hooks/CustomHookOpenDrawer';
import {
	productActionsMenu,
	productDropdownMenu,
	productSortMenu,
} from 'src/pages/ProductsPage/_comp/data';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import ProductFilters from '../ProductFilter/ProductFilters';

export default function TopSection({
	verticalCard,
	setVerticalCard,
	setOpenDialog,

	selectedOption,
	handleSelect,
}: {
	verticalCard: boolean;
	setVerticalCard: (e: boolean) => void;
	setOpenDialog: (e: boolean) => void;
	selectedOption: string;
	handleSelect: (e: string) => void;
}) {
	//  hooks
	const { t } = useTranslation();
	const { xs } = useResponsive();
	//  custom hook
	const { HandelOpenDrawer, openDrawer, HandelCloseDrawer } = useOpenFilterDrawer();

	const handelListAndGridImg = () => {
		return (
			<div className='flex-row-global gap-[.7rem]'>
				<img
					onClick={() => setVerticalCard(false)}
					src={getImageUrl(
						!verticalCard
							? 'images/AllProductsImg/listActive.svg'
							: 'images/AllProductsImg/listNotActive.svg',
					)}
					loading='lazy'
					alt='listImg'
					className='cursor-pointer'
				/>
				<img
					onClick={() => setVerticalCard(true)}
					src={getImageUrl(
						!verticalCard
							? 'images/AllProductsImg/gridNotActive.svg'
							: 'images/AllProductsImg/gridActive.svg',
					)}
					loading='lazy'
					alt='gridImg'
					className='cursor-pointer'
				/>
			</div>
		);
	};

	return (
		<>
			<div className='flex-col-global'>
				<div className='topTable'>
					{/*  left dropdown */}
					<PopoverComponent
						button={
							xs ? (
								<AddButtonMobile />
							) : (
								<Button variant='primary' LeftIcon={IoIosAddCircle} RightIcon={IoMdArrowDropdown}>
									{t('Add Product')}
								</Button>
							)
						}
					>
						<div
							style={{ boxShadow: '0px 10px 16px 0px #0000000D' }}
							className='py-[.8rem] px-[.6rem] w-[20rem]  rounded-[.4rem] bg-white'
						>
							<div className='flex-col-global gap-[1rem]'>
								{productDropdownMenu?.map((e) => (
									<Link
										className='flex flex-col gap-[.9rem]'
										key={e.id}
										to={e.to === '/products/new/simple' ? '' : e.to}
										onClick={() => {
											if (e.to === '/products/new/simple') {
												setOpenDialog(true);
											}
										}}

									>
										<div className='flex flex-col gap-[.2rem] cursor-pointer'>
											<div className='flex-row-global gap-[.4rem]'>
												<p className=' text-[.9rem] font-semibold'>{e.title}</p>
												{e.shipping && <img src={getImageUrl(`badges/shipped.svg`)} alt='status' />}
											</div>

											<p className='text-[.7rem]'>{e.description}</p>
										</div>
										<hr />
									</Link>
								))}
							</div>

						</div>
					</PopoverComponent>

					{/*  actions filter arrange,... */}
					<div className='flex-row-global  gap-[1.2rem]'>
						{/* ////////////////////////// */}
						<ArrangeButton
							sortMenus={productSortMenu}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
						<ActionsComp
							HandelOpenDrawer={HandelOpenDrawer}
							filter
							sortMenus={productSortMenu}
							ActionsMenus={productActionsMenu}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>

						{!xs && handelListAndGridImg()}
					</div>
				</div >
				<hr />
			</div >

			{/* open filter drawer */}
			{
				openDrawer && (
					<ProductFilters openDrawer={openDrawer} HandelCloseDrawer={HandelCloseDrawer} />
				)
			}
		</>
	);
}
