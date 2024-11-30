import React, { useState } from 'react';
import { useTodo } from "../Context/TodoContext";
 // Ensure correct path to your context

function TodoForm() {
    const [todo, setTodo] = useState(''); // Local state to manage input
    const { addTodo } = useTodo(); // Use the `addTodo` function from context

    // Function to handle form submission
    const add = (e) => {
        e.preventDefault(); // Prevent form default submission behavior
        if (!todo) return; // Do nothing if input is empty
        addTodo({ todo, completed: false }); // Add the new todo
        setTodo(''); // Clear the input field after adding
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo} // Controlled input bound to `todo` state
                onChange={(e) => setTodo(e.target.value)} // Update state on input change
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
