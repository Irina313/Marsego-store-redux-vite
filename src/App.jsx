import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Individual from './Individual';
import LoaderPage from './Loader/LoaderPage';
import Cart from './Components/Cart/Cart';


const ShopLazy=React.lazy(() => import('./Shop'));

function App() {


return (
 <Router>
       
<nav>

<Link to="/" className="link">Home</Link>
<Link to="/shop" className="link">Shop</Link>
<Link to="/contact" className="link">Contact  Us</Link>
<Link to="/individual" className="link">Individual order</Link>
<Link to="/about" className="link">About Us</Link>
<Link to="/cart"><img className="cartIcon" src="https://img.icons8.com/?size=100&id=21823&format=png&color=000000"/></Link>
</nav>

<Suspense fallback={<LoaderPage/>}>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/shop" element={<ShopLazy/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/individual" element={<Individual/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/cart" element={<Cart/>} />
</Routes>
</Suspense>

</Router>
  );
}

export default App;
