import { ReactElement } from "react";
import { Model } from "../types/model.type";


export interface ReactMetaElement<T extends Model> {
    item: T;
    elements: ReactElement[];

    extras?: ReactElement[];
}
