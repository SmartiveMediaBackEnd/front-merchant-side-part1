



export  interface DayInterface {

    "id": string,
    "day": string,
    "is_open": number,
    "times": {
        "id": string,
        "opening_time": string,
        "closed_time": string,
        "created_at": string,
        "updated_at": string
    }[],
    "created_at": string,
    "updated_at": string

}
export interface BranchInterface {

    "id": string,
    "name": string,
    "main_branch": string,
    "type": string,
    "phone": number,
    "latitude": string,
    "longitude": string,
    "work_time": string,
    "show_in_footer": string,
    "pick_up": string,
    "days": DayInterface[],
    "address": string,
    "street": string,
    "city": string,
    "area": string,
    "state": string,
    "country": string,
    "building": string,
    "landmark": string,
    "created_at": string,
    "updated_at": string

}

export const initialbranchInterface = () => {
    return {

        "id": "",
        "name": "",
        "main_branch": "",
        "type": "",
        "phone": 0,
        "latitude": "",
        "longitude": "",
        "work_time": "",
        "show_in_footer": "",
        "pick_up": "",
        "days": [],
        "address": "",
        "street": "",
        "city": "",
        "area": "",
        "state": "",
        "country": "",
        "building": "",
        "landmark": "",
        "created_at": "",
        "updated_at": ""
    }
}