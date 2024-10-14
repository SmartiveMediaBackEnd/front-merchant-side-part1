import { useTranslation } from 'react-i18next';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import BaseTable, {
  GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import { addAttributeInterface } from '../_hook/HookAddAttributes';

export default function AttributesTable({
  data,
  handelId,
  isLoading,
  children,
}: {
  data: addAttributeInterface[];
  handelId: (e: string) => void;
  children: React.ReactNode;
  isLoading: boolean;
}) {

  //  hooks
  const { language } = useLanguage();
  const { t } = useTranslation();

  //  headers
  const dataHeaders = [
    { title: t('code') },
    { title: t('type') },
    { title: t('admin name') },
    { title: t('swatch-type') },
    { title: t('default null-option') },
    { title: t('actions') },
  ];

  return (
    <BaseTable
      isLoading={isLoading}
      language={language}
      color='#55607A'
      headers={dataHeaders.map((h) => h)}
      rows={data?.map((e: addAttributeInterface, i: number) => {
        return {
          item: e,
          elements: [
            <GlobalTableCell>
                <p className='title'>{e.code}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              <p className='text-primary underline text-sm'>{e.type}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              <p className='text-title text-sm'>{e.admin_name}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              <p className='text-title text-sm'>{e?.swatch_type ?? 'null'}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              <p className='text-title text-sm'>{e.options === true ? 'on' : 'off'}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              <div onClick={() => handelId(e?.id)}>{children}</div>
            </GlobalTableCell>,
          ],
        };
      })}
    />
  );
}

