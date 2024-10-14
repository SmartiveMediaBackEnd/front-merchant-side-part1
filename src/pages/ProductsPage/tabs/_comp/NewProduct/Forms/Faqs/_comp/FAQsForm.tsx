import { FAQs, FAQsDefaultValues, FAQsSchema } from "../_hook/hookForFaqs";
import { Form } from "src/app/components/ui/form";
import { useAppDispatch } from "src/app/store";
import { postFaqs } from "src/app/store/slices/faqs/FaqsAsyncThunks";
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from "react-i18next";
import TextFieldForm from "./TextFieldForm";
import { UseFormReturn } from "react-hook-form";
import { AddProductSchemaSchemaValues } from "../../../Pages/Configurable/utils";

const FAQsForm = ({ formStore, id }: { id?: string; formStore: UseFormReturn<AddProductSchemaSchemaValues>; }) => {
    const { t } = useTranslation();


    return (
        <section id={id} className='global-cards gap-2'>

            <h2 className='title'>{t('FAQs')}</h2>
            <p className='text-gray-400 text-sm opacity-80'>
                {t(
                    'Answer question people frequently ask about your product.',
                )}
            </p>

            <section>
                <TextFieldForm formStore={formStore} />
            </section>

        </section>
    )
}

export default FAQsForm;
