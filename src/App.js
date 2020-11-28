import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="container">
          <h2>MERN-Stack Todo App</h2>
          <Route path="/" exact component={TodosList}/>
          <Route path="/edit/:id" component={EditTodo}/>
          <Route path="/create" component={CreateTodo}/>
        </div>
    </Router>
  );
}

export default App;
