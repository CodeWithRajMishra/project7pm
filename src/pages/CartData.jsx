import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';

const CartData=()=>{
    const proData= useSelector(state=>state.mycart.cart);
    let sno=0;
   const ans=proData.map((key)=>{
       sno++;
       return(
        <>
          <tr>
            <td>{sno}</td>
            <td> <img src={key.image} width="100" height="100"/></td>
            <td>{key.name}</td>
            <td>{key.category}</td>
            <td>{key.price} </td>
          </tr>
        </>
       )
   })

    return(
        <>
          <h1> My Cart</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Product Name</th>
          <th>Category</th>
          <th> Price</th>
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