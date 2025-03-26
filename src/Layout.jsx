import { Outlet } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";

const Layout=()=>{
    return(
        <>
          <TopHeader />
          <TopMenu/>
          <Outlet/>
          <Footer/>

          
        </>
    )
}

export default Layout;