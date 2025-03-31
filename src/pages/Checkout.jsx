import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { removeCart } from '../cartSlice';
const Checkout=()=>{
  const [input, setInput] = useState({});
  const Product= useSelector(state=>state.mycart.cart);
 const navigate= useNavigate();
  const dispatch= useDispatch();
  let proDetail="";
 let totalPrice=0;
  Product.map((key)=>{
      proDetail+=`Product Name : ${key.name}, Qnty: ${key.qnty} <br> `;
      totalPrice+=key.price*key.qnty;
  })


  const handleInput=(e)=>{
     let name=e.target.name; 
     let value=e.target.value;
     setInput(values=>({...values, [name]:value}));
     console.log(input);
  }

  const handleSubmit=async(e)=>{
          e.preventDefault();
          let api="http://localhost:3000/orders";
          const response = await axios.post(api, {products:proDetail, totalamount:totalPrice, ...input} );
          dispatch(removeCart())
          navigate("/ordercomplete");

         
   
          }

  return(
        <>
          <h1> Checkout Page</h1>  
          <Form style={{width:"300px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Shipping Addresse</Form.Label>
        <Form.Control type="text" name="address" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact no.</Form.Label>
        <Form.Control type="text" name="contactno" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="text" name="email" onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Checkout;