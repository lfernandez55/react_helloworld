import './App.css';
import Main from './components/Main.js'
import ProjectList from './components/ProjectList.js'
import ProjectForm from './components/ProjectForm.js'
import Layout from './components/Layout.js'
import About from './components/About.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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


          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/list" element={<ProjectList projs={projects} />}></Route>
              <Route path="/project/:pid" element={<ProjectForm />}></Route>
              <Route path="/project" element={<ProjectForm />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route exact path="/" element={<Main />}></Route>
            </Route>
          </Routes>

        </div>
      </Router>
    </ProjectContext.Provider>
  );
}

export default App;
