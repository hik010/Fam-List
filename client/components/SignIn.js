import axios from 'axios';
import React, { useState } from 'react';

function SignIn(props) {
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let {data : token} = await axios.post('/auth',formData);
      window.localStorage.setItem('jwt-token', token);
      props.attemptLogin();

    } catch(e) {
      alert(e.response.data)
    }
  }

  const disableSubmit = () => {
    return (!(formData.name && formData.password));
  }

  return (
    <form className="w-50 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3 ">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={disableSubmit()}>
        Login
      </button>
    </form>
  );
}

export default SignIn;
