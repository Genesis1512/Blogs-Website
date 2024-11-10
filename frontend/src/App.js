
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './pages/home.jsx'
import Blogs from './pages/blogs.jsx'
import Add from './pages/add.jsx'
import ID from './pages/ID.jsx'
function App() {
  return (
    <>
    <Router>
      
          <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/blog" element={<Blogs />} />
           <Route path="/add" element={<Add />} />
           <Route path="/blog/:id" element={<ID />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
