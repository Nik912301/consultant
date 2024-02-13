import './OwlWrapper.css';
import Menu from './Menu.jsx';

export default function OwlWrapper(){
    return(
        <div className="owl-wrapper" >
            <div className="owl-item">
                <div class="row">
                    <Menu />
               </div>
            </div>
        </div>
    )
}