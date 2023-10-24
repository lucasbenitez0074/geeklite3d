
import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import {
  faHouseChimney,
  faGift,
  faUsers,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

function App() {
    const enlaces = [[faHouseChimney,"Inicio"],[faGift,"Productos"],[faUsers,"Nosotros"],[faEnvelope,"Contacto"]];
    const greeting = "GEEKLITE 3D";
  return (
    <>
    
    
    <div className='appContainer'>
      <Navbar links={enlaces} />
      <ItemListContainer titulo={greeting} />
    </div>
  
      
    </>
  )
}

export default App
