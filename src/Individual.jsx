import { dataOrder } from "./dataOrder";
import './App';
import { useState } from "react";


function Individual() {

const [picture, setPicture] = useState(0);
const {id, nameOrder, image} = dataOrder[picture];

const previousPicture = () => {
    setPicture((picture => {
        picture --;
        if (picture < 0) {
            return dataOrder.length-1;
        }
        return picture;
    }))
}

const nextPicture = () => {
    setPicture((picture => {
        picture ++;
        if(picture>dataOrder.length-1) {
            picture=0;
        }
        return picture;
    }))
}

    return (<div>
        <p className="order textOrder"><strong>We are always happy to provide our customers with the option of individual ordering. Please contact our consultant at +386221833363.</strong></p>
        <div className="order size">
            <img src={image}  alt="pic"/>
        </div>
        <div className="order">
            <h4>{id}-{nameOrder}</h4>
        </div>
<div className="order click">
    <button className="button" onClick={previousPicture}>Previous</button>
    <button className="button" onClick={nextPicture}>Next</button>
</div>
    </div>);
    }
    
    export default Individual;