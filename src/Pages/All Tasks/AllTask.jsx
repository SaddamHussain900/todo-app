import React from "react";
import { useSelector } from "react-redux";
import AddTask from "../../Components/AddTask/AddTask";
import { toggleComplete } from "../../redux/taskList/taskListSlice";
import { useDispatch } from "react-redux";
import TaskItem from "../../Components/TaskItem/TaskItem";
const AllTask = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList);

  return (
    <div>
      <AddTask />
      {taskList.map((state) => {
        return (
          <div key={state.id}>
            {!state.isCompleted && (
              <input
                type="checkbox"
                checked={state.isCompleted}
                onChange={() => {
                  dispatch(toggleComplete(state.id));
                }}
              />
            )}
            {!state.isCompleted && state.title}
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
