import React from "react";
import { useState } from "react";

export default function Navbar(){
    const [data,setData] = useState([]);
    const logoUrl = "";
    async function getData()
    {
         const res = await fetch(logoUrl);
         const data = await res.json();
         console.log("data fetch: ", data);
    }
    return(
        <div className="" style={{border:"1px solid red"}}>
            <p>Navbar</p>
        </div>
    )
}