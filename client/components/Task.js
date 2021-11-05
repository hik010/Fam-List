import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../store/reducers/tasksReducer';
import EditForm from './EditForm';

function Task({ task }) {
  const dispatch = useDispatch();
  let iconType = task.status ? 'bi-check-circle' : 'bi-circle';
  let strikeThru = task.status ? 'text-decoration-line-through' : '';

  return (
    <div className="single-task list-group-item list-group-item-action d-flex justify-content-between">
      <div className="task-left">
        <i
          className={`bi ${iconType}`}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Mark as complete"
          onClick={() => dispatch(toggleTask(task.id))}
        ></i>
        <span className={`ms-2 ${strikeThru}`}> {task.description}</span>
      </div>
      <div className="task-right">
        {task.user ? (
          <span
            className="badge rounded-pill"
            style={{ backgroundColor: task.user.color }}
          >
            {task.user.name}
          </span>
        ) : null}

        <button className="btn btn-outline-warning btn-sm ms-2 date-btn">
          {task.date.toString().slice(0, 10)}
        </button>
        <div className="hiddenIcons ms-2">
          <i
            className="bi bi-trash-fill me-2"
            style={{ color: '#d62929' }}
            data-toggle="tooltip"
            data-placement="bottom"
            title="Delete Task"
            onClick={() => dispatch(deleteTask(task.id))}
          ></i>
          <i
            className="bi bi-pencil-fill"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Edit Task"
            data-bs-toggle="modal"
            data-bs-target={`#editForm${task.id}`}
          ></i>
        </div>
        <div className="modal fade" id={`editForm${task.id}`} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <EditForm task={task} />
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Task;
