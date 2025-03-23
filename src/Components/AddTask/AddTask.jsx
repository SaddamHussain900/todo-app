import React from 'react'
import './AddTask.scss'
import { CiCirclePlus } from "react-icons/ci";
import { useSelector,useDispatch } from 'react-redux';
import { Add } from '../../redux/taskList/isAdd';
import Card from '../Card/Card';
const AddTask = () => {
  const dispatch=useDispatch();
  const isAdd=useSelector((state)=>state.isAdd)
  
  return (
    
    <div className='main-container'>
       {isAdd && <Card/>}
          <div onClick={()=>dispatch(Add())} className="add-task-button">
          
            <button ><CiCirclePlus /></button>
            <>Add task</>
        </div>
        
    </div>
  )
}

export default AddTask