import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./cartWidget.css"

const CartWidget = () => {
  return (
    <>
        <div className="cartContainer">
          <div className='cartWidget'>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <p className="counterCart">0</p>
        </div>
    </>
  )
}

export default CartWidget;