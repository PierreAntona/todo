function TodoListItem({ todoItem, todoList, setTodoList }) {
  const deleteTodoItem = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };

  return (
    <div className="listItem">
      <h5>{todoItem.name}</h5>
      <button onClick={deleteTodoItem}>
        Delete
      </button>
    </div>
  );
}

export default TodoListItem;
