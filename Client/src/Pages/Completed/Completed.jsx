import React, { useEffect } from "react";
import AddTask from "../../Components/AddTask/AddTask";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "../../Components/TaskItem/TaskItem";
import { setLoading } from "../../features/slices/loginSlice";
import { fetchTodos } from "../../features/slices/taskListSlice";

const Completed = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div>
      <AddTask />
      {taskList
        .filter((todo) => todo.isCompleted)
        .map((todo) => (
          <div id={todo._id}>
            <TaskItem todo={todo} />
          </div>
        ))}
    </div>
  );
};

export default Completed;
