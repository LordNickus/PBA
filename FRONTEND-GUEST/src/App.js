import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import CategoryCreateForm from './components/CategoryCreateForm';
import CategoryEditForm from './components/CategoryEditForm';
import CategoryList from './components/CategoryList';
import HomePage from './pages/HomePage';
import Transaction from './pages/Transaction';
import TransactionEditForm from './components/TransactionEditForm'
import SignIn from './pages/LoginPage';
import SignUp from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/category/create">
          <CategoryCreateForm/>
        </Route>

        <Route path="/categories/:id/edit">
          <CategoryEditForm/>
        </Route>

        <Route path="/category">
          <CategoryList/>
        </Route>

        <Route path="/transaction/:id/edit">
          <TransactionEditForm/>
        </Route>

        <Route path="/transaction">
          <Transaction/>
        </Route>

        <Route path="/home">
          <HomePage/>
        </Route>

        <Route path="/register">
          <SignUp/>
        </Route>

        <Route path="/">
          <SignIn/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
