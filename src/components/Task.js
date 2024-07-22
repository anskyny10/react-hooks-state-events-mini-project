// import { useState } from "react";

function Task( { task, onDelete } ) {


  const handleDelete = () => {
    // console.log(task);
    onDelete(task);
  };

  // console.log(task)
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;

// category={curTask.category}
// text={curTask.text}
// let { text, category } = task;
// const [taskDelete, setTaskDelete] = useState(task);