import Sidebar from "./components/Sidebar";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Comment from './components/Comment'

function App() {
  return (
      <Router>
        <div className="app">
          <Sidebar />
        </div>
        <Switch>
          <Route path="/comment">
            <Comment />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
