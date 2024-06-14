import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[

    ]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            state.items.push(action.payload)
            console.log(state.items.push(action.payload));
        }
    }
})

export const {addTocart} = cartSlice.actions

export default cartSlice.reducer