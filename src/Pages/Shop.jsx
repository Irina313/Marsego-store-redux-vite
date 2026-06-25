import { Accordion } from '../Accordion/Accordion';
import '../App.css';
import Clothes from "../Components/ClothesComponents/Clothes";
import AllCategories from "../Components/Filter/AllCategories";


function Shop() {
    

return (
    <div>
       
    <div className="cont">
    <h1 className="back">MARSEGO</h1>
    </div>
     
    <AllCategories/> 
    <Clothes/> 
    <Accordion/>
    </div>
  );

}

export default Shop;