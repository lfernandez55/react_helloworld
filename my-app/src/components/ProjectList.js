import { useContext } from 'react'
import { ProjectContext } from '../App.js';
import { useHistory, Link } from 'react-router-dom'

export default function ProjectList(props) {
    let { projects, setProjects } = useContext(ProjectContext)

    const history = useHistory()

    const deleteMe = (param) => {
        let url = "api/projects/" + param;
        fetch(url, {
            method: "DELETE",
        })
            .then((response) => {
                return response.json();
            })
            .then((resp) => {
                // the delete was successful on the backend so update the context
                console.log(resp);
                let newProjArray = projects.filter(proj => proj._id !== param)
                setProjects(newProjArray)
                
            })
            .catch((err) => {
                // Code called when an error occurs during the request
                console.log(err.message);
            });
    }
    
    const addProj = (param) => {
        let url = "api/projects/" 
        fetch(url, {
            method: "POST",
        })
            .then((response) => {
                return response.json();
            })
            .then((resp) => {
                // the add was successful on the backend so update the context
                alert('TODO: Proj was added successfully (still need code to update frontend GUI')
                
            })
            .catch((err) => {
                // Code called when an error occurs during the request
                console.log(err.message);
            });
    }

    const updateMe = (param) => {
        let url = "api/projects/" + param;
        fetch(url, {
            method: "PUT",
        })
            .then((response) => {
                return response.json();
            })
            .then((resp) => {
                // the update was successful on the backend 
                console.log(resp);
               
            })
            .catch((err) => {
                // Code called when an error occurs during the request
                console.log(err.message);
            });
    }


    return (
        <div>
            <h2>Your Projects</h2>
            <button onClick={addProj} >Add Project</button><li><Link to="/project"><button>Add Projectx</button></Link></li>
            <table className="proj-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th >description</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.projs.map( (e,i) => {
                            return (
                                <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.description}</td>
                                    <td><button onClick={()=>{ updateMe(e._id) }} >Update to Beef</button> <button className="primary" onClick={() => history.push(`/project/${e._id}`)}>Edit</button>    </td>
                                    <td> <button onClick={()=>{ deleteMe(e._id) }} >Delete</button>  </td>
                                </tr>
        
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
