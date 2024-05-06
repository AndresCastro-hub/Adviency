import { Input } from "@/components/ui/input"
import { Button } from "./button";
import { useEffect, useState } from "react";
import { GiftState } from "../interfaces/types";

const AddGift = ({setGift, gift}: GiftState) => {

    const [inputValue, setInputValue] = useState<string>('');
    const [urlImage, setUrlImage] = useState<string>('');
    const [cantValue, setCantValue]= useState<number>(1);
    const [errorMessage, setErrorMessage] = useState<boolean>(false)

    const handleAddGift = () => {
        const id = Math.random().toString(36).substr(2, 9);
        setGift([...gift, { id, value: inputValue, cantValue, url:urlImage }]);
        setInputValue('');
        setUrlImage('');
        setCantValue(1);
        setErrorMessage(false);
    }

    useEffect(() => {
        const existingGift = gift.find(g => g.value === inputValue);
        if(existingGift){
            setErrorMessage(true)
        }else{
            setErrorMessage(false)
        }
    },[inputValue])
   
    const habilitarAgregar = inputValue !== '';

    return(
        <>
            <div className="flex max-w-sm items-center justify-center space-x-2 mt-4">

                <Input 
                    type="text" 
                    value={inputValue}
                    placeholder="Regalo" 
                    onChange={(event) => setInputValue(event.target.value)}
                />

                <Input 
                    type="text" 
                    value={urlImage}
                    placeholder="Url" 
                    onChange={(event) => setUrlImage(event.target.value)}
                />

                <Input className="w-12" type="number" onChange={(event) => setCantValue(Number(event.target.value))} value={cantValue} />

                <Button 
                    className="bg-red-700 hover:bg-red" 
                    type="submit"
                    disabled={!habilitarAgregar}
                    onClick={handleAddGift}
                    >Agregar
                </Button>
            </div>   

            <div className="mt-1 pl-1">   
                {errorMessage && <p className="text-red-500 mt-1 ">¡Este regalo ya está en la lista!</p>}
            </div>
        </>
            
    )
}
export default AddGift;