import React, { useCallback, useState } from "react";
import "./Card.scss";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, updateTodo } from "../../store/slices/taskListSlice";
import {
  setAddTaskVisibility,
  setEditModalVisibility,
  setEditTodo,
} from "../../store/slices/isAdd";
import { setLoading } from "../../store/slices/loginSlice";
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
        dispatch(setLoading(true));
        dispatch(updateTodo(todo._id, title, description, todo.isCompleted));
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
        dispatch(setLoading(true));
        dispatch(createTodo(title, description));
      }
      dispatch(setAddTaskVisibility(false));
    }
  }, [title, description, isEdit, dispatch, todo._id, todo.isCompleted]);

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
            {isEdit ? "Edit" : "Add"} todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
