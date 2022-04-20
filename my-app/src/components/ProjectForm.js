import { useContext } from 'react'
import { ProjectContext } from '../App'
import { useParams, useNavigate } from 'react-router-dom'


export default function ProjectForm() {

    const navigate = useNavigate()

    let { projects, setProjects } = useContext(ProjectContext)

    let { pid } = useParams()
    pid = parseInt(pid)

    let project;
    if (pid) {
        project = projects.find(p => p.id === pid)
    } else {
        let maxId = projects[projects.length - 1].id + 1
        project = { "id": maxId, "title": "", "description": "" }
    }

    const handleIdChange = (event) => {
        project.id = event.target.value
    }
    const handleTitleChange = (event) => {
        project.title = event.target.value
    }
    const handleDescriptionChange = (event) => {
        project.description = event.target.value
    }


    const addProjForm = (e) => {
        e.preventDefault();
        let newProjs;
        if (pid) {
            //update
            newProjs = projects.map(e => {
                if (e.id === pid) {
                    e = project
                }
                return e;
            })
        } else {
            //add
            newProjs = [...projects];
            newProjs.push(project)
        }
        setProjects([...newProjs])
        navigate('/list')

    }

    return (
        <div>
            <h1>Project FORM</h1>
            <form onSubmit={addProjForm}>
                <div>
                    <label>id:</label>
                    <input type="text" name="id" defaultValue={project.id} onChange={handleIdChange} disabled />
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