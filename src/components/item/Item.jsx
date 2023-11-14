import "./item.css"
import { Link } from "react-router-dom"


const Item = ( {card} ) => {
    return (
        
        <div className="card">
            <div className="imgCard">
                <img src={card.imagen} alt="" />
            </div>
            <h3> {card.nombre} </h3>
            <Link to={`/item/${card.id}`}>
                <button className="btnDetalle"> Comprar </button>
            </Link>
        </div>
        
    )
}
export default Item