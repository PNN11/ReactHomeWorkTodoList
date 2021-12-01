import Button from "../Button";
import { ListIt } from "./ListItem.styles";

const ListItem = ({ children }) => {
  return (
    <ListIt>
      <p>{children}</p>
      <div>
        <Button name="Выполнено" />
        <Button name="Удалить" />
      </div>
    </ListIt>
  );
};

export default ListItem;
