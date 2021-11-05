import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask } from '../store/reducers/tasksReducer';
import FormComponent from './FormComponent';

function EditForm({task}) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id : task.id,
    userId: (task.userId) ? task.userId : "",
    description: task.description,
    date: task.date.slice(0,10)
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(formData))
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value })
  }


  return (
    <FormComponent handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} type='Save Changes'/>
  );
}

export default EditForm;
