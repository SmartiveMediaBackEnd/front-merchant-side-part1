import { RefObject } from "react"


export interface CampaignActivityInterface {
    name: string,
    status: string,
    sales: string,
    expenses: string,
    netProfit: string,
    sessions: number,
    id:string,
}

export interface CampaignDataInterface {
    id: string
    name: string,
    status: string,
    sales: string,
    expenses: string,
    netProfit: string,
    activities: CampaignActivityInterface[]
}
export interface CampaignTableInterface {

    sortBy: string
    ref: RefObject<HTMLElement | undefined>
}