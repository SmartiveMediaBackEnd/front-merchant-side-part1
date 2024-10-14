import { BranchInterface, initialbranchInterface } from "./BranchInterface"


export interface InventoryInterface {
	building: string
    "id": string,
    "code": string,
    "name": string,
    "description": string,
    "contact_name": string,
    "contact_email": string,
    "contact_number": number,
    "contact_fax": string,
    "country": string,
    "state": string,
    "city": string,
    "street": string,
    "postcode": string,
    "priority": number,
    "latitude": string,
    "longitude": string,
    "status": number,
    branch_id:BranchInterface
}

export const initialInventoryData = () => {
    return {
        "id": "",
        "code": "",
        "name": "",
        "description": "",
        "contact_name": "",
        "contact_email": "",
        "contact_number": 0,
        "contact_fax": "",
        "country": "",
        "state": "",
        building:"",
        "city": "",
        "street": "",
        "postcode": "",
        "priority": 0,
        "latitude": "",
        "longitude": "",
        "status": 0,
        branch_id:initialbranchInterface()
    }
}