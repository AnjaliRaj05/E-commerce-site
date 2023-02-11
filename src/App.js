
import './App.css';

import Navbar from './Component/NavSection/Navbar';
import Home from './Component/HomeSection/Home';
import Products from './Component/ProductSection/Products';
import Footer from './Component/FooterSection/Footer';

// import {Switch,Route} from'react-router-dom';



function App() {
  return (
    <>
   

<Navbar/>
{/* <Switch>
<Route exact path="/" Component={Home} />
<Route exact path="/products" Component={Products} /> */}


<Home/>
<Products/>
<Footer/>
{/* </Switch>   */}
   
    </>
  );
}

export default App;
