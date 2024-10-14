import { z } from 'zod';

// Define the interface for the attribute
export interface addAttributeInterface {
    code: string;
    type: string; // select
    admin_name: string;
    en: {
        name: string;
    };
    ar: {
        name: string;
    };
    swatch_type: string; // dropdown
    'default-null-option': boolean; // on or off
    options?: {
        admin_name: string,
        en: {
            label: string
        },
        ar: {
            label: string,
        },

        sort_order: number,
        swatch_value: string
    }[];
    is_required: number;
    is_unique: number;
    validation: number;
    value_per_locale: number;
    value_per_channel: number;
    is_filterable: number;
    is_configurable: number;
    is_visible_on_front: number;
    use_in_flat: number;
    is_comparable: number;
}

// Zod schema for validation
const stringZod = z.string();
const numberZod = z.coerce.number().min(0).max(1);

export const AddAttributeSchema = {
    code: stringZod,
    type: stringZod, // select
    admin_name: stringZod,
    en: z.object({
        name: stringZod,
    }),
    ar: z.object({
        name: stringZod,
    }),
    swatch_type: stringZod, // dropdown
    'default-null-option': z.boolean(), // on or off
    options: z.array(
        z.object({
            admin_name: stringZod,
            en: z.object({
                label: stringZod,
            }),
            ar: z.object({
                label: stringZod,
            }),
            sort_order: numberZod, // 1 or 0
            swatch_value: stringZod,
        })
    ).optional(),
    is_required: numberZod,
    is_unique: numberZod,
    validation: numberZod,
    value_per_locale: numberZod,
    value_per_channel: numberZod,
    is_filterable: numberZod,
    is_configurable: numberZod,
    is_visible_on_front: numberZod,
    use_in_flat: numberZod,
    is_comparable: numberZod,
};

export default function useCustomHookAddAttribute() {
    // Default values function
    const handelDefaultValue = (): addAttributeInterface => {
        return {
            code: '',
            type: '', // Default to 'select'
            admin_name: '',
            en: {
                name: '',
            },
            ar: {
                name: '',
            },
            swatch_type: '', // dropdown
            'default-null-option': false, // on or off
            options: [],
            is_required: 0,
            is_unique: 0,
            validation: 0,
            value_per_locale: 0,
            value_per_channel: 0,
            is_filterable: 0,
            is_configurable: 0,
            is_visible_on_front: 0,
            use_in_flat: 0,
            is_comparable: 0,
        };
    };

    return {
        AddAttributeSchema,
        handelDefaultValue,
    };
}
