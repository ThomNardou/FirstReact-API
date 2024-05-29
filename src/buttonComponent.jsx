import { useState } from "react"
export default function SquareComponent() {

    const [value, setValue] = useState(null);

    function handleClick() {
        
    }

    return (
        <>
            <button className="square" onClick={() => setValue(value => 'X')}>{value}</button>
        </>
    )
}