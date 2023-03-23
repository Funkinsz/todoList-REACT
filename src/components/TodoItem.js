import { useState } from "react";
import EditTodo from "./EditTodo";

export default function TodoItem({todo, deleteTodo, toggleTodo, editTodo, changeTodo}) {
  const [liked, setLiked] = useState(false);
  const [edit, setEdit] = useState(false);

  console.log(edit);

  const handleClick = () => {
    setLiked(!liked)
  }

  const handleEdit = () => {
    setEdit(!edit)
  }

  if (edit) {
    console.log(todo);
    return (  
      <li className="d-flex align-items-center mb10">
        <EditTodo todo={todo} handleEdit={handleEdit}/>
      </li>
    );
  } else {
    return (
      <li className="d-flex align-items-center mb10">
        <span className="flex-fill mr10">
          {todo.content}
          { liked ? "✔️" : "" }
        </span>
        <button onClick={handleClick} className="btn btn-primary mr10">{liked ? "Réalisé" : "A faire"}</button>
        <button onClick={handleEdit} className="btn btn-primary mr10">Modifier</button>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-primary-reverse mr10">Supprimer</button>
      </li>
    );
  }
}