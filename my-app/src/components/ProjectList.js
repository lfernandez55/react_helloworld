export default function ProjectList(props) {
    return (
        <div>
            <h2>Your Projects</h2>
            <table className="proj-table">
            {
                props.projs.map( (e,i) => {
                    return (
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
   
                    )
                })
            }
            </table>

        </div>
    )
}
