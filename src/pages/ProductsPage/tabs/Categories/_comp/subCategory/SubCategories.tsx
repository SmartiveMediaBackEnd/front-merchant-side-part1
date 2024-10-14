import { SubHeader } from 'src/app/components/optimized';
import SubCategoryTable from './SubCategoryTable';
import TopSubCategoriesTable from './TopSubCategoriesTable';
import { useTranslation } from 'react-i18next';

export const SubCategories = () => {
	const { t } = useTranslation();
	return (
		<div className='flex-col-global  gap-3'>
			<SubHeader title={t('Subcategories')} />
			<div className='custom_container '>
				<div className='flex-col-global'>
					{/*  top section */}
					<TopSubCategoriesTable />

					{/* table */}
					<SubCategoryTable />

					{/*  case of small media */}
					{/* <div className='flex-col-global sm:hidden'>
					{categoryData?.map((e, i) => (
						<CustomersComponent
							noAvatar
							id={e.id}
							settingMenus={Menue}
							key={i}
							firstName={e.name}
							email={e.subtitle}
							imageUrl={e.img}
						/>
					))}
				</div> */}
				</div>
			</div>
		</div>
	);
};
// Menue={Menue} categoryData={categoryData}
