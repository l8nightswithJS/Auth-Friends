import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../axiosWithAuth';
import Friends from './Friends';
import FriendForm from './friendsForm';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    // console.log(props);
    
    
    useEffect(() => {
      axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
          console.log(res.data);
          setFriends(res.data);
          
        })
        .catch(err => console.log(err))
    }, []);


    
    
    
    return (
      <div>
        <h3>Add New Friend</h3>
        <FriendForm friends={friends} setFriends={setFriends} />
        <h3>You have {friends.length} friends!</h3>
        <div className="cards">
          {friends.map(friend => (
            <Friends key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    );
  }
  
  export default FriendsList;