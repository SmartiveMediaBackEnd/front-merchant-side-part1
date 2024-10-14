
export interface HelpItem {
    id: number;
    type: string;
    url: string;
    duration: string;
    title: string;
    description: string;
    image: string;
    image_url: string;
    created_at: string; 
    updated_at: string; 
}




export interface HelpData {
    data: HelpItem[];
}
