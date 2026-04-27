import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {

const cartItems = useSelector(getCartItems);
const totalPrice = useSelector(getTotalPrice)

    return (<div>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/> )}
        <h3>TOTAL: ${totalPrice}</h3>

    </div>)
}

export default Cart;