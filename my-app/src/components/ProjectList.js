import { useContext } from 'react'
import { ProjectContext } from '../App.js';

export default function ProjectList(props) {
    let { projects, setProjects } = useContext(ProjectContext)
    const deleteMe = (param) => {
        let newProjArray = projects.filter(proj => proj._id !== param)
        console.log("param: ", param)
        console.log(newProjArray)
        setProjects(newProjArray)
        console.log("debugme")
        let url = "api/projects/" + param;
        fetch(url, {
            method: "DELETE",
        })
            .then((response) => {
                return response.json();
            })
            .then((resp) => {
                console.log('something is returned....');
                console.log(resp)
            //   setProjects(resp)
            })
            .catch((err) => {
                // Code called when an error occurs during the request
                console.log(err.message);
            });
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
