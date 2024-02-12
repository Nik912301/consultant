import { useState } from "react"


export default function Header(){
    const [now,setNow] = useState(new Date())

    setInterval(()=>setNow(new Date(),1000))

    return (
        <header>
            <h3>ZV</h3>
            <span>TIME: {now.toLocaleTimeString()}</span>
        </header>
    )
}