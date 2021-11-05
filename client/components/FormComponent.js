import React from "react";
import { useSelector, useDispatch } from 'react-redux';


function FormComponent({handleSubmit, handleChange, formData, type}) {

  const users = useSelector((state) => state.users);
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (<form
    className="row g-3 row-cols-lg-auto align-items-center w-75 mx-auto my-4"
    onSubmit={handleSubmit}
  >
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
      <input
        type="date"
        className="form-control  form-control-sm"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
    </div>
    <div className="col-12">
      <button
        className="btn btn-outline-secondary"
        data-bs-dismiss="modal"
        type="submit"
        id="button-addon2"
      >
        {type}
      </button>
    </div>
  </form>)
}

export default FormComponent;
