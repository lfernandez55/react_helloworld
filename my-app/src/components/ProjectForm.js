import { useContext } from 'react'
import { ProjectContext } from '../App'
import { useParams, useNavigate } from 'react-router-dom'


export default function ProjectForm() {

    const navigate = useNavigate()

    let { projects, setDBUpdated } = useContext(ProjectContext)

    let { pid } = useParams()
    // pid = parseInt(pid)

    let project;
    if (pid) {
        project = { ...projects.find(p => p._id === pid) }
    } else {
        let maxId = 1
        if (projects.length > 0){
            maxId = projects[projects.length - 1].id + 1
        } 
        project = { "id": maxId, "title": "", "description": "" }
    }


    const handleTitleChange = (event) => {
        project.title = event.target.value
    }
    const handleDescriptionChange = (event) => {
        project.description = event.target.value
    }


    const addUpdateProjForm = (e) => {

        e.preventDefault();

        let url = ""
        let fetch_method = ""
        if (pid) {
            url = "api/projects/" + project._id;
            fetch_method = "PUT";
        } else {
            url = "api/projects/";
            fetch_method = "POST";
        }

        fetch(url, {
            method: fetch_method,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(project),
            credentials: "include"
        })
            .then((response) => {
                return response.json();
            })
            .then((resp) => {
                // the add was successful on the backend so update the context
                setDBUpdated(true)
                navigate('/list')
            })
            .catch((err) => {
                // Code called when an error occurs during the request
                console.log(err.message);
            });

    }

    return (
        <div>
            <h1>Project FORM</h1>
            <form onSubmit={addUpdateProjForm}>
                <div>
                    <label>id:</label>
                    <input type="text" name="id" defaultValue={project.id} disabled />
                </div>
                <div>
                    <label>title:</label>
                    <input type="text" name="title" defaultValue={project.title} onChange={handleTitleChange} />
                </div>
                <div>
                    <label>description:</label>
                    <input type="text" name="description" defaultValue={project.description} onChange={handleDescriptionChange} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}