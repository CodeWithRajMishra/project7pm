import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CartData from "./pages/CartData";
import ProductDisplay from "./pages/ProductDisplay";
import MensProduct from "./pages/MensProduct";
import WoMensProduct from "./pages/WoMensProduct";
import KidsProduct from "./pages/KidsProduct";


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
            
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;