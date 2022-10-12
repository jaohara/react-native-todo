import { useState } from "react";

import defaults from "../defaults";

/*
  Similar idea with useUsers here - this is something that will eventually use firebase or
  whatever cloud-based storage solution I end up using.
*/
const useTodos = () => {
  const [ todos, setTodos ] = useState(defaults.todos);

  const listExists = (todoList) => todos.includes(todoList);

  // this will take in the user and the list name, create a new list from that 
  // and append it to the list of lists.
  const createTodoList = (user, name) => setTodos([...todos, {
    // TODO: Replace me with a timestamp
    date: "DatePlacholder",
    name: name,
    id: todos.length,
    todos: [],
    user: user,
  }]);

  const removeTodoList = (todoList) => listExists(todoList) && 
    setTodos(todos.filter((currentList) => currentList !== todoList));

  return {
    createTodoList: createTodoList,
    todos: todos,
    removeTodoList: removeTodoList,
  };
};

export default useTodos;