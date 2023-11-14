import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Greeting from "./components/Greeting/Greeting";
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import Inicio from "./components/inicio/Inicio";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import {
  faHouseChimney,
  faGift,
  faUsers,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const enlaces = [
    [faHouseChimney, "Inicio"],
    [faGift, "Productos"],
    [faUsers, "Nosotros"],
    [faEnvelope, "Contacto"],
  ];
  const greeting = "GEEKLITE 3D";

  return (
    <BrowserRouter>
      <div className="appContainer">
        <Navbar links={enlaces} />
        <Routes>
          <Route path="/" element={<Greeting titulo={greeting} />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Productos" element={<ItemListContainer />} />
          <Route path="/Productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
