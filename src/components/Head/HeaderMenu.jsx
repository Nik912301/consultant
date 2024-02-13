import { menuItems } from "./DataItem"

export default function HeaderMenu(){
    return (
        <ul>
            {menuItems.map(item => (
                <li key={menuItems.title} >
                        <a href={item.href}>{item.title}</a>
                </li>
            ))}
        </ul>
    )
}