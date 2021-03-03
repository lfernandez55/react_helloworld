import './App.css';
import Main from './components/Main.js'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/about">About</Link></li>
         </ul>
          <Route path="/list">
            <button className="Sort-button">Sort List</button>
          </Route>
        </header>
        <Main />
        <footer className="App-footer">
          <p>Copyright 2021</p> 
          <p>Environment Variable (set in root/.env): {process.env.REACT_APP_SERVER_URL}</p> 
        </footer>
      </div>
    </Router>
  );
}

export default App;
