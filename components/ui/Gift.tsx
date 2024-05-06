"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import ListGift from "./ListGift"
import AddGift from "./AddGift"
import { Gift } from "../interfaces/types"

const GiftList = () => {
    const [gift, setGift] = useState<Gift[]>([]);
    const habilitarDelete = gift.length > 0;

    //Falta aplicar localeStorage

    return (
        <>
            <AddGift gift={gift} setGift={setGift}/>
                   
            <ListGift  gift={gift} setGift={setGift} />

            <Button disabled={!habilitarDelete} onClick={() => setGift([])} className="block text-white bg-red-700 hover:bg-red-600 w-full mt-4">Borrar todo</Button>
        </>
    )
}
export default GiftList;