"use client"
import { useEffect } from "react";
import { GiftState } from "../interfaces/types";
import { Button } from "./button";

const ListGift = ({gift, setGift} : GiftState) => {

    const handleDeleteGift = (id: string) => {
        const removeGift = gift.filter( gift => gift.id !== id)
        setGift(removeGift)
    } 

    console.log(gift)

    return(
        <div className='flex flex-col gap-2 mt-4 p-1'>
        { gift.length > 0 ? (
            gift.map(gift => (
                <div className="flex items-center justify-between " key={gift.id}>
                    <div className='flex items-center'>
                        <img src={gift.url} alt={gift.value} className="w-15 h-10" />
                        <p className="font-bold">{gift.value} x{gift.cantValue}</p>
                    </div>
                        <Button onClick={() => handleDeleteGift(gift.id)} className=" año bg-red-700 hover:bg-red p-3 h-3">X</Button>
                </div>
            ))
        ) : (
            <p className="text-gray-400 text-center">No hay regalos grinch! Agregá algo!</p>
        )}
    </div>
    )
}
export default ListGift;