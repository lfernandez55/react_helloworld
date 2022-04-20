import { useContext } from 'react'
import { ProjectContext } from '../App.js';
import { useNavigate, Link } from 'react-router-dom'

export default function ProjectList(props) {
    let { projects, setProjects } = useContext(ProjectContext)

    const navigate = useNavigate()


    const deleteMe = (param) => {
        let newProjArray = projects.filter(proj => {
            if (proj.id !== param) {
                return true
            } else {
                return false
            }

        }
        )
        setProjects(newProjArray)
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
                                    <td> <button onClick={() => { deleteMe(e.id) }} >Delete</button>  </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
