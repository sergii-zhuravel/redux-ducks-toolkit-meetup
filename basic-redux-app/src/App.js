import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import TodosPage from "./pages/Todos";
import PostsPage from "./pages/Posts";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="my-4 my-0 mx-auto w-50">
        <div>
          <nav className="navbar">
            <Link className="nav-item" to="/">
              Home
            </Link>
            <Link className="nav-item" to="/todos">
              Todos
            </Link>
            <Link className="nav-item" to="/posts">
              Posts
            </Link>
          </nav>
        </div>
        <Switch>
          <Route path="/todos">
            <TodosPage />
          </Route>
          <Route path="/posts">
            <PostsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
