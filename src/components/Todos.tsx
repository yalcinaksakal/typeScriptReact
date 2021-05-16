import { useContext } from "react";

import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
// optional items
// const Todos: React.FC<{ items?: string[] }> = props => {

// You can use your model class as a type
const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {ctx.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo.text}
          clicked={ctx.deleteTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
