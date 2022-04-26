import './card-list.styles.css'
import Card from "../card/card.component";

const CardList =({monster})=>(
    <div className={'card-list'} key={monster.id}>{
        monster.map(monster=>{
            return(<Card key={monster.id} monster={monster}/>
        )})
    }
    </div>
)

export default CardList;