import React from "react";
import "./AddTask.scss";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { setAddTaskVisibility } from "../../redux/taskList/isAdd";
import Card from "../Card/Card";
const AddTask = () => {
  const dispatch = useDispatch();
  const { isAddTaskVisible } = useSelector((state) => state.isAdd);

  return (
    <div className="main-container">
      {isAddTaskVisible && <Card />}
      <div
        onClick={() => dispatch(setAddTaskVisibility(true))}
        className="add-task-button"
      >
        <button>
          <CiCirclePlus />
        </button>
        <>Add task</>
      </div>
    </div>
  );
};

export default AddTask;
