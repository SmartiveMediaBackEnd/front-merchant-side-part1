
interface Translation {
    id: number;
    email_notification_id: number;
    subject: string;
    description: string;
    locale: string;
    created_at: string;
    updated_at: string;
}

interface Data {
    id: number;
    type: string;
    status: string;
    created_at: string;
    updated_at: string;
    translation: Translation[];
}

export interface EmailNotification {
    data: Data;
}