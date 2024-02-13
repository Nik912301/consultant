import Button from './Button/Button';
import { useState } from 'react';
import { differences } from '../data';


export default function DifferencesSection(){


    const [contentType,setContentType] = useState(null)

    function handleClick(type){
      console.log('button',type)
      setContentType(type)
    }
  

    return (
        <section>
          <h3>asdasd</h3>
          <Button isActive={contentType === 'pisya'} onClick={() => handleClick('pisya')}>Pisya</Button>
          <Button isActive={contentType === 'jopa'} onClick={() => handleClick('jopa')}>Jopa</Button>
          <Button isActive={contentType === 'penis'} onClick={() => handleClick('penis')}>Penis</Button>

          {contentType ? (<p>{differences[contentType]}</p>) : (<p>Click Button</p>)}
        </section>
    )
}