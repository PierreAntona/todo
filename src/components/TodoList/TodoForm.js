import { nanoid } from 'nanoid';

function TodoForm({todo, setTodo, todoList, setTodoList}) {

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name:todo, id: nanoid()}]);
        setTodo("");
    }

    return(
        <div className="todoForm">
            <h3>Add a task :</h3>
            <form onSubmit={handleSubmit}>
                    <input value={todo} onChange={handleChange}/>
                    <button>Add</button>
            </form>
        </div>
    )
}

export default TodoForm;