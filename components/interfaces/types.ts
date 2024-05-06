export interface GiftState {
    setGift: (param: any) => void;
    gift: { id:string , value: string, cantValue:number, url:string }[]
}

export interface Gift  {
    id: string,
    value: string,
    cantValue:number
    url: string
}