import React, { useState } from 'react';
import axiosWithAuth from '../../axiosWithAuth'

const Login = ({history}) => {
 const [credentials, setCredentials] = useState({});
 const [isLoading, setIsLoading] = useState(false);
//  console.log(history);
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
    .post('login', credentials)
      .then(res => {
        //   console.log(res.data.payload);
        localStorage.setItem('token', res.data.payload);
        setIsLoading(false);
        history.push('/protected');
      })
      .catch(err => console.log(err))
  };

  const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      })
  }

    return (
    <>
      {isLoading ? ( 'Loading...' ) : (
        <form  className='form' onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      )}
    </>  
    )
}

export default Login;