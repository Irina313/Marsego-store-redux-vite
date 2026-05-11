import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import Size from "../Cart/Size";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";


const ClothesItem = ({item}) => {

const [quantity, setQuantity] = useState(0);
const [selectedSize, setSelectedSize] = useState(null);

const dispatch = useDispatch();


    return (<div className="product-card">
        <img src={item.image}  width="350px" height="480px" alt="clothes"/>

    <div className="product-info">
        <h3>{item.nameClothes}</h3>
        <h4>$ {item.price}</h4>

        <Size value={selectedSize} onChange={setSelectedSize}/>

        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

        <button 
            className="AddToCart"
            onClick={() =>
            dispatch(addItemToCart({...item, size: selectedSize, quantity }))
            }
            >
                Add to cart
            </button>
        </div>
    </div>
    );  
};

export default ClothesItem;