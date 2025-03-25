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
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <AddTask />
      {taskList.map((todo) => {
        return (
          <div key={todo._id}>
            <TaskItem todo={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
