import { Link, Outlet } from 'react-router-dom'

export default function Layout() {

    return (
        <div>
            <header >
                <h2>Mongo, Express, React CRUD App</h2>
            </header>
            <header className="App-header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/list"> Project List</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>


            </header>
            <Outlet />
            <footer className="App-footer">
                <p>Copyright 2021</p>
                <p>Environment Variable (set in root/.env): {process.env.REACT_APP_SERVER_URL}</p>
            </footer>
        </div>
    );
}