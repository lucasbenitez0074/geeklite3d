import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import "./itemDetailContainer.css"

const ItemDetailContainer = () => {

const [product,setProduct] = useState(null);

const {idProduct} = useParams()

useEffect(()=>{
    const fetchData2 = ()=>{
        fetch("/itemsProd.js")
        .then((response)=> response.json())
        .then((data3)=>{ 
            console.log(data3)
            const foundProduct = data3.find((item)=> item.id == idProduct);
            setProduct(foundProduct);    
        });

    }
    fetchData2();
},[idProduct])


    return (
    <div className="itemDetailContainer">
        {
            product ? <ItemDetail producto={product} /> : <p>No existe el producto</p>
        }
        
    </div>
    )
}

export default ItemDetailContainer;