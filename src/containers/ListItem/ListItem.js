import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteTodo,
  doneTodo,
  editTodo,
  getTodosNames,
} from "../../store/todo";
import Button from "../../components/Button";
import { ListIt } from "./ListItem.styles";
import { useLocales } from "../../providers/LocalesProvider";
import Modal from "../../components/Modal/Modal";
import EditForm from "../../components/EditForm/EditForm";

const ListItem = ({ name, done, id, description, important, date }) => {
  const dispatch = useDispatch();
  const todoNames = useSelector(getTodosNames);
  const { trans } = useLocales();
  const [modal, setModal] = useState(false);

  const handleDone = () => {
    dispatch(doneTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (values) => {
    dispatch(editTodo(id, { ...values, date: new Date().toLocaleString() }));
    setModal(false);
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleOpen = () => {
    setModal(true);
  };

  return (
    <>
      {modal && (
        <Modal onClose={handleClose}>
          <EditForm
            onSubmit={handleEdit}
            onClose={handleClose}
            todoNames={todoNames}
            trans={trans}
            initial={{ name, description, important }}
          />
        </Modal>
      )}
      <ListIt done={done}>
        <div>
          <h4>
            {important && `${trans.list.important}!!!`} {name}
          </h4>
          <p>{description}</p>
          <span>
            {trans.list.created}: {date}
          </span>
        </div>

        <div>
          {!done && (
            <>
              <Button type="button" size="small" onClick={handleOpen}>
                {trans.list.buttons.edit}
              </Button>
              <Button type="button" size="small" onClick={handleDone}>
                {trans.list.buttons.done}
              </Button>
            </>
          )}
          <Button type="button" size="small" onClick={handleDelete}>
            {trans.list.buttons.delete}
          </Button>
        </div>
      </ListIt>
    </>
  );
};

export default ListItem;
