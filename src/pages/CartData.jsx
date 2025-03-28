import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaRupeeSign } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { qntyIncrese, qntyDecrease, dataRemove } from "../cartSlice";
const CartData=()=>{
    const proData= useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();
    let sno=0;

    let netAmount=0;
    const ans=proData.map((key)=>{
       netAmount+=key.price*key.qnty
       sno++;
       return(
        <>
          <tr>
            <td>{sno}</td>
            <td> <img src={key.image} width="100" height="100"/></td>
            <td>{key.name}</td>
            <td>{key.category}</td>
            <td>{key.price} </td>
            <td style={{fontSize:"20px"}}> 
              
            <a href="#" onClick={()=>{dispatch(qntyDecrease({id:key.id}))}}>
            <FaMinusCircle />
            </a>
            


              {key.qnty} 
              <a href="#" 
              onClick={()=>{dispatch(qntyIncrese({id:key.id}))}}>
              <FaPlusCircle />
              </a>
             

            </td>
            <td> {key.price * key.qnty} </td>
            <td> 
              <button onClick={()=>{dispatch(dataRemove({id:key.id}))}}>Remove</button>
            </td>
          </tr>
        </>
       )
   })

    return(
        <>
          <h1> My Cart</h1>
           <h2 align="center"><FaRupeeSign /> {netAmount}</h2>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Product Name</th>
          <th>Category</th>
          <th> Price</th>
          <th>Quantity</th>
          <th>Total Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       {ans}
        </tbody>
        </Table>
        </>
    )
}

export default CartData;