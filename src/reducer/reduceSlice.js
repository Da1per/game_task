import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    names:'',
    tasks:[]
    
}
const reduceSlice = createSlice ({
    name: 'data',
    initialState,
    reducers:{
        toInicel(state,action){
            const setName = action.payload
            state.names = setName
        },
        toCreateTask(state,action){
            const setName = action.payload
            state.tasks.push(setName) 
        }
     
    }
})
export const {
    toInicel,
    toCreateTask
  } = reduceSlice.actions
export default reduceSlice.reducer