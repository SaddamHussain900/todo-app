import React from 'react'
import AddTask from '../../Components/AddTask/AddTask'
import { toggleComplete } from '../../redux/taskList/taskListSlice'
import { useDispatch,useSelector } from 'react-redux'
const Completed = () => {
  const dispatch=useDispatch();
  const taskList=useSelector((state)=>state.taskList)
  return (
    <div>
      <AddTask/>
      {taskList.map((state)=>{
        return(<div key={state.id}>
        {state.isCompleted && state.title}
        </div>)
      })}
    </div>
  )
}

export default Completed