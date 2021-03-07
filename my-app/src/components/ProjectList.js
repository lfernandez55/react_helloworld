import { useContext } from 'react'
import { ProjectContext } from '../App.js';

export default function ProjectList(props) {
    let { projects, setProjects } = useContext(ProjectContext)
    const deleteMe = (param) => {
        let newProjArray = projects.filter(proj => proj.id !== param)
        setProjects(newProjArray)
    }
    
    return (
        <div>
            <h2>Your Projects</h2>
            <table className="proj-table">
                <tbody>
                    {
                        props.projs.map( (e,i) => {
                            return (
                                <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>Update</td>
                                    <td> <button onClick={()=>{ deleteMe(e.id) }} >Delete</button>  </td>
                                </tr>
        
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
