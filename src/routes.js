import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history'
//components
import Home from './components/home';
import Header from './components/header';
import UserList from './components/users/usersList';
import AddUser from './components/users/addUser';
import UpdateUser from './components/users/updateUser';

const Routes = () => {
    return (
        <Router history={createBrowserHistory()} >
            <Header />
            <br />
            <br />
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/users' component={UserList} />
                    <Route path='/add-user' component={AddUser} />
                    <Route path='/update-user/:id' component={UpdateUser} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;
