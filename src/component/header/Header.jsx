import { useState } from "react"

export default function Header() {
    const [now,setNow] = useState(new Date())

    setInterval(()=>setNow(new Date(),1000))

    return (
        <h1> 
            Время на данный момент {now.toLocaleTimeString()}
        </h1>
    )
}