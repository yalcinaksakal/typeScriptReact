import { createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  todos: [],
  addTodo: () => {},
  deleteTodo: (id: number) => {},
});

const TodosContextProvider: React.FC = props => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React"),
    new Todo("Learn Typescript"),
  ]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos(prevState => prevState.concat(newTodo));
  };
  const deleteTodoHandler = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  const contextValue: TodosContextObj = {
    todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
