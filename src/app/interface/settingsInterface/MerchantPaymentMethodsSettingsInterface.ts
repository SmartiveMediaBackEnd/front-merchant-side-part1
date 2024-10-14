export interface Payment_Method_System {
    id: string;
    method: string;
    method_title: string;
    description: string;
    type: string;
    monthly_fees_title: string;
    monthly_fees: number;
    extra_fee: number;
    setup_fees: number;
    status: string;
    sercret_code: string;
    key_code: string;
    icon: string;
    sort: number;
    created_at: string;
    updated_at: string;
}

export interface MerchantPaymentList {
    id: string;
    payment_method_id: string;
    price_more_than: number;
    items_more_than: number;
    account_number: string;
    account_name: string;
    bank_name: string;
    iban: string;
    sort: number;
    apply_with: string;
    active: number;
    main_method: number;
    show_in_footer: number;
    api_key: string;
    api_secret: string;
    server_key: string;
    client_key: string;
    entity_id: string;
    profile_id: string;
    merchant_name: string;
    merchant_country_code: string;
    access_code: string;
    merchant_identifier: string;
    merchant_reference: string;
    fort_id: string;
    signature: string;
    additional_data: string;
    created_at: string;
    updated_at: string;
    payment_method: Payment_Method_System;
}



export const getPayment_Method_SystemInitial = () => {
    return {
        id: "",
        method: "",
        method_title: "",
        description: "",
        type: "",
        monthly_fees_title: "",
        monthly_fees: 0,
        extra_fee: 0,
        setup_fees: 0,
        status: "",
        sercret_code: "",
        key_code: "",
        icon: "",
        sort: 0,
        created_at: "",
        updated_at: ""
    }
}


export const getMerchantPaymentListInitial = () => {
    return {
        id: "",
        payment_method_id: "",
        price_more_than: 0,
        items_more_than: 0,
        account_number: "",
        account_name: "",
        bank_name: "",
        iban: "",
        sort: 0,
        apply_with: "",
        active: 0,
        main_method: 0,
        show_in_footer: 0,
        api_key: "",
        api_secret: "",
        server_key: "",
        client_key: "",
        entity_id: "",
        profile_id: "",
        merchant_name: "",
        merchant_country_code: "",
        access_code:"",
        merchant_identifier: "",
        merchant_reference: "",
        fort_id: "",
        signature: "",
        additional_data: "",
        created_at: "",
        updated_at: "",
        payment_method:getPayment_Method_SystemInitial()
    }
}