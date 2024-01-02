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
            state.names = setName[0]
            state.tasks = setName[1]
        },
        toCreateTask(state,action){
            const setName = action.payload
            console.log(setName)
            state.tasks.push(setName) 
            
            localStorage.setItem('tasks',JSON.stringify(state.tasks))
        },
        toDel(state,action){
            const id = action.payload
            state.tasks.splice(id,1)
            localStorage.setItem('tasks',JSON.stringify(state.tasks))
        }}})
export const {
    toInicel,
    toCreateTask,
    toDel
  } = reduceSlice.actions
export default reduceSlice.reducer