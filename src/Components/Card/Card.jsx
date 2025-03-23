import React, { useCallback, useState } from "react";
import "./Card.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  editTask,
  removeTask,
} from "../../store/slices/taskListSlice";
import {
  setAddTaskVisibility,
  setEditModalVisibility,
  setEditTodo,
} from "../../store/slices/isAdd";
const Card = () => {
  const { isEdit, todo } = useSelector((state) => state.isAdd);
  const [title, setTitle] = useState(isEdit ? todo.title : "");
  const [description, setDescription] = useState(
    isEdit ? todo.description : ""
  );
  const dispatch = useDispatch();

  const handleTask = useCallback(() => {
    if (title && description) {
      if (isEdit) {
        dispatch(
          editTask({
            id: todo.id,
            title,
            description,
          })
        );
        dispatch(setEditModalVisibility(false));
        dispatch(
          setEditTodo({
            id: 0,
            title: "",
            description: "",
            isCompleted: false,
          })
        );
      } else {
        dispatch(addTask({ title, description }));
      }
      dispatch(setAddTaskVisibility(false));
    }
  }, [title, description, isEdit, dispatch, todo.id]);

  return (
    <div className="card-container">
      <div className="title-input">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Task title"
        />
      </div>
      <div className="description-input">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
        />
        <hr />
        <div className="card-btns">
          <button
            type="button"
            onClick={() => dispatch(setAddTaskVisibility(false))}
            className="cancle-btn"
          >
            Cancel
          </button>
          <button onClick={handleTask} className="add-btn">
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
