
export interface Role {
    id: string;
    name: string;
    description?: string;
    permission_type?: string;
    permissions?: any | null; 
    created_at?: string; 
    updated_at?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    status: number;
    role: Role;
    created_at: string; 
    updated_at: string;
}

// admin user
export interface IUsers {
    data: User[];
}