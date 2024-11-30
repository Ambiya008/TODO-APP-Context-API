import React, { useState } from 'react';
import { useTodo } from '../Context'; // Automatically picks from Context/index.js

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  // Edit the todo when the user finishes editing
  const editTodo = () => {
    if (todoMsg.trim() === "") return; // Avoid saving empty todos
    updateTodo(todo.id, { ...todo, todo: todoMsg });  // Update the Todo text
    setIsTodoEditable(false);  // Toggle to non-editable mode
  };

  // Toggle the completed state of the todo
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      {/* Checkbox to toggle completion status */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}  // Toggles completion status
        disabled={isTodoEditable} // Prevent completion toggle if editing
      />

      {/* Input field to edit the todo */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}  // Update the todo text
        readOnly={!isTodoEditable}  // Make it read-only unless in edit mode
      />

      {/* Edit/Save button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return; // Prevent edit if the todo is completed

          if (isTodoEditable) {
            editTodo(); // Save changes
          } else {
            setIsTodoEditable(true);  // Enable edit mode
          }
        }}
        disabled={todo.completed}  // Disable the button if the todo is completed
      >
        {isTodoEditable ? '📁' : '✏️'}  {/* Change button text based on state */}
      </button>

      {/* Delete button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}  // Delete todo
        disabled={todo.completed}  // Disable delete button if completed
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
