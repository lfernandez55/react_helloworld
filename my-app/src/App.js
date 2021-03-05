import './App.css';
import Main from './components/Main.js'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function App() {

  const testAPI = (param) => {
    alert(param)
    fetch('api/projects', {
      //fetch('http://localhost:8080/api/test', {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        console.log('something is returned....');
        console.log(resp)
      })
      .catch((err) => {
        // Code called when an error occurs during the request
        console.log(err.message);
      });
  }


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/about">About</Link></li>
         </ul>
             <button className="Sort-button" onClick={ () => testAPI("Foo") }  >Test API</button>
          <Route path="/list">
            <button className="Sort-button"   >Sort List</button>
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
