import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Readpage from './Pages/Readpage';
import Editpage from './Pages/Editpage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element = { <Homepage/> } />
        </Routes>
        <Routes>
          <Route exact path='/read' element = { <Readpage/> } />
        </Routes>
        <Routes>
          <Route exact path='/edit/:id' element = { <Editpage/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
