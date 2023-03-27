import { useContext, useState } from "react";
import { todoDispatchContext } from "../context/todoContext";

export default function EditTodo({todo}) {
  const [value, setValue] = useState(todo.content)
  const dispatch = useContext(todoDispatchContext)

  function handleChange(e) {
    const todoValue = e.target.value
    setValue(todoValue)
  }

  function handleClick() {
    if (value.trim().length) {
      dispatch({
        type: "CHANGE_TODO",
        id: todo.id,
        value: value.trim()
      })
    }
  }

  function handleCancel() {
    dispatch({
      type: "EDIT_TODO",
      id: todo.id
    })
  }
  
  return (
    <div className='d-flex justify-content-center align-items-center mb20'>
      <input 
        type="text" 
        value={value}
        placeholder="add a todo"
        className='mr20 flex-fill p10'
        onChange={handleChange} />
      <button onClick={handleCancel} className='btn btn-primary-reverse'>Cancel</button>
      <button onClick={handleClick} className='btn btn-primary'>Valid</button>
    </div>
  );
}