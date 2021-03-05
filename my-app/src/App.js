import './App.css';
import Main from './components/Main.js'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {useState, createContext, useEffect } from 'react'

export const ProjectContext = createContext()


function App() {

let myArray =  [{"title": "Whale"},{"title": "Fish"}] 

const [projects, setProjects] = useState(myArray);
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
      })
      .catch((err) => {
        // Code called when an error occurs during the request
        console.log(err.message);
      });
},[])

function renderProj(projects){
  let myArray = projects.map( (e,i) => {
    return (<p key={i}  >  {e.title}  </p>)
    })
  return (myArray)
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
        { renderProj( projects ) } 
        
        {projects.map( (e,i) => {
          return (<p key={i}  >  {e.title}  </p>)
          })}
        <Main projs={projects} />
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
