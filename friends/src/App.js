import React from 'react';
import './App.css';
import Login from './components/login/Login';
import PrivateRoute from "./components/privateRoute";
import FreindsList from './components/friends/friendList';
import {Route, Link, Switch, withRouter} from 'react-router-dom';


class App extends React.Component {

  render() {
    const {history} = this.props;

    return (
      <>
        <div className='App'>
        <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/protected'>Friends</Link></li>
        </ul>
        <Switch> 
          <PrivateRoute exact path='/protected' component={FreindsList} />
          <Route path='/login' render={() => <Login history={history} />}></Route>
        </Switch>
          
        </div>
  
      </>
    );
  }
  
}

export default withRouter(App);
