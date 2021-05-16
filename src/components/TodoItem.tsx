import styles from "./TodoItem.module.css";
const TodoItem: React.FC<{ todo: string; clicked: () => void }> =
  props => {
    return (
      <li className={styles.item} onClick={props.clicked}>
        {props.todo}
      </li>
    );
  };
export default TodoItem;
