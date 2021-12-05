import ListItem from "../ListItem";

const List = ({ list, onDoneTodo, onDeleteTodo }) => {
  const TodoItems = list.map(({ id, name, done }) => (
    <ListItem
      name={name}
      key={id}
      done={done}
      onDoneClick={onDoneTodo}
      id={id}
      onDeleteClick={onDeleteTodo}
    />
  ));
  return <ul>{TodoItems}</ul>;
};

export default List;
