import { z } from 'zod';
import { addAttributeInterface, AddAttributeSchema } from '../../Attributes/_hook/HookAddAttributes';

// Define the interface for the attribute family
export interface IAddAttributeFamilies {
    code: string;
    name: string;
    attribute_groups?: {
        name: string;
        position: number;
        is_user_defined: number;
        custom_attributes: addAttributeInterface[];
    }[];
}


export const AttributeFamilySchema = {
    code: z.string().min(1),
    name: z.string().min(1),
    attribute_groups: z.array(
        z.object({
            name: z.string().min(1),
            position: z.coerce.number().min(0), 
            is_user_defined: z.number().min(0).max(1),
            custom_attributes: z.array(AddAttributeSchema), 
        })
    ).optional(), 
};

export default function useCustomHookAttributeFamily() {
    const handleDefaultValue = () => {
        return {
            code: '',
            name: '',
            attribute_groups: [{
                name: '',
                position: 0,
                is_user_defined: 0,
                custom_attributes: [], 
            }]
        };
    };

    return {
        AttributeFamilySchema,
        handleDefaultValue,
    };
}

