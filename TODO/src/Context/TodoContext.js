import { createContext, useContext } from "react";

// Create the TodoContext with a default value
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {}, // Fixed typo from "updatedTodo" to "updateTodo"
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Hook to use the TodoContext
export const useTodo = () => {
  return useContext(TodoContext);
};

// Export the TodoProvider
export const TodoProvider = TodoContext.Provider;
