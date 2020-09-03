import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Author from './components/Author'
import Home from './components/Home';
import BookDetail from './components/BookDetail';
import history from "./utils/history";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter history={history}>
      <Route path='/' exact={true} component={Home} />
      <Route path='/author' component={Author} />
      <Route path="/book/:id" >
        <BookDetail />
      </Route>
    </BrowserRouter>
  );
}

export default App;
