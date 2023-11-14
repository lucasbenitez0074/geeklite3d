import { useState,useEffect } from "react"
import ItemList from "../itemList/ItemList";
import Categorias from "../categorias/Categorias";
import "./itemListContainer.css"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const {categoryId} = useParams()
    const [prod,setProd] = useState([]);
    
    useEffect(()=>{
        const fetchData = ()=>{
            fetch("/itemsProd.js")
            .then((response)=> response.json())
            .then((dataResponse)=> {
                if(categoryId) {
                    const filterProd = dataResponse.filter(p=>p.categoria == categoryId)
                    setProd(filterProd)
                } else {
                    setProd(dataResponse)
                }
            })
            .catch((err)=> alert("sucedio un error"))
        }
        fetchData();
    },[categoryId])

    return (
        <div className="listContainer">

            <div className="categoriasNav">
                <Categorias/>
            </div>
            
            {prod.length === 0 ? <p>Cargando...</p> : <ItemList productos={prod} />}
            
        </div>
        );
}
export default ItemListContainer;