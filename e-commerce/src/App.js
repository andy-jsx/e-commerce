import './App.css';
import Nav from './components/Navbar/Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
