
import WayToTeach from "./WayToTeach"
import {ways} from "../data"

export default function MainSection(){
    return(
        <section>
          <h3>PIPIDASTER</h3>
          <ul>Сколько раз
            {ways.map(way =>( <WayToTeach key={way.title} {...way}/>))}
          </ul>
        </section>
    )
}