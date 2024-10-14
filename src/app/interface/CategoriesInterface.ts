import { Product } from "src/pages/ProductsPage/_comp/data";

export interface CategoryInterface {
    id: string;
    image_url: string;
    name: string;
    description: string;
    slug: string
    subcategories: number;
    status: number;

    en: {
        meta_description: string;
        meta_keywords: string;
        meta_title: string;
        name: string;
        description: string;
    };
    ar: {
        meta_description: string;
        meta_keywords: string;
        meta_title: string;
        name: string;
        description: string;
    };
    products: Product[];
}

export const CategoryInitialInfo = () => {
    return {
        id: "",
        image_url: "",
        name: "",
        description: "",
        slug:"",
        subcategories: 0,
        status: 0,
        en: {
            meta_description: "",
            meta_keywords: "",
            meta_title: "",
            name: "",
            description: "",
        },
        ar: {
            meta_description: "",
            meta_keywords: "",
            meta_title: "",
            name: "",
            description: "",
        },
        products: []
    }
}