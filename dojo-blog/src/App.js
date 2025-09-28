import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// npx json-server --watch data/db.json --port 8000
// sfc for quick react component snippet

// Pushing:
// git status
// git add .
// git commit -m "message"
// git push

// Todos:
// - Form in Create file: DONE
// - prevent function for submitting the form: DONE 
// - Redirect Page once submitted: Done
// - Delete blogs: Done
// - 404 Request: 

// - Add a text when there's no item displayed (when all blogs are deleted)
// - Add delete button in the quick view bar per blog
// - Add confirmation before deleting
// - Design 404 Page