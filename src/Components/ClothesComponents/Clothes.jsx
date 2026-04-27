import { useSelector } from "react-redux";
import { data } from "../../data";
import ClothesItem from "./ClothesItem";
import { getSelectedCategory } from "../../redux/clothesSlice";


const Clothes = () => {

 const selectedCategory = useSelector(getSelectedCategory);

    return (<div className="products">

{data
.filter(item => {
    if (selectedCategory === 'All') return true;
    return selectedCategory === item.searchTerm;
})
.map(item => <ClothesItem item={item} key={item.id}/>)}

    </div>)
}

export default Clothes;