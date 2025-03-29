

import { createSlice } from "@reduxjs/toolkit";
const cartSlice= createSlice({
    
     name:"mycart",
      initialState:{
        cart:[]
      },
      reducers:{
        addtoCart:(state, actions)=>{
            const mydata= state.cart.filter(key=>key.id==actions.payload.id);

            if (mydata.length>=1)
            {
                alert("Product Aleready Added!")
            }
            else 
            {
                state.cart.push(actions.payload);
                alert("Product succesfully added!!!")

            }
            
        },

        qntyIncrese:(state, actions)=>{
          for (var i=0; i<state.cart.length; i++)
          {
             if (state.cart[i].id==actions.payload.id)
             {
              state.cart[i].qnty++;
             }
          }
      
        },

        qntyDecrease:(state, actions)=>{
          for (var i=0; i<state.cart.length; i++)
          {
             if (state.cart[i].id==actions.payload.id)
             {
                if (state.cart[i].qnty<=1)
                {
                   alert("Quantity not Less than One!")
                }
                else
                {
                  state.cart[i].qnty--;
                }
             
             }
          }
      
        },

        dataRemove:(state, actions)=>{
        state.cart= state.cart.filter(item=>item.id!=actions.payload.id)
        }
      }
    })

    export const {addtoCart, qntyIncrese, qntyDecrease, dataRemove} = cartSlice.actions;
    export default cartSlice.reducer;