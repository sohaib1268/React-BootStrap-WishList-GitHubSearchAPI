import './App.css';
import Github from './Components/Github';
import List from './Components/List';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Homepage from './Components/Homepage';


function App() {
  return (
    <>
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/list">Wishlist</Link>
          <Link className="navbar-brand" to="/home">Home</Link>
          <Link className="navbar-brand" to="/github">Github Search</Link>
        </div>
      </nav>
    </div>
    <Switch>
        <Route exact path="/list" component={List}/>
        <Route exact path="/github" component={Github}/>
        <Route exact path="/home" component={Homepage}/>
        <Route exact path="/" component={Homepage}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
