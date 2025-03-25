import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddTask from "../../Components/AddTask/AddTask";
import { toggleComplete } from "../../store/slices/taskListSlice";
import { useDispatch } from "react-redux";
import TaskItem from "../../Components/TaskItem/TaskItem";
import axios from "axios";

const AllTask = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList);
  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = async () => {
    await axios
      .get("http://localhost:3001/get")
      .then((result) =>
        dispatch(
          editTask({
            id: todo.id,
            title,
            description,
          })
        )
      )
      .catch((err) => console.log(err));
  };
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
