import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../features/slices/taskListSlice";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import "./TaskItem.scss";
import {
  setAddTaskVisibility,
  setEditModalVisibility,
  setEditTodo,
} from "../../features/slices/isAdd";
import { setLoading } from "../../features/slices/loginSlice";

const TaskItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setAddTaskVisibility(true));
    dispatch(setEditTodo(todo));
    dispatch(setEditModalVisibility(true));
  };

  const handleToggle = () => {
    dispatch(setLoading(true));
    dispatch(
      updateTodo(todo._id, todo.title, todo.description, !todo.isCompleted)
    );
  };

  const handleDelete = (id) => {
    dispatch(setLoading(true));
    dispatch(deleteTodo(id));
  };

  return (
    <div className={`task-item ${todo.isCompleted ? "completed" : ""}`}>
      <div className="task-view-mode">
        <div className="task-content">
          <h3
            className="task-title"
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "inherit",
            }}
          >
            {todo.title.length > 50
              ? `${todo.title.slice(0, 50)}...`
              : todo.title}
          </h3>
          <p className="task-description">
            {todo.description.length > 60
              ? `${todo.description.slice(0, 60)}...`
              : todo.description}
          </p>
        </div>
        <div className="task-actions">
          <button
            onClick={handleToggle}
            className={`toggle-btn ${todo.isCompleted ? "completed" : ""}`}
          >
            <FaCheck />
          </button>
          <button onClick={handleEdit} className="edit-btn">
            <FaEdit />
          </button>
          <button onClick={() => handleDelete(todo._id)} className="delete-btn">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(TaskItem);
