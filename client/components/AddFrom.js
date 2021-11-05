import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/reducers/tasksReducer';

function AddForm(props) {
  const users = useSelector((state) => state.users);
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

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <form className="row row-cols-lg-auto align-items-center w-75 mx-auto my-4" onSubmit={handleSubmit}>
      <div className="col-12">
        <input
          type="text"
          className="form-control  form-control-sm"
          placeholder="Add a new task"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="col-12">
        <select
          type="text"
          className="form-select  form-select-sm"
          placeholder="Assign To"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        >
          <option value={''}> Assign To</option>
          {usersOptions}
        </select>
      </div>
      <div className="col-12">
        <input type="date" className="form-control  form-control-sm" id="date" name="date" value={formData.date} onChange={handleChange} />
      </div>
      <div className="col-12">
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddForm;
