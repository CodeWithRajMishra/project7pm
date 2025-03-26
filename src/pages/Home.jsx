import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.jpg";
import ban2 from "../images/ban2.png";
import ban3 from "../images/ban3.avif";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from '../cartSlice';
import { useDispatch } from 'react-redux';


const Home=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();

const loadData=async()=>{
  let api="http://localhost:3000/product";
  const response= await axios.get(api);
  console.log(response.data);
  setMydata(response.data);
}

useEffect(()=>{
  loadData();
}, []);

const ans=mydata.map((key)=>{
    return(
      <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          This Product for {key.category}
          <h3> Price : {key.price}</h3>
        </Card.Text>
        <Button variant="primary" 
        onClick={()=>{dispatch(addtoCart({id:key.id, name:key.name, category:key.category, price:key.price, image:key.image}))}} >Add To Cart</Button>
      </Card.Body>
    </Card>
      </>
    )
})




    return(
        <>
        <Carousel>
      <Carousel.Item>
          <img src={ban1}  width="100%" height="300" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban2}  width="100%" height="300" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban3}  width="100%" height="300" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
       <h1> Our Premium Products</h1>
      
      <div id="prodata">
      {ans}
      </div>
       


        </>
    )
}

export default Home;