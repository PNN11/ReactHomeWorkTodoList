import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, doneTodo, editTodo } from "../../store/todo";
import { validateForm } from "../../containers/Form/helpers/validateForm";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ListIt } from "./ListItem.styles";
import { useLocales } from "../../providers/LocalesProvider";
import Modal from "../../components/Modal/Modal";

const ListItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const { trans, lang } = useLocales();
  const [modal, setModal] = useState(false);
  const [newName, setNewName] = useState(name);
  const [touched, setTouched] = useState(false);
  const error = validateForm[lang](newName);

  const handleDone = () => {
    dispatch(doneTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    if (!!error) {
      setTouched(true);
      return;
    }
    dispatch(editTodo(id, newName));
    setModal(false);
    setTouched(false);
  };

  const handleClose = () => {
    setModal(false);
    setNewName(name);
    setTouched(false);
  };

  const handleOpen = () => {
    setModal(true);
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <ListIt done={done}>
      {modal && (
        <Modal onClose={handleClose}>
          <Input
            placeholder={trans.modal.input.placeholder}
            label={trans.modal.input.label}
            id="edit"
            value={newName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched && !!error}
            errorMessage={error}
          />
          <div>
            <Button onClick={handleEdit}>{trans.modal.buttons.edit}</Button>
            <Button onClick={handleClose}>{trans.modal.buttons.close}</Button>
          </div>
        </Modal>
      )}
      <p>{name}</p>
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
  );
};

export default ListItem;
