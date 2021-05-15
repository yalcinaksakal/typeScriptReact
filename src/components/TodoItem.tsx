import styles from "./TodoItem.module.css";
const TodoItem: React.FC<{ todo: string }> = props => (
  <li className={styles.item}>{props.todo}</li>
);
export default TodoItem;
