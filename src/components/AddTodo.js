import {useContext, useState} from 'react';
import { todoDispatchContext } from '../context/todoContext';

export default function AddTodo() {
  const [value, setValue] = useState('')
  const dispatch = useContext(todoDispatchContext)

  function handleChange(e) {
    const todoValue = e.target.value
    setValue(todoValue)
  }

  function handleClick() {
    if (value.trim().length) {
      dispatch({
        type: "ADD_TODO",
        content: value.trim(),
      })
      setValue('')
    } else {
      setValue('')
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center mb20'>
        <input 
          type="text" 
          value={value}
          placeholder="add a todo"
          className='mr20 flex-fill p10'
          onChange={handleChange} />
        <button onClick={handleClick} className='btn btn-primary'>ADD</button>
    </div>
  );
}
