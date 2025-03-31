import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CartData from "./pages/CartData";
import ProductDisplay from "./pages/ProductDisplay";
import MensProduct from "./pages/MensProduct";
import WoMensProduct from "./pages/WoMensProduct";
import KidsProduct from "./pages/KidsProduct";
import ProductSearch from "./pages/ProductSearch";
import Checkout from "./pages/Checkout";
import OrderComplete from "./pages/OrderComplete";


const App=()=>{

  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>}/>
            <Route path="cartdata" element={<CartData/>}/>
            <Route path="productdisplay/:id" element={<ProductDisplay/>}/>
            <Route path="mens" element={<MensProduct/>} />
            <Route path="womens" element={<WoMensProduct/>}/>
            <Route path="kids" element={<KidsProduct/>}/>
            <Route path="search" element={<ProductSearch/>}/>
            <Route path="checkout" element={<Checkout/>}/> 
            <Route path="ordercomplete" element={<OrderComplete/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;