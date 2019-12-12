import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../axiosWithAuth';

function FriendsForm (props) {
  const [addedFriend, setAddedFriend] = useState({
    name: '', age: '', email: ''
  })

  const handleChange = e => {
    setAddedFriend({
      ...addedFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/friends/', addedFriend)
      .then(res => {
       console.log(res);
        
        props.setFriends(res.data);
        // console.log(addedFriend);
        props.history.goBack();
      })
      .catch(err => {console.log(err)})
    }; 

   

   
 
    

  return(
    <div>
      <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            placeholder="Name"
            type="text"
            name="name"
            value={addedFriend.name}
            onChange={handleChange}
          />
          <label>Age</label>
          <input placeholder="Age" type="num" name="age" value={addedFriend.age} onChange={handleChange}/>
          <label>Email</label>
          <input placeholder="Email" type="email" name="email" value={addedFriend.email} onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default FriendsForm;

