import {Switch, Route, Link, Redirect, useHistory} from 'react-router-dom'

export default function Main() {
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
                </Route>
            </Switch>
        </div>
    )
}
