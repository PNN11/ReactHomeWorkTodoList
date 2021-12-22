import React from "react";
import Button from "../Button";
import { ListIt } from "./ListItem.styles";

const ListItem = ({ name, done, onDoneClick, onDeleteClick, id }) => {
  const handleDone = () => {
    onDoneClick(id);
  };

  const handleDelete = () => {
    onDeleteClick(id);
  };

  return (
    <ListIt done={done}>
      <p>{name}</p>
      <div>
        {!done && (
          <Button type="button" size="small" onClick={handleDone}>
            Выполнено
          </Button>
        )}
        <Button type="button" size="small" onClick={handleDelete}>
          Удалить
        </Button>
      </div>
    </ListIt>
  );
};

export default ListItem;
