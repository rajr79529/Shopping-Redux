import Navbar from './Navbar';
import Home from './Home'
import AddProduct from './AddProduct';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
    
      <Routes>
      <Route exact path = "/EcomerceRedux"  element={<Home />}/>
      <Route exact path="ProductDetail/:id" element={<ProductDetail />} />
      <Route exact path="AddProduct" element={<AddProduct />} />
      <Route exact path="Cart" element={<Cart />} />

      </Routes>
      
    </div>
  );
}

export default App;
