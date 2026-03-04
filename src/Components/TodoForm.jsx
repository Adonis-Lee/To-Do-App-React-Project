function TodoForm({inputValue, setInputValue, addTodo}) {
    return (
        <form
            onSubmit = {(e) => {
                e.preventDefault();
                addTodo();
            }}
            className = "flex gap-2 mb-8"
        >
            <input
                type="text"
                placeholder = "What is your new To-Do?"
                className = "border-2 border-slate-300 p-2 rounded-lg outline-none
                    focus:border-blue-500 w-80 shadow-sm"
                value = {inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button
                type="submit"
                className = "bg-blue-600 text-white px-6 py-2 rounded-lg
                    hover:bg-blue-700 transition-colors font-medium"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;