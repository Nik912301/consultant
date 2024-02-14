import './OwlWrapper/OwlWrapper.jsx'
import OwlWrapper from './OwlWrapper/OwlWrapper.jsx'

export default function SectionAccomd(){
    return (
<section className="section-accomd">
    <div className="container">
        <div className="accomd-modations-header">
            <h2 className="heading">Отдых и лечение в клинике Dr. Franklin Panchakarma в Керале</h2>
            <img src="/assets/templates/site/images/icon-accmod.png" alt="icon" />
            <p>Отдых и оздоровление в клинике подразумевает комфортное размещение и комплексные аюрведические программы</p>
            <br/>
        </div>
        <div className="restaurant-tabs">
            <ul className="tabs_buttons">
                <li className="tab_button_wrapper active">
                    <a href="#tab-1" className="tab_button">Аюрведические номера</a>
                </li>
                <li class="tab_button_wrapper">
                    <a href="#tab-2" className="tab_button">Аюрведические программы</a>
                </li>
            </ul>
            <OwlWrapper />
        </div>
    </div>
</section>
    )
}