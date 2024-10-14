interface BulkPriceEntry {
    from: number;
    to: number;
    price: number;
}

export interface BulkEditTypes {
    product_id: number;
    from: number;
    to: number;
    price: number;
    bulk_prices: Record<string, BulkPriceEntry>;
}

export default function useBulkEdit() {
    const handelDefaultValue = (): BulkEditTypes => {
        return {
            product_id: 0,
            from: 0,
            to: 0,
            price: 0,
            bulk_prices: {},
        };
    };

    return { handelDefaultValue };
}


