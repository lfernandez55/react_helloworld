import { useContext } from 'react'
import { ProjectContext } from '../App'
import { useParams, useNavigate } from 'react-router-dom'


export default function ProjectForm() {

    const navigate = useNavigate()

    let { projects, setProjects } = useContext(ProjectContext)

    let { pid } = useParams()
    pid = parseInt(pid)
    console.log("dork" + pid)
    console.log(projects)
    // let project = pid ? projects.find(p => p.id === pid) : {}
    let maxId = projects[projects.length - 1].id + 1
    let project = pid ? projects.find(p => p.id === pid) : { "id": maxId, "title": "", "description": "" }

    // let project = {}
    // if (pid) {
    //     project = projects.find(p => {
    //         if (p.id == pid) {
    //             console.log("Passed test +")
    //             return p;
    //         }
    //     })
    // }
    console.log(project)
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
        console.log("in addProjForm" + e)
        e.preventDefault();
        console.log(project)
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
            console.log("hohoohoohh")
            console.log(newProjs)
        }
        setProjects([...newProjs])
        navigate('/list')

        // console.log(e.target.id.value)
        // let formObj = {};
        // formObj.id = e.target.id.value;
        // formObj.title = e.target.title.value;
        // formObj.description = e.target.description.value;
        // console.log(formObj)

        // let url = ""
        // let fetch_method = ""
        // if (pid) {
        //     url = "api/projects/" + pid;
        //     fetch_method = "PUT";
        // } else {
        //     url = "api/projects/";
        //     fetch_method = "POST";
        // }

        // fetch(url, {
        //     method: fetch_method,
        //     headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        //     body: JSON.stringify(formObj),
        //     credentials: "include"
        // })
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((resp) => {
        //         // the add was successful on the backend so update the context
        //         /*
        //         The below updates to state aren't needed becuz when you redirect to 
        //         ProjectList useEffect reloads the projects from the db and updates the state

        //         if(resp.method === "POST"){
        //             console.log("new", resp._id, project)
        //             // create a new project and 
        //             project._id = resp._id;
        //             projects.push(project)
        //             setProjects([...projects])
        //         } else {
        //             console.log("update", resp._id, project)
        //             // create a new proj array, only instead of the original project use the updated project
        //             // or in greater detail:
        //             // using map go thru each project in the original projects array
        //             // using the _id, if the project is one we want to update, replace it with the new one
        //             let newProjs = projects.map(e => {
        //                 if (e.id == resp._id){
        //                   e = project
        //                 }
        //                 return e;
        //             })
        //             // re-update the projects state 
        //             setProjects([...newProjs])
        //         }
        //         */
        //         setDBUpdated(true)
        //         navigate('/list')
        //     })
        //     .catch((err) => {
        //         // Code called when an error occurs during the request
        //         console.log(err.message);
        //     });

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