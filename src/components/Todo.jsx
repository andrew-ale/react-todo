import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    toggleComplete(task.id);
  };

  return (
    <div className="Todo">
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
      </label>
      <p
        className={`${task.completed ? 'completed' : ''}`}
        // onClick={() => toggleComplete(task.id)}
      >
        {task.name}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
