import "./itemDetail.css"
import ItemCount from "../itemCount/ItemCount"



const ItemDetail = ( {producto} ) => {

  const onAdd = (quantity)=>{
    alert(`Estas agregando ${quantity} al carrito `)
  }

  return (
    <div className="cardDetail">
        <img src={producto.imagen} alt="" />
        <h3> {producto.nombre} </h3>
        <p> detalle: {producto.detalle} </p>
        <p> precio: ${producto.precio} </p>
        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail