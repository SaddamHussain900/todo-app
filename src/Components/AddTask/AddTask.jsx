import React from "react";
import "./AddTask.scss";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "../../redux/taskList/isAdd";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
const AddTask = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.isAdd);

  return (
    <div className="main-container">
      <Modal isVisible={isVisible} onClose={() => dispatch(Add())}>
        <Card />
      </Modal>
      <div onClick={() => dispatch(Add())} className="add-task-button">
        <button>
          <CiCirclePlus />
        </button>
        <>Add task</>
      </div>
    </div>
  );
};

export default AddTask;
