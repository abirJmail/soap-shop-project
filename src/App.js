
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Boutique from './Components/Boutique/Boutique';
import Contact from './Components/Contact/Contact';
import Account from './Components/Account/Account';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
function App() {
  return (
    <div className="App">

<Router>
<Header/>
<Routes>

          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Boutique" element={<Boutique />}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/Account" element={<Account/>}/>
          <Route exact path="/Panier" element={<ShoppingCart/>}/>
        </Routes>
        <Footer/>
        </Router>

    </div>
  );
}

export default App;
