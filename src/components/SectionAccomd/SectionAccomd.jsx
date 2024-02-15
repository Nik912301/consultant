import './OwlWrapper/OwlWrapper.jsx';
import Button from './OwlWrapper/Button/Button.jsx';
import { useState } from 'react';
import { buttons } from './OwlWrapper/DataMenu.js';

export default function SectionAccomd(){
    
    const [contentType,setContentType] = useState(null)

    function handleClick(type){
      console.log('button',type)
      setContentType(type)
    }

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
                    <Button isActive={contentType === 'but1'} onClick={() => handleClick('but1')}>Аюрведические номера</Button>
                    <Button isActive={contentType === 'but2'} onClick={() => handleClick('but2')}>Аюрведические программы</Button>
                    {contentType ? (<>{buttons[contentType]}</>) : (<>{buttons['but1']}</>)}
                </div>
            </div>
        </section>
    )
}