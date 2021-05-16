import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
// optional items
// const Todos: React.FC<{ items?: string[] }> = props => {

// You can use your model class as a type
const Todos: React.FC<{
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}> = props => {
  return (
    <ul className={styles.todos}>
      {props.items.map(item => (
        <TodoItem
          key={item.id}
          todo={item.text}
          clicked={props.onDeleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
