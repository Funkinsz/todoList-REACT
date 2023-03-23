import TodoItem from './TodoItem'

export default function TodoList({todoList, deleteTodo, toggleTodo, editTodo, changeTodo}) {
  return todoList.length ? (
    <div>
      <ul>
        {todoList.map((todo, i) => (
          <TodoItem 
            key={i} 
            todo={todo} 
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            changeTodo={changeTodo}
          />
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <p>Aucune todo pour le moment</p>
    </div>
  );
}
