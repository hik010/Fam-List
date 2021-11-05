import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/reducers/tasksReducer';
import FormComponent from './FormComponent';

function AddForm(props) {

  const dispatch = useDispatch();
  let initialForm = {
    date: new Date().toJSON().slice(0,10),
    description: '',
    userId: ''
  }
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(formData))
    setFormData(initialForm);
  }


  return (
    <FormComponent handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} type="Add" />
  );
}

export default AddForm;
