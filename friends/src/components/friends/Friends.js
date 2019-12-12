import React from 'react';
import styled from 'styled-components'
// import axiosWithAuth from '../../axiosWithAuth';

const Friends = (props) => {
    console.log(props);

    const Container = styled.div`
        border: 1px solid;
        margin: 0 auto;
        width: 20%;
    `

    const Header = styled.h1`
        color: red;
    `

    return (
        <>
            <Container>
                <Header>{props.friend.name}</Header>
                <p>{props.friend.age}</p>
                <p>{props.friend.email}</p>
                {/* <button onClick={props.handleDelete}>x</button> */}
            </Container>
        </>
    )
}

export default Friends;