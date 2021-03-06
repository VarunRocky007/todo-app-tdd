import React,{useState} from 'react';
export default function Todo(props){
  let editbtn = props.id+"edit";
  let deletebtn = props.id+"delete";
  let cancelbtn = props.id+"cancel";
  let savebtn = props.id+"save";
  let editText = props.id+"editText";
  let checkbox = props.id+"checkbox";

  const[isEditing,setEditing]=useState(false);
  const [newName, setNewName] = useState('');
  function handleChange(e){
    setNewName(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    props.editTask(props.id,newName);
    setNewName('');
    setEditing(false);
  }
  const editingTemplate = (
  <form className="stack-small" onSubmit={handleSubmit}>
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        New name for {props.name}
      </label>
      <input id={props.id} data-testid={editText} className="todo-text" type="text"
      onChange={handleChange}/>
    </div>
    <div className="btn-group">
      <button type="button" data-testid={cancelbtn} className="btn todo-cancel"
      onClick={()=>setEditing(false)}>
        Cancel
        <span className="visually-hidden">renaming {props.name}</span>
      </button>
      <button type="submit" data-testid={savebtn} className="btn btn__primary todo-edit">
        Save
        <span className="visually-hidden">new name for {props.name}</span>
      </button>
    </div>
  </form>
);
const viewTemplate = (
  <div className="stack-small">
    <div className="c-cb">
        <input
          data-testid={checkbox}
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" data-testid={editbtn} className="btn" onClick={()=>setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          data-testid ={deletebtn}
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
  </div>
);
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

}
