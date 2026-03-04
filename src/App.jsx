import{useState, useEffect} from 'react';

import Home from './Pages/Home';

function App() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if ( inputValue.trim() !== "" ) {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false,
                time: new Date().toLocaleTimeString([],
                    { hour: '2-digit', minute: '2-digit' }),
            };
            setTodos([newTodo, ...todos]);
            setInputValue("");
        }
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo ,completed: !todo.completed};
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const clearAll = () => {
        if(window.confirm('Are you sure you want to delete all tasks?')){
            setTodos([]);
        }
    };

    return (
        <Home
            todos={todos}
            inputValue={inputValue}
            setInputValue={setInputValue}
            addTodo={addTodo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            clearAll={clearAll}
        />
    );
}

export default App;