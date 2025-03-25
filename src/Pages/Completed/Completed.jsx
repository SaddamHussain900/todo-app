import React from "react";
import AddTask from "../../Components/AddTask/AddTask";
import { useSelector } from "react-redux";
import TaskItem from "../../Components/TaskItem/TaskItem";

const Completed = () => {
  const taskList = useSelector((state) => state.taskList);
  return (
    <div>
      <AddTask />
      {taskList
        .filter((todo) => todo.isCompleted)
        .map((task) => {
          return (
            task.isCompleted && (
              <div id={task._id}>
                <TaskItem task={task} />
              </div>
            )
          );
        })}
    </div>
  );
};

export default Completed;
