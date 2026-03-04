import Header from '../Components/Header';
import Stats from '../Components/Stats';
import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';

function Home({
    todos,
    inputValue,
    setInputValue,
    addTodo,
    toggleComplete,
    deleteTodo,
    clearAll
}) {
    return (
        <div className="bg-slate-100 min-h-screen flex flex-col items-center py-10">
            <Header />
            <Stats todos={todos} />

            <TodoForm
                inputValue={inputValue}
                setInputValue={setInputValue}
                addTodo={addTodo}
            />

            <TodoList
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
            />

            {todos.length > 0 && (
                <button onClick={clearAll} className="mt-6 text-sm text-red-400 underline italic">
                    Clear All Tasks
                </button>
            )}

            {todos.length === 0 && (
                <div className="text-center mt-10">
                    <p className="text-slate-400 italic">You have not added any task yet.</p>
                    <p className="text-2xl mt-2">📝</p>
                </div>
            )}
        </div>
    );
}
export default Home;