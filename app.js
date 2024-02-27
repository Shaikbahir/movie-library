import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Movies} />
        <PrivateRoute exact path="/movies/:id" component={MovieDetails} />
      </Switch>
    </Router>
  );
}

export default App;
