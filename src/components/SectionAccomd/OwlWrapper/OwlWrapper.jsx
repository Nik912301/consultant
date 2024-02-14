import './OwlWrapper.css';
import { dataMenu1 } from "./DataMenu.js";
import { dataMenu2 } from "./DataMenu.js"

export default function OwlWrapper(){

    function createContent(item){
        return(
            <div class="restaurant_content tab_content active" id="simple_tabs-1-tab-1">
                <div class="row">
                    <div class="accomd-modations-content owl-single owl-carousel owl-theme" >
                        <div class="owl-wrapper-outer">
                            <div class="owl-wrapper">
                                <div class="owl-item">
                                    <div class="row">
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
                                                        <span class="amout">{item.price}</span>{item.forHow}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="owl-controls clickable">
                            <div class="owl-pagination">
                                <div class="owl-page active">
                                    <span class=""></span>
                                </div>
                            </div>
                            <div class="owl-buttons">
                                <div class="owl-prev">
                                    <i class="lotus-icon-left-arrow"></i>
                                </div>
                                <div class="owl-next">
                                    <i class="lotus-icon-right-arrow"></i>
                                </div>
                            </div>
                        </div>
                    </div>
		    	    <div class="mt-30 text-center">
                        <a href="nomera-v-panchakarma-institute-dr.-franklin.html" class="awe-btn awe-btn-default">Все номера</a>
            		</div>
                </div>
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