import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/clothesSlice";



const Filter = ({searchTerm}) => {

 const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

    return(<div >
       <p onClick = {() => {dispatch(filterCategory(searchTerm))}} className='change '>{searchTerm}</p>
    </div>)
}

export default Filter;