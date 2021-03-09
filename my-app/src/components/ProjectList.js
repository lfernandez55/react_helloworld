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
    

    return (
        <div>
            <h2>Your Projects</h2>
            <Link to="/project"><button>Add Project</button></Link>
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
                                    <td><button className="primary" onClick={() => history.push(`/project/${e._id}`)}>Edit</button>    </td>
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
