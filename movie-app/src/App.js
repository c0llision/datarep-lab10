import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HelloWorld from './components/HelloWorld';

import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Lab3</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={HelloWorld}/>
          <Route exact path="/read" component={Read}/>
          <Route exact path="/create" component={Create}/>
          <Route path="/edit/:id" component={Edit}/>
        </Switch>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
