import { useTranslation } from 'react-i18next';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import BaseTable, {
    GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import { AttributeFamily } from 'src/app/interface/AttributeFamilyInterface';

export default function GroupAttributeTable({
    data,
}: {
    data: any[];
}) {

    //  hooks
    const { language } = useLanguage();
    const { t } = useTranslation();

    //  headers
    const dataHeaders = [
        { title: t('code') },
        { title: t('name') },
        { title: t('type') },
    ];

    return (
        <BaseTable
            language={language}
            color='#55607A'
            headers={dataHeaders.map((h) => h)}
            rows={data?.map((e: any, i: number) => {
                return {
                    item: e,
                    elements: [
                        <GlobalTableCell>
                            <p className='title'>{e.code}</p>
                        </GlobalTableCell>,
                        <GlobalTableCell>
                            <p className='text-title text-sm'>{e.name}</p>
                        </GlobalTableCell>,
                        <GlobalTableCell>
                            <p className='text-title text-sm'>{e.type}</p>
                        </GlobalTableCell>,
                    ],
                };
            })}
        />
    );
}


