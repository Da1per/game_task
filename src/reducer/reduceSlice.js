import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:''
    
}
const reduceSlice = createSlice ({
    persName: 'data',
    initialState,
    reducers:{
        toInicel(state,action){
            const setName = action.payload
            state.name = setName
        }
     
    }
})
export const {
    toInicel
  } = reduceSlice.actions
export default reduceSlice.reducer