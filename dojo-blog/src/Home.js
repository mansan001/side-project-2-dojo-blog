import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json()) // transform the data into json, res means response.
            .then(data => setBlogs(data)) // set the data
    }, []);
 
    return (
        <div className="home">
            {blogs && <BlogList blogs={ blogs }/>}
        </div>
    );
}
 
export default Home;