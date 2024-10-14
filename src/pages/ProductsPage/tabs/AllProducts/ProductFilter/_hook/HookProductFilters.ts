import { z } from 'zod';

export interface IProductFilters {
    category_id: string;
    brand_id: string;
    min_qty: number; // 0
    max_qty: number; // 350
    min_price: number; //0
    max_price: number; // 
    type: string; // simple | com

    shipped: number;
    taxable: number;
    out_of_stock: number;
    best_reviews: number;
    less_reviews: number;
    best_selling: number;
    less_selling: number;
    most_viewed: number;
    less_viewed: number;
}


export default function useProductsFilter() {
    const handelDefaultValue = () => {
        return {
            brand_id: '',
            min_qty: 0,
            max_qty: 0, 
            min_price: 0, 
            max_price: 0, 
            type: '',

            shipped: 0,
            taxable: 0,
            out_of_stock: 0,
            best_reviews: 0,
            less_reviews: 0,
            best_selling: 0,
            less_selling: 0,
            most_viewed: 0,
            less_viewed: 0,
        };
    };

    const ProductsFilterSchema = {
        brand_id: z.string().optional(),
        min_qty: z.coerce.number().positive(),
        max_qty: z.coerce.number().positive(), 
        min_price: z.coerce.number().positive(), 
        max_price: z.coerce.number().positive(), 
        type: z.string().optional(),

        shipped:z.coerce.number().min(0).max(1),
        taxable:z.coerce.number().min(0).max(1),
        out_of_stock:z.coerce.number().min(0).max(1),
        best_reviews:z.coerce.number().min(0).max(1),
        less_reviews:z.coerce.number().min(0).max(1),
        best_selling:z.coerce.number().min(0).max(1),
        less_selling:z.coerce.number().min(0).max(1),
        most_viewed:z.coerce.number().min(0).max(1),
        less_viewed:z.coerce.number().min(0).max(1),
    };

    return {
        handelDefaultValue,
        ProductsFilterSchema,
    };
}