import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  removeTask,
  toggleComplete,
  editTask,
} from "../../redux/taskList/taskListSlice";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import "./TaskItem.scss";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const editTitleRef = useRef(null);
  const editDescriptionRef = useRef(null);
  const dispatch = useDispatch();

  // Start editing mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Save edited task
  const handleSave = () => {
    const newTitle = editTitleRef.current.value;
    const newDescription = editDescriptionRef.current.value;

    if (newTitle && newDescription) {
      dispatch(
        editTask({
          id: task.id,
          title: newTitle,
          description: newDescription,
        })
      );
      setIsEditing(false);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setIsEditing(false);
  };

  // Handle task completion toggle
  const handleToggle = () => {
    dispatch(toggleComplete(task.id));
  };

  // Handle task deletion
  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <div className={`task-item ${task.isCompleted ? "completed" : ""}`}>
      {isEditing ? (
        // Edit mode
        <div className="task-edit-mode">
          <input
            ref={editTitleRef}
            type="text"
            defaultValue={task.title}
            placeholder="Task title"
            className="edit-title"
          />
          <input
            ref={editDescriptionRef}
            type="text"
            defaultValue={task.description}
            placeholder="Description"
            className="edit-description"
          />
          <div className="task-action-buttons">
            <button onClick={handleCancel} className="cancel-btn">
              <FaTimes /> Cancel
            </button>
            <button onClick={handleSave} className="save-btn">
              <FaCheck /> Save
            </button>
          </div>
        </div>
      ) : (
        // View mode
        <div className="task-view-mode">
          <div className="task-content">
            <h3 className="task-title">{task.title}</h3>
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
            <button onClick={handleDelete} className="delete-btn">
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
