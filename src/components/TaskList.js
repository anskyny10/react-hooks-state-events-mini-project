// import { useState } from "react";
import Task from "./Task";

function TaskList( { tasks, onDeleteTask } ) {
  // console.log(tasks)

  // const [taskList, setTaskList] = useState(tasks);

  // const handleDeleteTask = (taskToDelete) => {
  //   // console.log(taskToDelete);
  //   const updatedTaskList = taskList.filter( task => task !== taskToDelete);
  //   setTaskList(updatedTaskList);
  //   // console.log(taskList);
  // };

  return (
    <div className="tasks">
      {tasks.map( curTask => (
        <Task
          key={curTask.id}
          task={curTask}
          onDelete={onDeleteTask}
        />
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
