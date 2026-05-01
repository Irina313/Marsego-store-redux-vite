import Filter from "./Filter";

const AllCategories = () => {
    return (<div className='cont'>
        {['All','Blazer','Pants','Top','Dress','Skirt','Jacket','Shirt','Leggins'].map(searchTerm => <Filter searchTerm={searchTerm} key={searchTerm}/>)}
       
    </div>)
}

export default AllCategories;