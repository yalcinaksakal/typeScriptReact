import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
// optional items
// const Todos: React.FC<{ items?: string[] }> = props => {

// You can use your model class as a type
const Todos: React.FC<{ items: Todo[] }> = props => {
  return (
    <ul className={styles.todos}>
      {props.items.map(item => (
        <TodoItem key={item.id} todo={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
