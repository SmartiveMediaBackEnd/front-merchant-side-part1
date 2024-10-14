export interface Option {
    id: number;
    admin_name: string;
    label: string;
    swatch_value: string | null;
}

export interface Attribute {
    id: number;
    name: string;
    admin_name: string;
    code: string;
    type: string; 
    swatch_type: string | null;
    options: Option[];
    created_at: string;
    updated_at: string;
}

export const initialAttribute=()=>{
    return{
        id: 0,
        name: "",
        admin_name: "",
        code: "",
        type: "",
        swatch_type: "",
        options: [],
        created_at: "",
        updated_at: ""
    }
}
