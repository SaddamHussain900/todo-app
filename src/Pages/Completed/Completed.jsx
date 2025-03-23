import React from "react";
import AddTask from "../../Components/AddTask/AddTask";
import { useSelector } from "react-redux";
import TaskItem from "../../Components/TaskItem/TaskItem";

const Completed = () => {
  const taskList = useSelector((state) => state.taskList);
  return (
    <div>
      <AddTask />
      {taskList.map((task) => {
        return task.isCompleted && <TaskItem task={task} />;
      })}
    </div>
  );
};

export default Completed;
