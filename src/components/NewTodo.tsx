import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodosContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // const enteredText = inputRef.current?.value;
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) return;
    inputRef.current!.value="";
    addTodo(enteredText);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="todoItem">Todo</label>
      <input ref={inputRef} id="todoItem" type="text" />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
