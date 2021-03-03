import './App.css';
import Main from './components/Main.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nav Links Here</p>
      </header>
      <Main />
      <footer className="App-footer">
        <p>Copyright 2021</p> 
        <p>Environment Variable: {process.env.REACT_APP_SERVER_URL}</p> 
      </footer>
    </div>
  );
}

export default App;
