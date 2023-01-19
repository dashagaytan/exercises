import React from "react"

export default function FaveColor(){
    const [color, setColor] = React.useState("pink");
    
    return(
        <div>
            <h1>Favorite Color {color}</h1>
            <button type="button" onClick={()=> setColor("blue")}>Click</button>
        </div>
    )
}

