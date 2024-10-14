interface Total {
    previous: number;
    current: number;
    progress: number;
}

export interface DashboardReports {
    total_customers: Total;
    total_orders: Total;
    total_sales: Total;
    avg_sales: Total;
    total_unpaid_invoices: number;
    top_selling_categories: string[];
    top_selling_products: string[];
    top_selling_brands: string[];
    top_review_products: string[];
    top_views_products: string[];
    customer_with_most_sales: string[];
    last_orders: string[];
    sale_graph: {
        label: string[];
        total: number[];
        formatted_total: string[];
    };
}
