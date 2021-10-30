import Sidebar from "./components/Sidebar";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useRoutes} from './routes'

function App() {
  const routes = useRoutes();
  return (
      <Router>
        {routes}
      </Router>
    
  );
}

export default App;
