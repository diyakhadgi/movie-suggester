import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Index from '../pages/Index'
import ViewMovie from '../pages/ViewMovie'
import AddMovie from '../pages/AddMovie';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/view_movie/:id" component={ViewMovie} exact />
        <Route path="/add" component={AddMovie} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/profile" component={Profile} exact/>
    </Switch>
    </BrowserRouter>
  )
}
