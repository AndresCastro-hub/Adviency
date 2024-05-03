"use client"
import { GiftState } from "../interfaces/types";
import { Button } from "./button";

const ListGift = ({gift, setGift} : GiftState) => {

    const handleDeleteGift = (id: string) => {
        const removeGift = gift.filter( gift => gift.id !== id)
        setGift(removeGift)
    } 

    return(
        <div className='flex flex-col gap-2 mt-4 p-1'>
            {
            gift.map((gift) => <div className="flex items-center justify-between" key={gift.id}>

                <p>{gift.value}</p>
                <Button onClick={() => handleDeleteGift(gift.id)}  className="bg-red-700 hover:bg-red p-3 h-3">X</Button>

            </div>
            )}
    </div>
    )
}
export default ListGift;