import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CartData from "./pages/CartData";


const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="cartdata" element={<CartData/>}/>
            
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;