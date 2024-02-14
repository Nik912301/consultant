import './OwlWrapper/OwlWrapper.jsx'
import OwlWrapper from './OwlWrapper/OwlWrapper.jsx'

export default function SectionAccomd(){
    return (
<section class="section-accomd">
    <div class="container">

        <div class="row">
            <div class="col-md-12">
                <div class="accomd-modations-header">
                    <h2 class="heading">Отдых и лечение в клинике Dr. Franklin Panchakarma в Керале</h2>
                    <img src="/assets/templates/site/images/icon-accmod.png" alt="icon" />
                    <p>Отдых и оздоровление в клинике подразумевает комфортное размещение и комплексные аюрведические программы</p>
                    <br/>
                </div>
            </div>
        </div>

        <div class="restaurant-tabs">
            <div class="tabs-new tabs-new-style simple_tabs simple_tabs_horizontal" id="simple_tabs-1">
                <ul class="tabs_buttons">
                    <li class="tab_button_wrapper active"><a href="#simple_tabs-1-tab-1" class="tab_button">Аюрведические номера</a></li>
                    <li class="tab_button_wrapper"><a href="#simple_tabs-1-tab-2" class="tab_button">Аюрведические программы</a></li>
                </ul>
                <div class="tabs_contents">

                    <OwlWrapper />
                    
                </div>
            </div>
        </div>
    </div>
</section>
    )
}