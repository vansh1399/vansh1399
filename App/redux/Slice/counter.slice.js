import { createSlice } from "@reduxjs/toolkit"


const intialstate = {
    count: 0
}

export const counterslice = createSlice({
    name:'counter',
    initialState:intialstate,
    reducers:{
        increment: (state)=>{
            state.count += 1
        },
        decrement: (state)=>{
            state.count -= 1
        }
    }
})

export const {increment,decrement} = counterslice.actions
export default counterslice.reducer