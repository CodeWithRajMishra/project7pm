import { Spin } from 'antd';
import { useState } from 'react';

const OrderComplete=()=>{
 const [isLoading, setIsLoading] = useState(true);

    setTimeout(()=>{
        setIsLoading(false);
    }, 3000);

    return(
        <>
       

        {isLoading?(<>
            <div style={{width:"100px", margin:"auto", height:"300px", paddingTop:"100px"}}>
        
        <Spin />

       
        </div>    
        </>):(<>
            <h1 align="center"> Your Order Successfully Placed</h1>
        </>)}
       
         
        </>
    )
}

export default OrderComplete;