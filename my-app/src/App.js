import './App.css';
import Main from './components/Main.js'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {useState, createContext} from 'react'

export const ProjectContext = createContext()


function App() {

const [projects, setProjects] = useState({});

  const testAPI = (param) => {
    alert(param)
    fetch('api/test', {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        console.log('something is returned....');
        console.log(resp)
        setProjects(resp)
      })
      .catch((err) => {
        // Code called when an error occurs during the request
        console.log(err.message);
      });
  }


  return (
    <ProjectContext.Provider value={{projects, setProjects}}>
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <ul>
            <li>
              <button className="Sort-button" onClick={() => testAPI("Foo")}  >Test API</button>
            </li>
            <li>
              <Route path="/list">
                <button className="Sort-button"   >Sort List</button>
              </Route>
            </li>
          </ul>

        </header>
        Test api: <h1>{projects.name}</h1>
        <Main />
        <footer className="App-footer">
          <p>Copyright 2021</p> 
          <p>Environment Variable (set in root/.env): {process.env.REACT_APP_SERVER_URL}</p> 
        </footer>
      </div>
    </Router>
    </ProjectContext.Provider>
  );
}

export default App;
