import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Users from './Users';
import { Link, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/users'>Users</Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path='/users' component={Users}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
