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
            localStorage.setItem('tasks',JSON.stringify(state.tasks))
        },
        toDel(state,action){
            const id = action.payload
            state.tasks.splice(id,1)
        }
     
    }
})
export const {
    toInicel,
    toCreateTask,
    toDel
  } = reduceSlice.actions
export default reduceSlice.reducer