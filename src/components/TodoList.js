import { todoStateContext } from '../context/todoContext';
import { useContext } from 'react'
import EditTodo from './EditTodo';
import TodoItem from './TodoItem'

export default function TodoList() {
  const state = useContext(todoStateContext)
  return state.todoList.length ? (
    <div>
      <ul>
        {state.todoList.map((todo) => 
        todo.edit ? (
          <EditTodo key={todo.id} todo={todo} />
        ) : (
          <TodoItem key={todo.id} todo={todo} />
        )
        )}
      </ul>
    </div>
  ) : (
    <div>
      <p>Aucune todo pour le moment</p>
    </div>
  );
}
