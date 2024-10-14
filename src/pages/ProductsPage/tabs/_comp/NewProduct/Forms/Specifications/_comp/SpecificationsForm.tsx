
import TextFieldForm from "./TextFieldForm";
import { AddProductSchemaSchemaValues } from "../../../Pages/Configurable/utils";
import { UseFormReturn } from "react-hook-form";

const SpecificationsForm = ({ formStore }: { formStore: UseFormReturn<AddProductSchemaSchemaValues>; }) => {



    return (

        <section className='flex-col-global gap-2'>
            <TextFieldForm formStore={formStore} />
        </section>

    )
}

export default SpecificationsForm;
