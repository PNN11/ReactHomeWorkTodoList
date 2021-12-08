import React from "react";
import Button from "../Button";
import { ListIt } from "./ListItem.styles";

class ListItem extends React.Component {
  handleDone = () => {
    const { onDoneClick, id } = this.props;
    onDoneClick(id);
  };

  handleDelete = () => {
    const { onDeleteClick, id } = this.props;
    onDeleteClick(id);
  };

  render() {
    const { name, done } = this.props;
    return (
      <ListIt done={done}>
        <p>{name}</p>
        <div>
          {!done && (
            <Button type="button" size="small" onClick={this.handleDone}>
              Выполнено
            </Button>
          )}
          <Button type="button" size="small" onClick={this.handleDelete}>
            Удалить
          </Button>
        </div>
      </ListIt>
    );
  }
}

export default ListItem;
