import { UseFormReturn, Path } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AddProductSchemaSchemaValues } from "src/pages/ProductsPage/tabs/_comp/NewProduct/Pages/Configurable/utils";
import FormField from "../../ui/form/field";
import { useTranslation } from "react-i18next";

const Featured = ({ formStore, name }: { formStore: UseFormReturn<AddProductSchemaSchemaValues>; name: Path<AddProductSchemaSchemaValues> }) => {
    const { t } = useTranslation();
    return (
        <div>
            <div>
                <FormField
                    formStore={formStore}
                    name={name}
                    render={(field) => (
                        <div className="flex items-center gap-2 ">
                            {field.value ? (
                                <FaStar
                                    color='yellow'
                                    size={22}
                                    className="cursor-pointer -ml-4"
                                    onClick={() => formStore.setValue(name, 0)}
                                />
                            ) : (
                                <FaRegStar
                                    color='#8791A8'
                                    size={22}
                                    className="cursor-pointer -ml-4"
                                    onClick={() => formStore.setValue(name, 1)}
                                />
                            )}
                        </div>
                    )}
                />
            </div>
            <p className='-mt-5 ml-5 text-title'>{t('Feature on the front of page')}</p>
        </div >
    )
}

export default Featured;
