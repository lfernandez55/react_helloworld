import './App.css';
import Main from './components/Main.js'
import ProjectList from './components/ProjectList.js'
import ProjectForm from './components/ProjectForm.js'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'

export const ProjectContext = createContext()


function App() {

  let myArray = [{ "title": "Whale (these obj load when server is down) " }, { "title": "Fish" }]

  const [projects, setProjects] = useState(myArray);
  const [DBUpdated, setDBUpdated] = useState(false);


  useEffect(() => {
    fetch('api/projects', {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        console.log('something is returned....');
        console.log(resp)
        setProjects(resp)
        setDBUpdated(false)
      })
      .catch((err) => {
        // Code called when an error occurs during the request
        console.log(err.message);
      });
  }, [DBUpdated])

  useEffect(() => {
    console.log("DBUpdated value changed....")
  }, [DBUpdated])

  return (
    <ProjectContext.Provider value={{ projects, setProjects, DBUpdated, setDBUpdated }}>
      <Router>

        <div className="App">
         <header >
           <h2>Mongo, Express, React CRUD App</h2>
         </header>
          <header className="App-header">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/list"> Project List</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <ul>
              {/* <li>
              <button className="Sort-button" onClick={() => testAPI("Foo")}  >Test API</button>
            </li> */}
              <li>
                <Route path="/list">
                  <button className="Sort-button"   >Sort List</button>
                </Route>
              </li>
            </ul>

          </header>
          <Switch>
            <Route path="/list">
              <ProjectList projs={projects} />
            </Route>

            <Route path="/project/:pid">
              <ProjectForm />
            </Route>
            <Route path="/project">
              <ProjectForm />
            </Route>
            <Route path="/about">
              <h4>Build an about component here</h4>
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
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
