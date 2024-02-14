import { menuItems } from "./DataItem";

export default function HeaderMenu(){

    return (
        <nav class="header_menu">
            <ul>
                {menuItems.map(item => (
                    <li key={item.title} className="menu-item-one">
                        <a href={item.href}>{item.title}</a>
                
                        {item.ul?(
                            <ul className="nav-bar">
                                {item.ul.map(itemUl =>
                                    <l1 className="menu-item-two" key={itemUl.title}>
                                        <a href={itemUl.href}>{itemUl.title}</a>
                                    </l1>)}
                            </ul>):null}
                    </li>
                ))}
            </ul>
        </nav>
    )
}