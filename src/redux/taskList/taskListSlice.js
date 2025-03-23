import { createSlice } from "@reduxjs/toolkit";
export const taskListSlice = createSlice({
    name:'taskList',
    initialState: [],
    reducers:{
        addTask: (state,action)=>{
            const {title, description}= action.payload;
            state.push({id:Date.now(),title,description,isCompleted:false})
        },
        removeTask:(state,action)=>{
            return state.filter(task=>task.id!==action.payload)
        },
        toggleComplete:(state,action)=>{
            const task=state.find((task)=>task.id==action.payload);
            if(task){
                task.isCompleted=!task.isCompleted;
            }
        }
    }

})
export const {addTask,removeTask,toggleComplete}=taskListSlice.actions;
export default taskListSlice.reducer;