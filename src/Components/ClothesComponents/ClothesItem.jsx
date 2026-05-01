import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import Size from "../Cart/Size";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";


const ClothesItem = ({item}) => {

const [quantity, setQuantity] = useState(0);
const dispatch = useDispatch();
const [selected, setSelected] = useState(false);
const [selectedM, setSelectedM] = useState(false);
const [selectedL, setSelectedL] = useState(false);



    return (<div className="product-card">
        <img src={item.image}  width="350px" height="480px" alt="clothes"/>
        <div className="product-info">
        <h3>{item.nameClothes}</h3>
        <h4>$ {item.price}</h4>
        <Size selected={selected} setSelected={setSelected} selectedM={selectedM} setSelectedM={setSelectedM} selectedL={selectedL} setSelectedL={setSelectedL}/>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="AddToCart" onClick={() =>{dispatch(addItemToCart({item, quantity}))}}>Add to cart</button>
        </div>
    </div>)  
}

export default ClothesItem;