import { useTranslation } from 'react-i18next'
import { IoIosAddCircle } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { ArrangeButton, Button } from 'src/app/components/optimized'
import ActionsButton from 'src/app/components/optimized/Buttons/ActionsButton'
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox'
import { productSortMenu } from 'src/pages/ProductsPage/_comp/data';
import { FaRegEdit } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { LiaTrashAlt } from 'react-icons/lia';
import { SiMicrosoftexcel } from 'react-icons/si';
import { nanoid } from 'nanoid'

export const attributeActionsMenu = [
  // { id: nanoid(), text: 'Bulk edit', icon: <FaRegEdit className='iconClass' /> },
  // { id: nanoid(), text: 'Export attributes', icon: <SiMicrosoftexcel className='iconClass' /> },
  // { id: nanoid(), text: 'Import attributes', icon: <FiUploadCloud className='iconClass' /> },
  {
    id: nanoid(),
    text: 'Delete all attributes',
    icon: <LiaTrashAlt size='28' className='fill-error' />,
  },
];

const AttributesFamilyHeader = () => {
  const { selectedOption, handleSelect } = useSelectBox();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='md:flex-row-global flex-col-global justify-between w-full'>
      <div>
        <Button variant='primary' LeftIcon={IoIosAddCircle} onClick={() => navigate('add-family')}>
          {t('Add Family')}
        </Button>
      </div>
      <div className='flex-row-global gap-4'>
        <ArrangeButton
          sortMenus={productSortMenu}
          selectedOption={selectedOption}
          handelSelect={handleSelect}
        />

        <ActionsButton
          sortMenus={attributeActionsMenu}
          selectedOption={selectedOption}
          handelSelect={handleSelect}
        />
      </div>
    </div>
  )
}

export default AttributesFamilyHeader;
