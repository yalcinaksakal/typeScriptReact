import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// optional items
// const Todos: React.FC<{ items?: string[] }> = props => {

// You can use your model class as a type
const Todos: React.FC<{ items: Todo[] }> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <TodoItem key={item.id} todo={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
