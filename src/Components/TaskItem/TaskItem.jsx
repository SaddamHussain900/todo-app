import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../store/slices/taskListSlice";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import "./TaskItem.scss";
import {
  setAddTaskVisibility,
  setEditModalVisibility,
  setEditTodo,
} from "../../store/slices/isAdd";
import { setLoading } from "../../store/slices/loginSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setAddTaskVisibility(true));
    dispatch(setEditTodo(task));
    dispatch(setEditModalVisibility(true));
  };

  const handleToggle = () => {
    dispatch(setLoading(true));
    dispatch(
      updateTodo(task._id, task.title, task.description, !task.isCompleted)
    );
  };

  const handleDelete = (id) => {
    dispatch(setLoading(true));
    dispatch(deleteTodo(id));
  };

  return (
    <div className={`task-item ${task.isCompleted ? "completed" : ""}`}>
      <div className="task-view-mode">
        <div className="task-content">
          <h3
            className="task-title"
            style={{
              textDecoration: task.isCompleted ? "line-through" : "inherit",
            }}
          >
            {task.title}
          </h3>
          <p className="task-description">{task.description}</p>
        </div>
        <div className="task-actions">
          <button
            onClick={handleToggle}
            className={`toggle-btn ${task.isCompleted ? "completed" : ""}`}
          >
            <FaCheck />
          </button>
          <button onClick={handleEdit} className="edit-btn">
            <FaEdit />
          </button>
          <button onClick={() => handleDelete(task._id)} className="delete-btn">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(TaskItem);
