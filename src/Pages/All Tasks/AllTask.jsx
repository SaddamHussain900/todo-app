import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddTask from "../../Components/AddTask/AddTask";
import { setTasks, toggleComplete } from "../../store/slices/taskListSlice";
import { useDispatch } from "react-redux";
import TaskItem from "../../Components/TaskItem/TaskItem";
import axios from "axios";

const AllTask = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList);

  useEffect(() => {
    const fetchTodos = async () => {
      await axios
        .get("http://localhost:3001/get")
        .then((result) => {
          dispatch(setTasks(result.data));
        })
        .catch((err) => console.log(err));
    };

    fetchTodos();
  }, [dispatch]);

  return (
    <div>
      <AddTask />
      {taskList.map((task) => {
        return (
          <div key={task._id}>
            <TaskItem task={task} />
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
