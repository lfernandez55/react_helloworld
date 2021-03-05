import {Switch, Route } from 'react-router-dom'
import {useState } from 'react'




export default function Main(props) {
    const [projects, setProjects] = useState();
    return (
        <div>
            
            <Switch>

                <Route path="/list">
                    <h4>Build a list component here</h4>
                    
                </Route>
                <Route path="/about">
                    <h4>Build an about component here</h4>
                </Route>
                <Route path="/">
                    <h4>Default Home Content</h4>
                    llll: 
                    {props.projs.map( (e,i) => {
                        return (<p key={i}>  {e.title}  </p>)
                    })}
                </Route>
            </Switch>
        </div>
    )
}
