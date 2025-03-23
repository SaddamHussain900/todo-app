import React from "react";
import { useSelector } from "react-redux";
import AddTask from "../../Components/AddTask/AddTask";
import { toggleComplete } from "../../store/slices/taskListSlice";
import { useDispatch } from "react-redux";
import TaskItem from "../../Components/TaskItem/TaskItem";
const AllTask = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList);

  return (
    <div>
      <AddTask />
      {taskList.map((task) => {
        return (
          <div key={task.id}>
            <TaskItem task={task} />
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
