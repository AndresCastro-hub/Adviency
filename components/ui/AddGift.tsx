import { Input } from "@/components/ui/input"
import { Button } from "./button";
import { useState } from "react";
import { GiftState } from "../interfaces/types";

const AddGift = ({setGift, gift}: GiftState) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleAddGift = () => {
        const id = Math.random().toString(36).substr(2, 9);
        setGift([...gift,{id, value: inputValue}]);
        setInputValue('');
    }

    const habilitarAgregar = inputValue !== '';

    return(
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
                disabled={!habilitarAgregar}
                onClick={handleAddGift}
                >Agregar
            </Button>
        </div>   
    )
}
export default AddGift;