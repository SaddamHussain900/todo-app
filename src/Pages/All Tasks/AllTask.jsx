import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddTask from "../../Components/AddTask/AddTask";
import { fetchTodos } from "../../store/slices/taskListSlice";
import { useDispatch } from "react-redux";
import TaskItem from "../../Components/TaskItem/TaskItem";
import { setLoading } from "../../store/slices/loginSlice";

const AllTask = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList);

  useEffect(() => {
    dispatch(setLoading(true));
    fetchTodos(dispatch);
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
