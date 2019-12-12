import React, { useState } from 'react';
import axiosWithAuth from '../../axiosWithAuth';
import styled from 'styled-components';

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
        
      })
      .catch(err => {console.log(err)})
    }; 

    const Label = styled.label`
      color: green;
    `

    const Container = styled.div`
      margin: 0 auto;
      width: 20%;

      
    `

    const Input = styled.input`
      text-align: center;
    `

    const Form = styled.form`
      display: flex;
      flex-flow: row nowrap;
    `

   
 
    

  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Label>Name </Label>
          <Input 
            placeholder="Name"
            type="text"
            name="name"
            value={addedFriend.name}
            onChange={handleChange}
          />
        </Container>
        <Container>  
          <Label>Age </Label>
          <Input 
            placeholder="Age" 
            type="num" 
            name="age" 
            value={addedFriend.age} 
            onChange={handleChange}/>
        </Container>
        <Container>  
          <Label>Email </Label>
          <Input placeholder="Email" type="email" name="email" value={addedFriend.email} onChange={handleChange}/>
        </Container>
        <button type="submit">Add</button>
      </Form>
    </div>
  )
}

export default FriendsForm;

