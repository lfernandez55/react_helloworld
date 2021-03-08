import { useContext } from 'react'
import { ProjectContext } from '../App'
import { useParams } from 'react-router-dom'

export default function ProjectForm() {
    
    let { projects} = useContext(ProjectContext)

    let {foo} = useParams()
    console.log("foo", foo)
    let {pid} = useParams()
    console.log("pid", pid)
    let project = pid ? projects.find(p => p._id === pid) : {}
    

    const addProjForm = (e) => {

        e.preventDefault();
        console.log(e.target.id.value)
        let formObj = {};
        formObj.id = e.target.id.value;
        formObj.title = e.target.title.value;
        formObj.description = e.target.description.value;
        console.log(formObj)

        let url = "" 
        let fetch_method = ""
        if(pid){
            url = "api/projects/" + pid;
            fetch_method = "PUT";
        }else{
            url = "api/projects/"; 
            fetch_method = "POST";
        }
        console.log("zzzzzzzzzzzz", url, fetch_method)

        fetch(url, {
            method: fetch_method,
            headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*'},
            body:  JSON.stringify(formObj),
            credentials: "include"
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
    
    return (
        <div>
            <h1>Project FORMx</h1>
            <form onSubmit={addProjForm}>
                <div>
                    <label>id:</label> <input type="text" name="id" defaultValue={project.id} />
                </div>
                <div>
                    <label>title:</label> <input type="text" name="title"  defaultValue={project.title} />
                </div>
                <div>
                    <label>description:</label> <input type="text" name="description" defaultValue={project.description} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}