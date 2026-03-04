function TodoList({todos, toggleComplete, deleteTodo}) {
    return (
        <ul className = "w-80 space-y-3">
            {todos.map((todo) => (
                <li
                    key = {todo.id}
                    className = {`p-4 rounded-lg shadow-md flex justify-between items-center border-l-4
                    transition-all ${ todo.completed ? "bg-green-50 border-green-500 opacity-70" : "bg-white border-blue-500"
                    }`}
                >
                        <span
                            onClick = {() => toggleComplete(todo.id)}
                            className = {`flex-1 items-center cursor-pointer font-medium ${
                                todo.completed  ? "line-through text-slate-400" : "text-slate-700"}`}
                        >
                            {todo.text}
                        </span>

                        <span className = "text-[10px] text-slate-400 ml-2 font-normal shrink-0">
                                {todo.time}
                        </span>

                    <button
                        onClick = {() => deleteTodo(todo.id)}
                        className = "text-red-500 hover:text-red-700 font-bold px-2 transition-colors"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;