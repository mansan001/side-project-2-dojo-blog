import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

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
// - Clean up function in useEffect
// - Route Parameters -- Reuse the useFetch custom hook in Home.js for fetching a single blog id.