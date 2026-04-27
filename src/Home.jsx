import { Link } from "react-router-dom";
import Swal from "sweetalert2";


function Store() {

const handleAlert = () => {
    const { value: email } = Swal.fire({
        title: "Get 15% Off Your First Order",
        input: "email",
        inputLabel: "Your email address to receive access to promotions",
        inputPlaceholder: "Enter your email address"
      });
      if (email) {
        Swal.fire(`Entered email: ${email}`);
      }
}
   
    return <div className="main">
     <Link to="/shop"><button className="btn">Looking Collection</button></Link>  
     <button className="discount" onClick={handleAlert}>Get 15% OFF</button>
    </div>
    }
    
    export default Store;