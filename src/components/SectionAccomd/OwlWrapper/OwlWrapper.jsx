import './OwlWrapper.css';
import { dataMenu1 } from "./DataMenu.js";
import { dataMenu2 } from "./DataMenu.js"

export default function OwlWrapper(){

    function createContent(item){
        return(
            <div className="restaurant_content tab_content active" id="simple_tabs-1-tab-1">
                <a href={item.imgHref}>
                    <img src={item.img} alt={item.text} />
                 </a>
                <div class="text">
                    <h2><a href={item.textHref}>{item.text}</a></h2>
                    <p className="price">
                        <span className="amout">{item.price}</span>{item.forHow}
                    </p>
                </div>
                <div class="owl-controls clickable">
                    <span className=""></span>
                    <i className="lotus-icon-left-arrow"></i>
                    <i className="lotus-icon-right-arrow"></i>
                </div>
                <a href="nomera-v-panchakarma-institute-dr.-franklin.html" className="awe-btn awe-btn-default">Все номера</a>
            </div>
        )
    }
    return (
        <>
            {dataMenu1.map(item =>(createContent(item)))}
            {dataMenu2.map(item =>(createContent(item)))}
        </>
    )
}