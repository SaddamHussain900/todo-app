import {configureStore} from '@reduxjs/toolkit'
import taskListReducer from './taskList/taskListSlice'
import isAddReducer from './taskList/isAdd'
export default configureStore({
    reducer:{
        taskList:taskListReducer,
        isAdd:isAddReducer,
    },
})