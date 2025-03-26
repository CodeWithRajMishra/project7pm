import { FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const TopHeader=()=>{
  const Product= useSelector(state=>state.mycart.cart);
  console.log(Product);
  const proLength= Product.length;
  const navigate= useNavigate();
    return(
        <>
          <div id="headerdata">
            <a href="#" onClick={()=>{navigate("/cartdata")}}>
          <FaShoppingCart />
          </a>
          {proLength}
          <RiAdminFill />

          </div>
        </>
    )
}

export default TopHeader;