import { useContext } from 'react'
import { ProjectContext } from '../App.js';
import { useNavigate, Link } from 'react-router-dom'

export default function ProjectList(props) {
    let { setDBUpdated } = useContext(ProjectContext)

    const navigate = useNavigate()

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

                /* Instead of running these two line:
                    let newProjArray = projects.filter(proj => proj._id !== param)
                    setProjects(newProjArray)
                   I simply change the setDBUpdated.  Over in App.js the useEffect is
                   watching for a change to this var.  If it changes, it re-queries the
                   db which also updates the state.
                */
                setDBUpdated("changed")
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
                        props.projs.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.description}</td>
                                    <td><button className="primary" onClick={() => navigate(`/project/${e.id}`)}>Edit</button>    </td>
                                    <td> <button onClick={() => { deleteMe(e._id) }} >Delete</button>  </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}