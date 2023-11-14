import { Link } from "react-router-dom";

const Categorias = () => {
    const categorias = ["League of Legends","Pokemon","Mario Bros","Sakura Card Captor","Genshin Impact","Naruto"];

    return (
    <>
        <ul>
            {categorias.map((element,key)=> (
            <li key={key} className="categoriaFiltro">
                <Link to={`/Productos/${element}`}>
                    {element}
                </Link>
            </li>
            ))}
        </ul>
    </>
    )
}

export default Categorias;