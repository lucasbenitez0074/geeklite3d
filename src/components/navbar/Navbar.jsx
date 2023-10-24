import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartWidget from '../cartWidget/CartWidget';
import './navbar.css';

const Navbar =({ links })=> {


    return (
    <>
        <nav className='mainNavbar'>
            <div className='logo'>LOGO</div>
            <CartWidget/>            
            <ul>
                {links.map((element, index) => (
                    <li key={index}>
                        <div className='listItemIcon'>
                        <FontAwesomeIcon icon={element[0]} />
                        </div>
                        <a href=''>{element[1]}</a>
                    </li>
                ))}
            </ul>
            <div className='footer'>
                <p className='direccionLegal'>Legal - derechos</p>
                <p className='direccionLegal'>políticas de compras</p>
                <p className='direccionLegal'>Brandsen 805, C1161 CABA</p>
                <p className='direccionLegal'>0800 354 8874</p>
            </div>
        </nav>
    </>
    );
}
export default Navbar