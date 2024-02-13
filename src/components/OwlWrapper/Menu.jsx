import { dataMenu } from "./DataMenu.js"

export default function Menu(){
    return (dataMenu.map(item =>(
        <div class="col-md-4 col-sm-4 col-xs-6">
            <div class="accomd-modations-room">
                <div class="img">
                    <a href={item.imgHref}>
                        <img src={item.img} alt={item.text} />
                     </a>
                </div>
                <div class="text">
                    <h2><a href={item.textHref}>{item.text}</a></h2>
                    <p class="price">
                        <span class="amout">{item.price}</span>/сутки
                    </p>
                </div>
            </div>
        </div>
    )))
}