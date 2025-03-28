
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from '../cartSlice';
import { useDispatch } from 'react-redux';

const ProductDisplay=()=>{
    const {id} = useParams();
    const [Product, setProduct]= useState({});
    const dispatch= useDispatch();
    const loadData=async()=>{
        let api=`http://localhost:3000/product/${id}`;
        const response= await axios.get(api);
        console.log(response.data);
        setProduct(response.data);
    }
    useEffect(()=>{
        loadData();
    }, []);



    return(
        <>
          <h1> Our Product :</h1>

          <div id="prodata" style={{width:"70%"}}>
             <div id="proimage"> 
                <img src={Product.image}  width="200" height="300"/>
             </div>
             <div id="prodetail"> 
                <h3>Product name : {Product.name}</h3> 
                <h5 style={{color:"green"}}> This product for : {Product.category}</h5>
                <h3 style={{color:"navy"}}> Price : {Product.price}</h3>
                <Button variant="primary" 
        onClick={()=>{dispatch(addtoCart({id:Product.id, name:Product.name, category:Product.category, price:Product.price, image:Product.image, qnty:1}))}} >Add To Cart</Button>
             </div>
          </div>

        </>
    )
}

export default ProductDisplay;