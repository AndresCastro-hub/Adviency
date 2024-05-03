"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface Gift  {
    id: string,
    value: string
}

const GiftList = () => {
    const [gift, setGift] = useState<Gift[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleAddGift = () => {
        const id = Math.random().toString(36).substr(2, 9);

        setGift([...gift,{id, value: inputValue}]);
        setInputValue('');
    }

    const handleDeleteGift = (id: string) => {
        const removeGift = gift.filter( gift => gift.id !== id)
        setGift(removeGift)
    }   

    console.log(inputValue)

    return (
        <>
            <div className="flex max-w-sm items-center justify-center space-x-2 mt-4">
                <Input 
                    type="text" 
                    value={inputValue}
                    placeholder="Regalo" 
                    onChange={(event) => setInputValue(event.target.value)}
                    />
                <Button 
                    className="bg-red-700 hover:bg-red" 
                    type="submit"
                    disabled={!(inputValue != '')}
                    onClick={handleAddGift}
                    >Agregar
                </Button>
            </div>

            <div className='flex flex-col gap-1 mt-4'>
                {
                gift.map((gift) => <div className="flex items-center justify-between" key={gift.id}>

                    <p>{gift.value}</p>
                    <Button onClick={() => handleDeleteGift(gift.id)}  className="bg-red-700 hover:bg-red p-3 h-3">X</Button>

                </div>
                )}
            </div>
        </>
    )
}
export default GiftList;