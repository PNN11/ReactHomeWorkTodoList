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
            <Button
              type="button"
              name="Выполнено"
              size="small"
              onClick={this.handleDone}
            />
          )}
          <Button
            type="button"
            name="Удалить"
            size="small"
            onClick={this.handleDelete}
          />
        </div>
      </ListIt>
    );
  }
}

export default ListItem;
