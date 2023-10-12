import './App.css';
import Main from './components/Main/Main';
import Nav from './components/Navbar/Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Main />
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
