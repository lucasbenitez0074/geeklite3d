import Item from "../item/Item";
import "./itemList.css"

const ItemList = ( {productos} ) => {
  return (
    <div className="productosLista">
        {   productos.map((element)=>{
            return (<Item key={element.id} card={element}/>)
            }) 
        }
    </div>
    
  )
}

export default ItemList;