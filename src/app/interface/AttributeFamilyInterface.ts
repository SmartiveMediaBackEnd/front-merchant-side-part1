import { Attribute } from "./AttributeInterface";

interface Group {
    id: number | string;
    code: string;
    name: string;
    swatch_type: string | null;
    attributes: Attribute[];
}

export interface AttributeFamily {
    id: number | string;
    code: string;
    name: string;
    status: number;
    groups: Group[];
}

