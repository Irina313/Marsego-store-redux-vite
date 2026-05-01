import { useDispatch } from "react-redux";
import { data } from "../../data";
import { removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({cartItem}) => {

const dispatch = useDispatch();    
    
const clothes = data.find(item => item.id === cartItem.itemId)
console.log(clothes)

    return (<div>
     <img src={clothes.image} width="90px"/>
    <h4>{clothes.nameClothes}</h4>
    <p>{cartItem.quantity} item(s)</p>
    <p>Price: ${clothes.price*cartItem.quantity}</p>
    <span onClick = { () => dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
    <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
    </span>
    </div>)
}

export default CartItem;