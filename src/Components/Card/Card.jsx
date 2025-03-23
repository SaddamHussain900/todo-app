import React from 'react'
import { useRef } from 'react'
import './Card.scss'
import { useDispatch,useSelector } from 'react-redux'
import { addTask,removeTask } from '../../redux/taskList/taskListSlice'
import { Add } from '../../redux/taskList/isAdd'
const Card = () => {
    const titleRef=useRef(null);
    const descriptionRef=useRef(null);
    
  const dispatch=useDispatch()
  const handleTask=()=>{
    const title=titleRef.current.value
    const description = descriptionRef.current.value;
    if (title && description) {
      dispatch(addTask({ title, description })); // Pass an object as payload
    }
  }
  return (
    <div className='card-container'>
        <div className="title-input">
        <input ref={titleRef} type="text" placeholder='Task title'/>
        </div>
        <div className="description-input">
        <input ref={descriptionRef} type="text" placeholder='Description' />
        <hr />
        <div className="card-btns">
            <button onClick={()=>dispatch(Add())} className='cancle-btn'>Cancle</button>
            <button onClick={handleTask} className='add-btn'>Add task</button>
        </div>
        </div>
        
    </div>
  )
}

export default Card