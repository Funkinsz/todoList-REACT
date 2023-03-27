import { useContext } from "react";
import { todoDispatchContext } from "../context/todoContext";

export default function TodoItem({todo}) {
  const dispatch = useContext(todoDispatchContext)

  const handleClick = () => {
    dispatch({
      type: "TOGGLE_TODO",
      id: todo.id
    })
  }

  const handleEdit = () => {
    dispatch({
      type: "EDIT_TODO",
      id: todo.id
    })
  }

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      id: todo.id
    })
  }


  return (
    <li className="d-flex align-items-center mb10">
      <span className="flex-fill mr10">
        {todo.content} {todo.done && "✔️"}
      </span>
      <button onClick={handleClick} className="btn btn-primary mr10">{todo.done ? "Réalisé" : "A faire"}</button>
      <button onClick={handleEdit} className="btn btn-primary mr10">Modifier</button>
      <button onClick={handleDelete} className="btn btn-primary-reverse mr10">Supprimer</button>
    </li>
  );
}