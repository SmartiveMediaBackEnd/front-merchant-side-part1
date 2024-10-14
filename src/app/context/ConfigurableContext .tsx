import { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/app/store';
import { getProduct, PostSimpleQuickProduct, PostUpdateQuickProduct } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import { AddProductSchemaSchemaValues, defaultProductValues, ProductSchema } from '../../pages/ProductsPage/tabs/_comp/NewProduct/Pages/Configurable/utils';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'src/app/utils/hooks/form';
import { AttributeValue } from '../../pages/ProductsPage/tabs/_comp/NewProduct/Forms/OptionsAndVariations/Variations';
import { postSpecifications } from '../store/slices/specifications/SpecificationsAsyncThunks';
import { postFaqs, putFaqs } from '../store/slices/faqs/FaqsAsyncThunks';

interface FormStoreContextProps {
    formStore: any;
    onSubmit: (values: any) => void;
    variantsUpdate?: any;
}

interface InventoryInterface {
    id: number;
    quantity: number;
}

type InventoriesObject = {
    [key: string]: number;
};

interface FormStoreContextProps {
    formStore: any;
    onSubmit: (values: any) => void;
}
const ConfigurableContext = createContext<FormStoreContextProps | null>(null);

export const useFormStore = () => {
    const context = useContext(ConfigurableContext);
    return context;
};


export const FormStoreProvider = ({ children }: { children: React.ReactNode }) => {
    const { product } = useAppSelector((state) => state.allProducts);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (values: AddProductSchemaSchemaValues) => {
        const formData = formStore.getValues();

        if (!formData) {
            console.error('formData is undefined');
            return;
        }

        // Prepare payload
        const payload = {
            images: formStore.getValues('images') || [],
            videos: formStore.getValues('videos') || [],
        };

        const formDataToSend = new FormData();
        const images = formStore.getValues('images') || [];

        // Append images
        if (Array.isArray(images)) {
            images.forEach((file: File) => {
                if (file instanceof File) {
                    formDataToSend.append('images[]', file);
                }
            });
        }

        // Append videos
        const videos = formStore.getValues('videos') || [];
        videos.forEach((file: File) => {
            if (file instanceof File) {
                formDataToSend.append('videos[]', file);
            }
        });

        // Append form data
        Object.keys(formData).forEach((key) => {
            const value = formData[key as keyof AddProductSchemaSchemaValues];
            if (value !== undefined) {
                if (Array.isArray(value)) {
                    value.forEach((item) => {
                        formDataToSend.append(`${key}[]`, JSON.stringify(item));
                    });
                } else {
                    formDataToSend.append(key, String(value));
                }
            }
        });

        // Prepare meta keywords
        const metaKeywords = formStore.getValues('meta_keywords') || [];
        const metaKeywordsString = metaKeywords.join(', ');

        // Prepare transformed variants
        const transformedVariants = formData.variants?.reduce((acc: Record<string, any>, variant: any, index: number) => {
            if (!variant || !variant.sku) {
                console.warn(`Variant at index ${index} is invalid`, variant);
                return acc;
            }
            const variantKey = `variant_${index}`;
            const inventoriesObject = variant.inventories?.reduce((obj: InventoriesObject, item: InventoryInterface) => {
                obj[item.id] = item.quantity;
                return obj;
            }, {} as InventoriesObject) || {};

            acc[variantKey] = {
                code: variant.code,
                attributeValues: variant.attributeValues,
                sku: variant.sku,
                en: { name: variant.en.name },
                ar: { name: variant.ar.name },
                price: variant.price,
                quantity: variant.quantity,
                discount: variant.discount,
                color: variant.color,
                size: variant.size,
                status: variant.status,
                inventories: inventoriesObject,
            };

            return acc;
        }, {});

        const finalVariants = id ? transformedVariants : JSON.stringify(transformedVariants);

        const finalValues = {
            ...payload,
            ...values,
            meta_keywords: metaKeywordsString,
            variants: finalVariants || [],
        };

        // Check for specifications
        if (!formData.specifications || formData.specifications.length === 0) {
            console.error("No specifications found.");
            return;
        }

        // Prepare specifications payload
        const specificationsPayload = formData.specifications.reduce((acc: Record<string, any>, specifications: any, index: number) => {
            if (!specifications.name_ar || !specifications.value_ar || !specifications.name_en || !specifications.value_en) {
                console.error(`Specifications at index ${index} is missing required fields`);
                return acc;
            }

            acc[index] = {
                name_ar: specifications.name_ar,
                value_ar: specifications.value_ar,
                name_en: specifications.name_en,
                value_en: specifications.value_en,
            };

            return acc;
        }, {});

        const jsonPayload = id ? specificationsPayload : JSON.stringify(specificationsPayload);

        const sendingData = {
            ...values,
            specifications: jsonPayload,
        };



        // Prepare specifications payload
        // Check for specifications
        if (!formData.faqs || formData.faqs.length === 0) {
            console.error("No faqs found.");
            return;
        }
        const faqsPayload = formData.faqs.reduce((acc: Record<string, any>, faq: any, index: number) => {
            if (!faq.question_en || !faq.answer_en || !faq.question_ar || !faq.answer_ar) {
                console.error(`FAQ at index ${index} is missing required fields`);
                return acc;
            }

            acc[index] = {
                question_ar: faq.question_ar,
                answer_ar: faq.answer_ar,
                question_en: faq.question_en,
                answer_en: faq.answer_en,
            };

            return acc;
        }, {});



        const jsonPayloadFaqs = id ? faqsPayload : JSON.stringify(faqsPayload);

        const sendingDataFaqs = {
            ...values,
            faqs: jsonPayloadFaqs,
        }


        try {
            if (id) {
                const promiseResponse = await dispatch(PostUpdateQuickProduct({ data: finalValues, id }));
                if (promiseResponse.payload.code === 200) {

                } else {
                    console.error('Unexpected response format', promiseResponse);
                    return;
                }

            } else {
                const response = await dispatch(PostSimpleQuickProduct(finalValues));
                console.log('API response:', response);


                if (response?.payload?.code === 200) {
                    console.log('code')

                    const indexedObject = sendingData.specifications.reduce((acc, item, index) => {
                        acc[index] = item;
                        return acc;
                    }, {})

                    const send_data = JSON.stringify(indexedObject, null, 2);

                    const specificationsResponse = await dispatch(postSpecifications({ specs: send_data, product_id: response.payload.data.id }));
                    console.log('Specifications API response:', specificationsResponse);
                    if (specificationsResponse.payload.code === 200) {

                    }


                    // faqs

                    const indexedObjectFaqs = sendingDataFaqs.faqs.reduce((acc, item, index) => {
                        acc[index] = item;
                        return acc;
                    }, {})

                    const send_data_faqs = JSON.stringify(indexedObjectFaqs, null, 2);

                    const faqsResponse = await dispatch(postFaqs({ faqs: send_data_faqs, product_id: response.payload.data.id }));
                    console.log('faqsResponse API response:', faqsResponse);
                    if (faqsResponse.payload.code === 200) {

                    }

                    navigate(-1);
                } else {
                    console.error('Unexpected response format', response);
                    return;
                }
            }


        } catch (error) {
            console.error('An error occurred during submission:', error);
        }
    };


    const { formStore, onSubmit } = useForm({
        schema: ProductSchema,
        handleSubmit: submitHandler,
        defaultValues: defaultProductValues,
    });

    useEffect(() => {
        if (id) {
            dispatch(getProduct(id))
        }
        console.log('all pro:', product)
    }, [id, dispatch]);


    const updateVariantsInFormStore = (variants: any[]) => {
        console.log('Updating variants in form store:', variants);
        variants.forEach((variant, index) => {
            if (variant.sku) {
                formStore.setValue(`variants.${index}.sku`, variant.sku);
                formStore.setValue(`variants.${index}.en.name`, variant.en.name);
                formStore.setValue(`variants.${index}.ar.name`, variant.ar.name);
                formStore.setValue(`variants.${index}.price`, variant.price);
                formStore.setValue(`variants.${index}.discount`, variant.discount);
                formStore.setValue(`variants.${index}.color`, variant.color);
                formStore.setValue(`variants.${index}.size`, variant.size);
                formStore.setValue(`variants.${index}.status`, variant.status);
                formStore.setValue(`variants.${index}.quantity`, variant.quantity);

                if (variant.inventories) {
                    variant.inventories.forEach((inventory: InventoryInterface, inventoryIndex: number) => {
                        formStore.setValue(`variants.${index}.inventories.${inventoryIndex}.id`, inventory.id);
                        formStore.setValue(`variants.${index}.inventories.${inventoryIndex}.quantity`, inventory.quantity);
                    });
                }

                if (variant.attributeValues) {
                    variant.attributeValues.forEach((attributeValue: AttributeValue, attributeIndex: number) => {
                        formStore.setValue(`variants.${index}.attributeValues.${attributeIndex}.id`, attributeValue.id);
                        formStore.setValue(`variants.${index}.attributeValues.${attributeIndex}.name`, attributeValue.name);
                    });
                }
            } else {
                console.warn(`Missing SKU for variant at index ${index}`, variant);
            }
        });
    };
    const updateFaqsInFormStore = (faqs: any[]) => {
        console.log('Updating faqs in form store:', faqs);
        faqs.forEach((faq, index) => {
            formStore.setValue(`faqs.${index}.question_ar`, faq.question_ar);
            formStore.setValue(`faqs.${index}.answer_ar`, faq.answer_ar);
            formStore.setValue(`faqs.${index}.question_en`, faq.question_en);
            formStore.setValue(`faqs.${index}.answer_en`, faq.answer_en);
        });
    };

    const updateSpecificationsInFormStore = (specifications: any[]) => {
        console.log('Updating specifications in form store:', specifications);
        specifications.forEach((specification, index) => {
            formStore.setValue(`specifications.${index}.name_ar`, specification.name_ar);
            formStore.setValue(`specifications.${index}.value_ar`, specification.value_ar);
            formStore.setValue(`specifications.${index}.name_en`, specification.name_en);
            formStore.setValue(`specifications.${index}.value_en`, specification.value_en);
        });
    };

    useEffect(() => {
        if (id) {
            updateVariantsInFormStore(product.variants || []);
        }
    }, [id, product.variants]);

    useEffect(() => {
        if (id) {
            updateFaqsInFormStore(product?.faqs || []);
            console.log('faqs', product?.faqs);
        }
    }, [id, product.faqs]);

    useEffect(() => {
        if (id) {
            updateSpecificationsInFormStore(product?.specifications || []);
            console.log('specifications', product?.specifications);
        }
    }, [id, product.specifications]);

    useEffect(() => {
        if (id && product) {
            // MEDIA
            formStore.setValue('images', product?.images || []);
            formStore.setValue('videos', product?.videos || []);
            // BASIC INFO
            formStore.setValue('sku', product?.sku);
            formStore.setValue('en.name', product?.en.name);
            formStore.setValue('en.description', product?.en.description);
            formStore.setValue('ar.name', product?.ar.name);
            formStore.setValue('ar.description', product?.ar.description);
            formStore.setValue('categories', product?.categories[0] || '');
            formStore.setValue('brand_id', product?.brand_id);

            // PRICING
            formStore.setValue('price', product?.price);
            formStore.setValue('cost', product?.cost);
            formStore.setValue('profit', product?.profit);
            formStore.setValue('discount', product?.discount ? parseFloat(product.discount) : 0);
            product?.taxable > 0 ? formStore.setValue('taxable', 1) : formStore.setValue('taxable', 0);
            // SHIPPING
            // formStore.setValue('state', product?.state);
            product?.is_shipped > 0 ? formStore.setValue('is_shipped', 1) : formStore.setValue('is_shipped', 0);
            formStore.setValue('width', product?.width ? Number(product.width) : 0);
            formStore.setValue('height', product?.height ? Number(product.height) : 0);
            formStore.setValue('length', product?.length ? Number(product.length) : 0);
            formStore.setValue('weight', product?.weight ? Number(product.weight) : 0);
            formStore.setValue('dimension_unit', product?.dimension_unit);
            formStore.setValue('weight_unit', product?.weight_unit);
            // STOCK
            product?.continue_selling > 0 ? formStore.setValue('continue_selling', 1) : formStore.setValue('continue_selling', 0);
            formStore.setValue('base_qty', product?.base_qty);
            formStore.setValue('qty', product?.qty);
            // SEO
            formStore.setValue('meta_keywords', product?.meta_keywords);
            formStore.setValue('page_title', product?.page_title);
            formStore.setValue('meta_description', product?.meta_description);
            formStore.setValue('link', product?.link);
        }
    }, [id, product])

    console.log('error:', formStore.formState.errors)

    return (
        <ConfigurableContext.Provider value={{ formStore, onSubmit }}>
            {children}
        </ConfigurableContext.Provider>

    );
};
