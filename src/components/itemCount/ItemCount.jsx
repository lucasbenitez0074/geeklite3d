import { useState } from "react";

const ItemCount = ( {initial,stock,onAdd} ) => {

    const [count,setCount] = useState(initial)

    const incremento = ()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const decremento = ()=>{
        if(count > 1){
            setCount(count - 1)
        }
    }

    return (
    <>
    
    <button onClick={incremento}>+</button>
    <p> {count} </p>
    <button onClick={decremento}>-</button>
    <button onClick={()=>{onAdd(count)}}>Agregar al carrito</button>
    
    </>
    )
}

export default ItemCount;