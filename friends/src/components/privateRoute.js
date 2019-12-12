import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest }) => (
      <Route
        {...theRest}
        render={props =>
          localStorage.getItem("token") ? ( 
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
            )
          }
      />
    );

// const Routes = () => {
//     return (
//         <div>
//             <Route exact path="/" render={() => <Login />} />
//             <PrivateRoute path="/friends" render={() => <FriendsList />} />
//         </div>
//     )
// }    
  
  export default PrivateRoute;