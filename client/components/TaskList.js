import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Task from "./Task";
import EditForm from "./EditForm";

function TaskList(){

  // getting list of  tasks from the store state
  const allTasks = useSelector((state) => state.tasks)
  return (
    <div className="w-75 m-auto">

      <div className="list-group">
      {
        allTasks.map(task => <Task key={task.id} task={task}/>)
      }

      </div>


    </div>
  )
}

export default TaskList;
