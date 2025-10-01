import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";

const BlogList = ({ blogs }) => {
  // 🟢 Initialize local state with the blogs prop (or empty array if undefined)
  const [blogList, setBlogs] = useState(blogs || []);

  // 🟡 Whenever the parent updates `blogs`, sync it into our local state
  useEffect(() => {
    setBlogs(blogs || []);
  }, [blogs]);

  // what async function does: it returns something so until then the rest should be AWAIT
  const handleDelete = async (id) => {
  // Create a promise that deletes after 2 seconds
  const deletePromise = new Promise(async (resolve, reject) => {
    try {
      await fetch("http://localhost:8000/blogs/" + id, { method: "DELETE" });
      setTimeout(() => {
        setBlogs(blogList.filter(blog => blog.id !== id)); // update state immediately
        resolve(); // resolves after 2 seconds   
      }, 1500);
    } catch (err) {
      reject(err); // reject if something goes wrong
    }
  });

  // Show toast while waiting for the promise
  toast.promise(deletePromise, {
    loading: "Deleting blog...",
    success: "Blog deleted successfully!",
    error: "Failed to delete blog."
  });
};

  return (
    <div className="blog-list">
      <Toaster position="bottom-right" richColors />
      { blogList.length === 0 ? (
        <div>No blogs available. {<Link to="/create">Create One.</Link>}</div>
      ) : (
        blogList.map(blog => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </Link>
            <button className="delete-btn" onClick={() => handleDelete(blog.id)}>
              <FaTrash className="trash-icon" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
