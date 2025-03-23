import React, { useCallback, useState } from "react";
import "./Card.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../../redux/taskList/taskListSlice";
import { setAddTaskVisibility } from "../../redux/taskList/isAdd";
const Card = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const handleTask = useCallback(() => {
    if (title && description) {
      dispatch(addTask({ title, description }));
      dispatch(setAddTaskVisibility(false));
    }
  }, [title, description, dispatch]);
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
          <button type="button" onClick={handleTask} className="add-btn">
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
