import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CategoryCreateForm from './components/CategoryCreateForm';
import CategoryEditForm from './components/CategoryEditForm';
import CategoryList from './components/CategoryList';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Transaction from './components/Transaction';
import UsersList from './components/UsersList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/category/create">
          <CategoryCreateForm/>
        </Route>

        <Route path="/category/:id/edit">
          <CategoryEditForm/>
        </Route>

        <Route path="/category">
          <CategoryList/>
        </Route>

        <Route path="/users">
          <UsersList/>
        </Route>

        <Route path="/transaction">
          <Transaction/>
        </Route>

        <Route path="/home">
          <HomePage/>
        </Route>

        <Route path="/">
          <LoginPage/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
