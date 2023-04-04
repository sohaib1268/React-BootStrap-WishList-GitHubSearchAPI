import './App.css';
import Github from './Components/Github';
import List from './Components/List';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/list">Wishlist</Link>
          <Link class="navbar-brand" to="/github">Github Search</Link>
        </div>
      </nav>
    </div>
    <Switch>
        <Route exact path="/list" component={List}/>
        <Route exact path="/github" component={Github}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
