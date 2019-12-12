import React from 'react';
// import axiosWithAuth from '../../axiosWithAuth';

const Friends = ({ friend }) => {
    return (
        <>
            <div>
                <h1>{friend.name}</h1>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
            </div>
        </>
    )
}

export default Friends;